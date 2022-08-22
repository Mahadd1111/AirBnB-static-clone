import React from "react";
import ReactDOM from 'react-dom/client';
import "./styles.css"

/*Data */
import cardData from "./Data.js";
import travelData from "./travelData.js";

/* Picture imports */
import gridPic from "./images/grid.png";
import NavLogo from "./images/airbnb-logo.png";


function Nav(){
    return(
        <nav className="navigation">
            <img src={NavLogo} className="airbnb-logo"></img>
            <Transition/>
        </nav>
    );
}

function Hero(){
    return(
        <section className="hero-section">
            <img src={gridPic} className="grid-pic"></img>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one 
                of a kind hosts - all without leaving home
            </p>
        </section>
    )
}

function Card(props){
    return(
        <section className="slot col-lg-4">
            <div className="card">
                <div className="status">
                    <p>{props.status}</p>
                </div>
                <img src={props.image} className="card-img-top"></img>
                <div className="card-body">
                <p className="card-text"><i className="fa-solid fa-star"></i><span className="rating">  {props.rating} </span>({props.reviews})-{props.country}</p>
                    <p className="card-text">{props.info}</p>
                    <p className="card-text"><span className="pricing">From ${props.price}</span>/ person</p>
                </div>
            </div>
        </section>
    );
}

function CardPanel(){
    const cardElements=cardData.map(item=>{
        return(<Card key={item.key} {...item}></Card>);
    });
    return(
        <div className="row">
            {cardElements}
        </div>
    );
}

function Transition(){
    return(
        <div className="transition-section">
            <button className="btn btn-danger" onClick={changePage}>Travel Journey</button>
        </div>
    )
}

function Page(){
    return(
        <div>
            <Nav/>
            <Hero/>
            <CardPanel/>
        </div>
    );
}

/* Travel Project */


function TravelPage(){
    return(
        <div>
            <TravelNav/>
            <TravelLocation/>
        </div>
    );
}

function TravelLocation(){
    const travelElements=travelData.map(item=>{
        return(<TravelCard {...item}/>);
    });
    console.log(travelElements);
    return(
        <div className="travel-slot">
            {travelElements}
        </div>
    );
}

function TravelCard(props){
    return(
        <div className="travel-card">
            <img className="travel-img" src={props.image}></img>
            <div className="travel-content">
                <span><i className="fa-solid fa-location-dot"></i><b> {props.location}</b> <a href={props.googleMaps}>View on Google maps</a></span>
                <h1>{props.title}</h1>
                <h5>{props.startDate} - {props.endDate}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    );
}



function TravelNav(){
    return(
        <nav className="travel-nav">
            <button className="btn btn-light back" onClick={changePage}>Go Back</button>
            <span className="thing"><i className="fa-solid fa-lg fa-earth-asia"></i> my travel journal</span>
        </nav>
    );
}




/* Final Render from one of the above tasks */

const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Page/>);

function changePage(e){
    if(e.target.classList.contains("back")){
        root.render(<Page/>);
    }
    else{
        root.render(<TravelPage/>);
    }
    
}