import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const  capitalizeFirstLetter = (str)=>{
        return (str[0].toUpperCase() + str.slice(1));
    }

    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.setProgress(50); //top-loading-bar

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=699cb030c1104da8adc85ba79ccb2664&page=${page}&pageSize=${props.pageSize}`;
        
        setLoading(true);

        let data = await fetch(url);
        let parsedData = await data.json();

        console.log(parsedData); //testing

        setArticle(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);

        props.setProgress(100); //top-loading-bar
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`; 
        updateNews();
        //eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        setPage(page+1);

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=699cb030c1104da8adc85ba79ccb2664&page=${page+1}&pageSize=${props.pageSize}`;
        
        setLoading(true);

        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);

        setArticle(article.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }

        console.log(page);
        return (
            <>
                <h1 className="text-center" style={{marginBlock: "90px 30px"}}>News Monkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>

                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={article.length}
                    next={fetchMoreData}
                    hasMore={article.length != totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row" style={{marginTop: "10px"}}>
                            {article.map((e) => {
                                if (e.title != "[Removed]") {
                                    return (
                                        <div key={e.url ? e.url : " "} className="col-md-4">
                                            <NewsItem title={e.title ? (e.title.slice(0, 70) + "...") : " "} description={e.description ? e.description.slice(0, 150) : " "} imageUrl={e.urlToImage} url={e.url ? e.url : " "} author={e.author ? e.author : "unkown"} date={e.publishedAt} source={e.source.name ? e.source.name : "Unkown"}/>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>

                </InfiniteScroll>
            </>  
        );

}

News.propTypes = {
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    setProgress: PropTypes.func.isRequired
}

export default News;
