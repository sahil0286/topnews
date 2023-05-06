import React from "react";

export default function Nwesitem(props) {
  return (
    <>
      <div className="card my-3" style={{ width: "20rem" }}>
        <img src={props.imgurl} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <a href={props.url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
