import { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    constructor() {
        super();
        console.log("Hello");
        this.state = {
            article: [],
            loading: false,
            page: 1,
        };
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=699cb030c1104da8adc85ba79ccb2664&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            article: parsedData.articles,
        })
    }

    handlePrevClick = async () => {
        console.log("Previous");

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=699cb030c1104da8adc85ba79ccb2664&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()

        this.setState({
            page: this.state.page-1,
            article: parsedData.articles,
        })
    }

    handleNextClick = async () => {
        console.log("Next");

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=699cb030c1104da8adc85ba79ccb2664&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        
        this.setState({
            page: this.state.page+1,
            article: parsedData.articles,
        })
    }
    render() {
        console.log(this.page)
        return (
            <div className="container">
                <h2>Top Headlines</h2>

                <div className="row">
                    {this.state.article.map((e) => {
                        if (e.title != "[Removed]") {
                            return (
                                <div key={e.url ? e.url : " "} className="col-md-4">
                                    <NewsItem title={e.title ? (e.title.slice(0, 70) + "...") : " "} description={e.description ? e.description.slice(0, 150) : " "} imageUrl={e.urlToImage} url={e.url ? e.url : " "} />
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="d-flex justify-content-between my-4">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>  
        );
    }
}

export default News;
