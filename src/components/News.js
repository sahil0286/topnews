import React, { useState, useEffect } from 'react';
import Nwesitem from './Nwesitem';

export default function News() {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2c879e2305cb4e4db847d40633b2a3c4')
      .then(response => response.json())
      .then(data => setData(data.articles))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
    <div className='row'>

        {data.map(item => (
            // <li key={item.id}>{item.name}</li>
            <div className='col-md-4'>

                <Nwesitem title={item.title} desc={item.description} url={item.url} imgurl={item.urlToImage}/>
            </div>
            ))}
    </div>
    </>
  )
}