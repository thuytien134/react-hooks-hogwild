import React from "react"



function Filter({onChangeHog}){


    return (
        <>
        <select onChange={onChangeHog}>
        <option value="All">All</option>
        <option value="true">greased</option>
        <option value="false">Not greased</option>
        </select>
        </>
    )
}

export default Filter
