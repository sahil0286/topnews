import React, { useState, useEffect } from 'react';
import Nwesitem from './Nwesitem';
import axios from 'axios';

export default function News() {
    const [data, setData] = useState([]);

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
    

  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2c879e2305cb4e4db847d40633b2a3c4')
  //     .then(response => response.json())
  //     .then(data => setData(data.articles))
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <>
    <div className='row'>

        {data.map(item => (
            // <li key={item.id}>{item.name}</li>
            <div className='col-md-4'>
                <Nwesitem key={item.key} title={item.title.slice(0, 80)+" ..."} desc={item.description} url={item.url} imgurl={item.urlToImage}/>
            </div>
            ))}
    </div>
    </>
  )
}