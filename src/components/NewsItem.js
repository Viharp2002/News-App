import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

function NewsItem(props) {

const [result,setResult] = useState([]);
const [search,setSearch] = useState("");
const [spin,setSpin] = useState(false);

const handleSearch = (e)=>{
  setSearch(e.target.value);
};

const fetchData = async()=>{
  setSpin(true);
  const data = await fetch(url);
  const parseData = await data.json();
  setResult(parseData.articles);
  setSpin(false);
};

const url = `https://newsapi.org/v2/${props.heading}?q=${search===""?props.q:search}&apiKey=182aecf1353f4e1298b55b5769934253`;
  useEffect(()=>{
     fetchData();
  },[search,props.q]);
    
  return (
    <>
    <div className='container my-3'>

      <h2 style={{color:"white"}}><center>NewsVihar - {search===""?props.q:search}</center></h2>

      <form class="d-flex my-4">
        <input class="form-control me-2" type="search" name='searching' onChange={handleSearch} placeholder="Search News" aria-label="Search"/>
      </form>

       {spin && <Spinner/>}

      <div className='row'>
      {
        
       !spin && result.map((elem)=>{
          return <div key={elem.url} className="col-md-4 my-4 card" style={{width: "18rem"}}>
           <img src={!elem.urlToImage ? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" : elem.urlToImage} className="card-img-top" alt="/"/>
             <span className="badge bg-danger">Author: {elem.author?elem.author.slice(0,20):"Unknown"}</span>
           <div className="card-body">
             <h5 className="card-title">{elem.title ? elem.title.slice(0,40):""}....</h5>
             <p className="card-text">{elem.description ? elem.description.slice(0,80):"Read Only Full Article"}....</p>
             <a href={elem.url} className="btn btn-primary">Read FullNews</a>
           </div>
         </div>
             
        })
      }
</div>
</div>
    </>
  )
}

export default NewsItem
