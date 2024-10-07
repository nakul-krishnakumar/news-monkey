import { Component } from "react";
import PropTypes from 'prop-types'
export class NewsItem extends Component {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        imageUrl: PropTypes.string,
        url: PropTypes.string,
        author: PropTypes.string,
        date: PropTypes.string
    }
    render() {
        let { title, description, imageUrl, url, author, date } = this.props;
        return (
            <div>
                <div className="card">
                    <img src={imageUrl || "https://lh6.googleusercontent.com/Bu-pRqU_tWZV7O3rJ5nV1P6NjqFnnAs8kVLC5VGz_Kf7ws0nDUXoGTc7pP87tyUCfu8VyXi0YviIm7CxAISDr2lJSwWwXQxxz98qxVfMcKTJfLPqbcfhn-QEeOowjrlwX1LYDFJN"} className="card-img-top" alt="..." />
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
}

export default NewsItem;
