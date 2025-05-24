import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner  from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps
={
  pageSize:7,
  country:"us",
  category:"technology",

}  
static propTypes={
  pageSize:PropTypes.number,
  country:PropTypes.string,
  category:PropTypes.string
}
constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0,
    };
    document.title="NewsNest-"+this.props.category;
  }
async updateNews(){
  this.props.setProgress(10);
const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page}`;


    this.setState({loading:true}); 
    let data = await fetch(url);
     this.props.setProgress(30);
    let parsedData = await data.json();
     this.props.setProgress(600);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,
      loading:false
       });  
       this.props.setProgress(100); 
}
  async componentDidMount() {
   this.updateNews();
  }

fetchMoreData = async () => {
   this.setState({ page: this.state.page + 1 }); 
 const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page}`;

    let data =  await fetch(url);
    let parsedData =  await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading:false
       });   
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin:'35px 0px'}}>NewsNest - Top {this.props.category} Headlines </h2>
     {this.state.loading &&<Spinner/>}
      <InfiniteScroll
         dataLength={this.state.articles?.length || 0}
hasMore={this.state.articles?.length !== this.state.totalResults}
next={this.fetchMoreData}
loader={<Spinner/>}
      >
        <div className="row">
         {this.state.articles && this.state.articles.map((element) => (
  <div className="col-md-4" key={element.url}>
    <NewsItem
      title={element.title ? element.title.slice(0, 50) : ""}
      description={element.description ? element.description.slice(0, 80) : ""}
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
  }
}

export default News;
