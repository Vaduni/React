import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

 const updateNews = async () => {
  try {
    props.setProgress(10);
    setloading(true);
const localApiKey = process.env.REACT_APP_NEWS_API_KEY;
    const isLocal = !window.location.hostname.includes("vercel.app");
const url = isLocal
      ? `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}&apiKey=${localApiKey}`
      : `/api/news?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    if (!data.ok) {
      console.error("API error:", parsedData);
      setarticles([]);
      settotalResults(0);
    } else {
      setarticles(parsedData.articles || []);
      settotalResults(parsedData.totalResults || 0);
    }
    
    setloading(false);
    props.setProgress(100);
  } catch (error) {
    console.error("Fetch error:", error);
    setloading(false);
    setarticles([]);
    settotalResults(0);
    props.setProgress(100);
  }
};


const fetchMoreData = async () => {
  const nextPage = page + 1;
  setpage(nextPage);
const localApiKey = process.env.REACT_APP_NEWS_API_KEY;
  const isLocal = !window.location.hostname.includes("vercel.app");

  const url = isLocal
    ? `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${nextPage}&pageSize=${props.pageSize}&apiKey=${localApiKey}`
    : `/api/news?country=${props.country}&category=${props.category}&page=${nextPage}&pageSize=${props.pageSize}`;

  let data = await fetch(url);
  let parsedData = await data.json();

 setarticles((prevArticles) => prevArticles.concat(parsedData.articles));

  settotalResults(parsedData.totalResults);
};

 useEffect(() => {
  document.title = "NewsNest - " + props.category;
  updateNews();
}, [props.category, props.country, props.pageSize]);



  return (
    <div className="container my-3">
      <h2 className="text-center" style={{ margin: "35px 0px", marginTop:'90px' }}>
        NewsNest - Top {props.category} Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 55) + "..." : ""}
                description={
                  element.description
                    ? element.description.slice(0, 80)
                    : ""
                }
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author ? element.author.slice(0, 30) : "Unknown"}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  pageSize: 7,
  country: "us",
  category: "technology",
};

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
  setProgress: PropTypes.func,
};

export default News;
