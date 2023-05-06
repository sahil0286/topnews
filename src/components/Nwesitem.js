import React from 'react'

export default function Nwesitem(props) {
  return (
    <>
    <div className="card" style={{width: "20rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  )
}
