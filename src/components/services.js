import React from "react";
import { data } from "./serviceData";
import './services.css';

export default function Services() {
    const [ dialog, setDialog]=React.useState(false) 
    return(
        <>
            <div className="services">
                <div
                    className="header">
                    <h2>Services</h2>
                    <p>What I Offer</p>

                    {data.map((e,i)=> (
                        <>
                            <div
                                className="card">
                                    
                                <span>
                                    <img src={e.iconImg} alt="icon img"/>
                                    <h3>{e.jobRole}</h3>
                                    

                                    {dialog ?
                                        <i onClick={()=> {setDialog(false)}} className="uil uil-arrow"></i>
                                    :
                                        <a
                                            onClick={()=> {setDialog(true)}}>
                                            View More
                                            <img id="arrow" src={e.arrowIcon} alt="arrow icon"/>
                                        </a>

                                    }
                                </span>
                            </div>
                        </>
                    ))}
                    
                </div>

            </div>
        </>
    )
}