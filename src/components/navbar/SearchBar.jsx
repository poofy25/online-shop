

import "./searchBar.css"
import searchIcon from '/src/assets/Icons/searchIcon.png'
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect , useState } from "react"
function SearchBar() {
const navigateTo = useNavigate()
const location = useLocation();
let searchTerm = ''
const searchValue = ()=>{
    searchTerm = document.querySelector('.navBarSearchInput').value 
    if(searchTerm !== 'qwe'){   
 navigateTo(`/catalog/${searchTerm}`)
    }
}

useEffect(() => {

    if(location.pathname.indexOf('/catalog') === -1){
        document.querySelector('.navBarSearchInput').value = ''
        searchTerm = ''
    }

  }, [location]);

    return (
        <div className="searchBarContainer">
            <div>
                <input className="navBarSearchInput" type="text" placeholder="Search for products..." onFocus={(e)=>{e.target.value = ''}} defaultValue={''}/>
                <button onClick={searchValue} type="submit"><img src={searchIcon}/></button>
             </div>
        </div>
    )
}

export default SearchBar