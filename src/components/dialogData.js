import React from "react";

export const Data= [
    {
        title: 'djjwjj',
        pOne: '',
        pTwo: '',
        pThree: '',
        pFour: '',
    },
    {
        title: '',
        pOne: '',
        pTwo: '',
        pThree: '',
        pFour: '',
    },
    {
        title: '',
        pOne: '',
        pTwo: '',
        pThree: '',
        pFour: '',
    }
]



export default function Dialog() {
    return (
        <>
            {Data.map((ee,i)=> (
                <>
                    <p>{Data.title}</p>
                </>
            ))}
        </>
    )
}