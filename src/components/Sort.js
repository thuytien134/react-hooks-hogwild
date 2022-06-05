import React from "react"
import { useState } from "react"

function Sort({setSortHog}) {

function handleChange(e){
    setSortHog(e.target.value)
}



    return (

        <>
            <select className="sort-Hog" onChange={handleChange}> 
                <option>Sort</option>
                <option value="name"> name</option>
                <option value="weight">weight</option>
            </select>
        </>
    )
}
export default Sort