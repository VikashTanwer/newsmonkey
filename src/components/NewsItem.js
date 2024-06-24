import React, { useEffect, useState } from "react";

function NewsItem() {
    
    const [articles, setArticles] = useState([])
  
    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f430dbaec65a4a88843c04aa3c5426ff`;
        let data = await fetch(url);
        let parasData = await data.json();
        setArticles(parasData.articles);
        console.log(articles)
      };
      
      useEffect(() => {
        updateNews();
      }, []);
  return (
    <>
      <div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary " >
            Learn more
          </a>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
