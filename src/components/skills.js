import React from "react";
import ProgressBar from "./Progress";
import { data } from "./skillData";
import './skills.css'

export default function Skills() {
    const [dropdown, setDropdown] =React.useState(false)

    return (
        <>
            <div
                className="skills">
                <div
                    className="header">
                    <h2>Skills</h2>
                    <p>My technical level</p>
                </div>

               <div
                    className="skill-category">

                    {data.map((e,i)=> {
                        return (
                            <>
                                <div
                                    key={e.id}
                                    className="skill-div">
                                    <img src={e.imgSrc} alt="skills icon"/>


                                    <span>
                                        <div
                                            className="skill-header">
                                            <span>
                                                <h2>{e.jobTitle}</h2>
                                                <p>{e.experience}</p>
                                            </span>

                                            <div
                                                className="drop-conditional">
                                                {dropdown ?
                                                    <i className="uil uil-angle-up" style={{cursor: 'pointer'}} onClick={()=> setDropdown(false)}></i>
                                                :
                                                <i className="uil uil-angle-down" style={{cursor:'pointer'}} onClick={() => setDropdown(true)}></i>
                                                }
                                            </div>

                                        </div>

                                        {dropdown  && (
                                            <>
                                                <p>
                                                    {e.skillOne}
                                                    <ProgressBar bgcolor="#0B4174" progress='95' height={6}/>
                                                </p>

                                                <p>
                                                    {e.skillTwo}
                                                    <ProgressBar bgcolor="#0B4174" progress='95' height={6}/>
                                                </p>
                                                
                                                <p>
                                                    {e.skillThree}
                                                    <ProgressBar bgcolor="#0B4174" progress='95' height={6}/>
                                                </p>

                                                <p>
                                                    {e.skillFour}    
                                                    <ProgressBar bgcolor="#0B4174" progress='95' height={6}/>
                                                </p>

                                            </>
                                        ) }

                                        
                                    </span>

                                </div>        

                            </>
                        )
                    })}
               </div>
                
            </div>
        </>
    )
}