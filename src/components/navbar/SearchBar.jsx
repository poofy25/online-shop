

import "./searchBar.css"
import searchIcon from '/src/assets/Icons/searchIcon.png'
import { useLocation, useNavigate , createSearchParams } from 'react-router-dom';
import { useEffect , useState } from "react"
import useParamsNavigate from "../../hooks/useParamsNavigate";
function SearchBar() {

    const location = useLocation()
    const useParamsNav = useParamsNavigate()
    let searchTerm = ''

const searchValue = ()=>{
    searchTerm = document.querySelector('.navBarSearchInput').value 
    if(searchTerm !== ''){   
        useParamsNav({name:searchTerm} , true)
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
                <input className="navBarSearchInput" type="text" placeholder="Search for products..." onKeyPress={(e)=>{if(e.key === 'Enter')searchValue()}} defaultValue={''}/>
                <button onClick={searchValue} type="submit"><img src={searchIcon}/></button>
             </div>
        </div>
    )
}

export default SearchBar