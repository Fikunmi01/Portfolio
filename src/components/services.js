import React from "react";
import { data } from "./serviceData";
import { Val } from "./serviceDialog";
import './services.css';

export default function Services() {
    const [ dialog, setDialog]=React.useState(false) 

    const handleDialog = (id) => {
        setDialog(id !== dialog ? id : null);
      };
  
    const box= [
        {
            jobRole: 'UI/UX Designer',
            pOne: 'I monitor the implementation from developer',
            pTwo: 'Web page development.',
            pThree: 'I create ux element interactions',
            pFour: 'I position your company brand.',
        },
      
    ]
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
                                        <i onClick={()=> {handleDialog(data.id)}} className="uil uil-times"></i>
                                    :
                                        <a
                                            onClick={()=> {handleDialog(data.id)}}>
                                            View More
                                            <img id="arrow" src={e.arrowIcon} alt="arrow icon"/>
                                        </a>

                                    }
                                </span>
                            </div>
                        </>
                    ))}
                    

                    {dialog === data.id && (
                        <>
                            <div
                                className="serviceDialog">
                                    {Val.map((se,i)=> (
                                    <>
                                        <span>
                                            <h3>{se.title}</h3>    
                                        </span>

                                    </>
                                ))}
                            </div>
                        </>
                    )}
                </div>


            </div>
        </>
    )
}