

import "./searchBar.css"
import searchIcon from '/src/assets/Icons/searchIcon.png'
import { useState } from "react"
import searchFilter from "../../functions/filter"
import JsonData from "/data/clothing-data/clothing-data.json"

function SearchBar() {

let searchTerm = ''
const searchValue = ()=>{

    searchTerm = document.querySelector('.navBarSearchInput').value
    if(searchTerm !== ''){
   console.log(searchTerm)
   console.log(searchFilter({name:document.querySelector('.navBarSearchInput').value} , JsonData))
 }
}

    return (
        <div className="searchBarContainer">
            <form>
                <input className="navBarSearchInput" type="text" placeholder="Search for products..."/>
                <button onClick={searchValue}><img src={searchIcon}/></button>
             </form>
        </div>
    )
}

export default SearchBar