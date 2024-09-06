import React, { useEffect, useState } from "react"
import NewsItem from "./NewsItem";


const Newsboard = ({category}) => {

    const [articles,setArticles]= useState([]);

    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(Response=>Response.json()).then(data=>setArticles(data.articles));
    },[])
  return (
    <><h2 className='text-center'>Samarcharam<span className="badge text-bg-danger">news</span></h2>
    {articles.map((news,index)=>{
        return<NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url= {news.url}/>

    })}
    </>
  )
}

export default Newsboard
