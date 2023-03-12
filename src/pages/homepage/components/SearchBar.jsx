

import "../styles/searchBar.css"
import searchIcon from '/src/assets/Icons/searchIcon.png'

function SearchBar() {


    return (
        <div className="searchBarContainer">
            <form>
                <input type="text" placeholder="Search for products..."/>
                <button><img src={searchIcon}/></button>
             </form>
        </div>
    )
}

export default SearchBar