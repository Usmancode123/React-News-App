import {useState, useEffect } from "react";
// import Card from "./Card";

const NewsItem = () => {


const [news ,setNews]=useState([])
  
   const  getdata=async ()=>{
    let response =await fetch('https://newsapi.org/v2/everything?q=apple&from=2024-08-08&to=2024-08-08&sortBy=popularity&apiKey=aa50dfd896c84dfd8aba73e44c4050f3')
  let data = await response.json();
setNews(data.articles);
  
    
   }
 
   useEffect(()=>{
        getdata()

    },[])
    

  return (
  <>
{news.map((News,index)=>{
    return(
<div className="card" style={{maxWidth:'345px'}}>
  <img src={News.urlToImage} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{News.title} </h5>
    <p className="card-text">{News.description}</p>
    <a href={News.url} className="btn btn-primary">Read more</a>
  </div>
</div>

    )
})}
</>
  )
}

export default NewsItem