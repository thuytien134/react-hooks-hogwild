import React from "react"
import { useState } from "react"
import Card from "./Card"
import Filter from "./Filter"
import Sort from "./Sort"

function Cardlist({ hogs }) {
    const [greased, setGreased] = useState("All")
    const [sortHog, setSortHog] = useState("Sort")
    
    function handlechange(e) {
        setGreased(e.target.value)
    }
    const Cardtodisplay = hogs.filter(hog => {
        if (greased === "All") {
            return true
        }
        if (greased === "true") {
            return hog.greased === true
        } else {
            return hog.greased === false
        }
    }).sort((a, b) => {
        if (sortHog === "name") {
            debugger
            return a.name.localeCompare(b.name)
        } else if (sortHog === "weight") {
            return a.weight - b.weight
        }
    }
    )





    return (
        <ul>
            <Filter onChangeHog={handlechange} />
            <Sort sortHog={sortHog} setSortHog={setSortHog} />
            {Cardtodisplay.map((hog, index) => {
                return <Card key={index} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} medal={hog['highest medal achieved']} />
            })}
        </ul>
    )
}

export default Cardlist