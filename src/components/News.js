import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const updatePage = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
   
    // eslint-disable-next-line
    updatePage();
  }, []);

  const capitalizeFirstLetter = (str) => {
     let str1 = str.charAt(0).toUpperCase() + str.slice(1);
     return str1;
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  // const handlePreviousClick = async () => {
  //   setPage(page - 1);
  //   updatePage();
  // };

  // const handleNextClick = async () => {
  //   setPage(page + 1);
  //   updatePage();
  // };

  return (
    <>
     <div className="container">
      <h1 className="text-center" style={{margin: "35px,0ox",marginTop :"100px"}}>
        News App - Top {capitalizeFirstLetter(props.category)} Headlines :
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
       
          <div className="row">
            {articles.map((element) => {
              return(
              <div className="col-md-4 my-2" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author ? element.author : "Unknown"}
                  publishedAt={element.publishedAt}
                  source={element.source.name}
                />
              </div>
              )
            })}
          </div>
        
      </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 9,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: Number,
};

export default News;
