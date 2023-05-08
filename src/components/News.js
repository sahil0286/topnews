import React, { useState, useEffect } from 'react';
import Nwesitem from './Nwesitem';
import axios from 'axios';
import Spinner from './Spinner';

export default function News(props) {
    const [data, setData] = useState([]);
    const [page, setpage] = useState(1);
    const [itemcount, setitemcount] = useState()
    const [lodding, setLodding] = useState(true)

    useEffect(() => {
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=2c879e2305cb4e4db847d40633b2a3c4&page=1&pageSize=
      ${props.pageSize}`)
  .then(function (response) {
    setLodding(true)
    setData(response.data.articles)
    setitemcount(response.data.totalResults)
    setLodding(false)
    console.log(response.data.articles);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
    })
    
    const Increm=()=>{
      if(page + 1 > Math.ceil(itemcount/props.pageSize))
      {
      }
      else
      {
        setLodding(true)
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=2c879e2305cb4e4db847d40633b2a3c4&page=${page+1}&pageSize=${props.pageSize}`)
        .then(function (response) {
          setpage(1+ page)
          setData(response.data.articles)})
          setLodding(false)
      }
    }
    const Decrem=()=>{
      setLodding(true)
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=2c879e2305cb4e4db847d40633b2a3c4&page=${page-1}&pageSize=${props.pageSize}`)
      .then(function (response) {
        setpage(-1+page)
        setData(response.data.articles)})
        setLodding(false)
    }

  return (
    <>
    <div className='container my-5'>
    <div className='row my-3'>
    <div className='row'>
        <h2 className='text-center'>Top Stories</h2>
        {lodding && <Spinner/>}
            {data.map(item => (
                // <li key={item.id}>{item.name}</li>
                <div className='col-md-4'>
                    <Nwesitem key={item.id}title={item.title?item.title.slice(0, 40)+" ...":"After Drew Barrymore drops out as host, MTV Awards show won't be live event"} desc={item.description?item.description.slice(0, 100)+" ...":"The news also comes after the Writer's Guild of America announced​ that it planned to picket outside the show."} url={item.url?item.url:"https://www.cbsnews.com/news/mtv-awards-drew-barrymore-writers-strike/"} imgurl={item.urlToImage?item.urlToImage:"https://assets2.cbsnewsstatic.com/hub/i/r/2023/05/06/4b62e70b-765e-4751-aa34-2f5dfe8225b8/thumbnail/1200x630/59f41eeff6c2d9b6b6deab7cb72fe6ee/gettyimages-1401233339.jpg"}/>
                </div>
                ))}
            <div className='container d-flex justify-content-between'>
                <button type="button" disabled={page<=1} onClick={Decrem} className="btn btn-dark">&larr; Back</button>
                <button type="button" disabled={page + 1 > Math.ceil(itemcount/props.pageSize)} onClick={Increm} className="btn btn-dark">Next &rarr;</button>
            </div>
          </div>
          </div>
    </div>
    </>
  )
}