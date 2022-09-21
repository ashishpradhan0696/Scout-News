import React from 'react'
import "./carousel.css" 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import business from "../../assets/business.jpg"
import entertainment from "../../assets/entertainment.jpg"
import food from "../../assets/food.jpg"
import science from "../../assets/science.jpg"
import sport from "../../assets/sport.jpg"
import tech from "../../assets/tech.jpg"
import music from "../../assets/music.jpg"
import travel from "../../assets/travel.jpg"
import world from "../../assets/world.jpg"
import beauty from "../../assets/beauty.jpg"
import finance from "../../assets/finance.jpg"

export default function Carousel() {

  const navigate=useNavigate();

  // const check=()=>{
  //   console.log("inside");
  // }

useEffect(() => {
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
}, [])

 
  return (
    <>
    <div> 
  
    <section className="product"> 
        <h2 className="product-category">Top News</h2>
          <button className="pre-btn"><i className="bi bi-arrow-left-circle-fill"></i></button>
          <button className="nxt-btn"><i className="bi bi-arrow-right-circle-fill"></i></button>
      
        <div className="product-container">
            <div className="product-card" onClick={()=>navigate("/business")}>
                <div className="card text-bg-dark" style={{maxWidth:"18rem"}}>
                    <img src={business} className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                      <h1 className="card-text" >BUSINESS</h1>
                    </div>
                  </div>
            </div>
            <div className="product-card" onClick={()=>navigate("/entertainment")}>
                <div className="card text-bg-dark" style={{maxWidth:"18rem"}}>
                    <img src={entertainment} className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                      <h1 className="card-text">ENTERTAINMENT</h1>
                    </div>
                  </div>
            </div>
            <div className="product-card" onClick={()=>navigate("/food")}>
                <div className="card text-bg-dark" style={{maxWidth:"18rem"}}>
                    <img src={food} className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex align-items-center justify-content-center"> 
                      <h1 className="card-text">FOOD</h1>
                    </div>
                  </div>
            </div>
            <div className="product-card" onClick={()=>navigate("/science")}>
                <div className="card text-bg-dark" style={{maxWidth:"18rem"}}>
                    <img src={science} className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                      <h1 className="card-text">SCIENCE</h1>
                    </div>
                  </div>
            </div>
            <div className="product-card" onClick={()=>navigate("/sport")}> 
                  <div className="card text-bg-dark" style={{maxWidth:"18rem"}}>
                    <img src={sport} className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                      <h1 className="card-text">SPORTS</h1>
                    </div>
                  </div>
            </div>
            <div className="product-card" onClick={()=>navigate("/tech")}>
                <div className="card text-bg-dark" style={{maxWidth:"18rem"}}>
                    <img src={tech} className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex align-items-center justify-content-center"> 
                      <h1 className="card-text">TECHNOLOGY</h1>
                    </div>
                  </div>
            </div>
            <div className="product-card" onClick={()=>navigate("/travel")}>
                <div className="card text-bg-dark" style={{maxWidth:"18rem"}}>
                    <img src={travel} className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex align-items-center justify-content-center"> 
                      <h1 className="card-text">TRAVEL</h1>
                    </div>
                  </div>
            </div>
            <div className="product-card" onClick={()=>navigate("/music")}>
                <div className="card text-bg-dark" style={{maxWidth:"18rem"}}>
                    <img src={music} className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex align-items-center justify-content-center"> 
                      <h1 className="card-text">MUSIC</h1>
                    </div>
                  </div>
            </div>
            <div className="product-card" onClick={()=>navigate("/beauty")}>
                <div className="card text-bg-dark" style={{maxWidth:"18rem"}}>
                    <img src={beauty} className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex align-items-center justify-content-center"> 
                      <h1 className="card-text">BEAUTY</h1>
                    </div>
                  </div>
            </div>
            <div className="product-card" onClick={()=>navigate("/finance")}>
                <div className="card text-bg-dark" style={{maxWidth:"18rem"}}>
                    <img src={finance} className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex align-items-center justify-content-center"> 
                      <h1 className="card-text">FINANCE</h1>
                    </div>
                  </div>
            </div>
            <div className="product-card" onClick={()=>navigate("/world")}>
                <div className="card text-bg-dark" style={{maxWidth:"18rem"}}>
                    <img src={world} className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex align-items-center justify-content-center"> 
                      <h1 className="card-text">WORLD</h1>
                    </div>
                  </div>
            </div>
            
        </div>
        </section>
        </div>
    </>
  )
}
