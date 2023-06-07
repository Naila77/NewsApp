import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{zIndex:'1', left:'92%'}}>
          
              {source ? source : "Unknown"}
            
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://www.handelsblatt.com/images/leseraufruf/29170514/2-format2003.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
           
            <h5 className="card-title">{title}...</h5>
            <p class="card-text">
              <small class=" text-success">
                 by {author} on {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
