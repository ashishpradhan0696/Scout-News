import React , {useEffect, useState} from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';



export default function News({key, category, setProgress, darkMode}) {

    // console.log("Im at line 10")
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(2);
    const [totalResults, setTotalResults] = useState(0)

//   console.log("Im at line 16 - articles : " ,articles)


  const fetchNews= async ()=>{
      setProgress(10);
      setLoading(true);
     // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=58298554688f410e98d7f66e8c4ddb10&page=1&pageSize=6`;


      let url= `https://api.newscatcherapi.com/v2/latest_headlines?topic=${category}&countries=IN&page=1&page_size=5`
      let data = await fetch(url ,
        {
        headers: {
          'x-api-key':"Odl7dvep8vbOeuYY65pcSd7hFZ3MbH7MJxy1MZKAlbg"
               
            }
      });
      let parsedData = await data.json(); 
      setArticles(parsedData.articles);
      setLoading(false);
      setTotalResults(parsedData.total_pages);

      setProgress(100);
  }

  const fetchMoreData=async()=>{
      setPage(page=>page+1);

      setLoading(true);
      let url= `https://api.newscatcherapi.com/v2/latest_headlines?topic=${category}&countries=IN&page=${page}&page_size=5`
      let data = await fetch(url ,{
        headers: {
                
                'x-api-key': "Odl7dvep8vbOeuYY65pcSd7hFZ3MbH7MJxy1MZKAlbg"
            }
      });

      
      let parsedData = await data.json();

      setArticles(articles.concat(parsedData.articles));
      setLoading(false);
      setTotalResults(parsedData.total_pages);
  }

  useEffect(() => { 
      fetchNews();
  },[category])
  
//   console.log("page is" , page)
//   console.log("category is" , category);
//   console.log("Line 69 , articles is" , articles);
  

  return (
    <>
    {articles && 
     <div className="container my-4 text-center">
            <h3 style={{ color : darkMode===true? "white":"black"}}>scout news Top Headlines - {category==="general" ? "ALL" : category.toUpperCase()}</h3>

            <div className="row">
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={loading && <Spinner />}
                >
                </InfiniteScroll>
                
                {articles.map((element) => {
                    // if(element!==undefined) {
                    return <div className="col-md-4" key={key}>
                        <NewsItem title={element.title===null ?  "No title available":element.title } description={element.summary.slice(0,30)} imageUrl={element.media} newsUrl={element.link} publishedAt={element.published_date} source={element.clean_url} darkMode={darkMode} />
                    </div>
                    // }
                })}

            </div>
            {loading && <Spinner />}
        </div>
}
    </>
  )
}
