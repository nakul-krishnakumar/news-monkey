import PropTypes from 'prop-types';
const NewsItem = (props) => {
    let { title, description, imageUrl, url, author, date, source } = props;
    return (
        <div>
            <div className="card" style={{ marginBottom: "3rem" }}>
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger z-index-tooltip">{source}</span>
                <img src={imageUrl || "https://lh6.googleusercontent.com/Bu-pRqU_tWZV7O3rJ5nV1P6NjqFnnAs8kVLC5VGz_Kf7ws0nDUXoGTc7pP87tyUCfu8VyXi0YviIm7CxAISDr2lJSwWwXQxxz98qxVfMcKTJfLPqbcfhn-QEeOowjrlwX1LYDFJN"} className="card-img-top" alt="..." style={{ maxHeight: "50%" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author} On {new Date(date).toGMTString()}</small></p>
                    <a href={url} target="_blank" rel="norefferer" className="btn btn-primary">
                        See More
                    </a>
                </div>
            </div>
        </div>
    );
}

NewsItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    url: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    source: PropTypes.string
}

export default NewsItem;
