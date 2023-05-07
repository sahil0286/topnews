import React, { useState, useEffect } from 'react';
import Nwesitem from './Nwesitem';
import axios from 'axios';

export default function News() {
    const [data, setData] = useState([]);
    const [page, setpage] = useState(1)

    useEffect(() => {
      axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=2c879e2305cb4e4db847d40633b2a3c4')
  .then(function (response) {
    // handle success
    setData(response.data.articles)
    console.log(response.data.articles);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
    }, [])
    
    const Increm=async ()=>{
      setpage(page+1)
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=2c879e2305cb4e4db847d40633b2a3c4&page=${page}`)
  .then(function (response) {
    // handle success
    setData(response.data.articles)
      console.log(page)})
    }
    const Decrem=async ()=>{
      setpage(page-1)
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=2c879e2305cb4e4db847d40633b2a3c4&page=${page}`)
  .then(function (response) {
    // handle success
    setData(response.data.articles)
      console.log(page)})
    }

  return (
    <>
    <div className='row'>

    <h2 className='text-center'>Top Headings</h2>
        {data.map(item => (
            // <li key={item.id}>{item.name}</li>
            <div className='col-md-4'>
                <Nwesitem key={item.key} title={item.title?item.title.slice(0, 40)+" ...":"After Drew Barrymore drops out as host, MTV Awards show won't be live event"} desc={item.description?item.description.slice(0, 100)+" ...":"The news also comes after the Writer's Guild of America announced​ that it planned to picket outside the show."} url={item.url?item.url:"https://www.cbsnews.com/news/mtv-awards-drew-barrymore-writers-strike/"} imgurl={item.urlToImage?item.urlToImage:"https://assets2.cbsnewsstatic.com/hub/i/r/2023/05/06/4b62e70b-765e-4751-aa34-2f5dfe8225b8/thumbnail/1200x630/59f41eeff6c2d9b6b6deab7cb72fe6ee/gettyimages-1401233339.jpg"}/>
            </div>
            ))}
        <div className='container d-flex justify-content-between'>
        <button type="button" disabled={page<=1} onClick={Decrem} class="btn btn-dark">&larr; Back</button>
        <button type="button" onClick={Increm} class="btn btn-dark">Next &rarr;</button>
        </div>
    </div>
    </>
  )
}