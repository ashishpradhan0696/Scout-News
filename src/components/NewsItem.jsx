import React from 'react'

import nopreview from "../assets/nopreview.jpeg"


export default function NewsItem({ title, description, imageUrl, newsUrl, publishedAt, source ,darkMode}) {
  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let publishedDate = new Date(publishedAt);;
  let publishedDay = publishedDate.getDate();
  let noOfDays = currentDay-publishedDay ;
  
  //console.log("dark mode in newsitem is ", darkMode);
  return (
    <>
   
    <div className="container">
                <div className="card" style={{ backgroundColor : darkMode===true? "#344641":"biege" , padding:"10px" , marginBottom:"10px"}}>
                    <img  src={imageUrl===null || imageUrl=="" ? nopreview : imageUrl} className="card-img-top" alt="No preview available"/>
                    <div className="card-body" style={{ color : darkMode===true? "white":"black"}}>
                        <span className="badge rounded-pill bg-secondary align-top">{source === null ? "unknown" : source}</span>
                        <h6 className="card-title">{title}</h6>
                        <p className="card-text" style={{fontSize:"14px", fontWeight:"300"}}>{description}...</p>
                        <div className="card-footer text-muted my-3" style={{fontSize:"14px", fontWeight:"300" , color : darkMode===true? "white":"black"}}>
                            Last updated : {noOfDays===0? "Today" : `${noOfDays} day(s) ago`}
                        </div>
                        <a href={newsUrl} target="_blank" className={`btn ${darkMode===true ? "btn-outline-light":"btn-outline-dark"} btn-sm`}>Read more</a>
                    </div>

                </div>
      </div>

    </>
  )
}
