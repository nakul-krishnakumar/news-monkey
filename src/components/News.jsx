import { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        pageSize: 12,
        category: "general"
    }

    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter = (str)=>{
        return (str[0].toUpperCase() + str.slice(1));
    }

    constructor(props) {
        super(props);
        this.state = {
            article: [],
            loading: false,
            page: 1,
        };
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`;   
    }

    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=699cb030c1104da8adc85ba79ccb2664&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            article: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=699cb030c1104da8adc85ba79ccb2664&page=1&pageSize=${this.props.pageSize}`;
        
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            article: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handlePrevClick = () => {
        console.log("Previous");

        this.setState({page: this.state.page-1}, () => {
            this.updateNews();
        })
    }

    handleNextClick = () => {
        console.log("Next");

        this.setState({page: this.state.page+1}, () => {
            this.updateNews();
        })
    }
    render() {
        console.log(this.page)
        return (
            <div className="container">
                <h1 className="text-center mb-3">News Monkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>

                {this.state.loading && <Spinner />}

                <div className="row">
                    {!this.state.loading && this.state.article.map((e) => {
                        if (e.title != "[Removed]") {
                            return (
                                <div key={e.url ? e.url : " "} className="col-md-4">
                                    <NewsItem title={e.title ? (e.title.slice(0, 70) + "...") : " "} description={e.description ? e.description.slice(0, 150) : " "} imageUrl={e.urlToImage} url={e.url ? e.url : " "} author={e.author ? e.author : "unkown"} date={e.publishedAt}/>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="d-flex justify-content-between my-4">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize) } type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>  
        );
    }
}

export default News;
