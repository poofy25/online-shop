


import "../styles/catalogPagesNavigator.css"
function CatalogPagesNavigator(props) {

    const backwardsHandler = ()=>{
        if (props.catalogPage > 1) props.setCatalogPage(props.catalogPage - 1)
    }
    const forwardsHandler = ()=>{
        if(props.catalogPage < props.searchData.length) props.setCatalogPage(props.catalogPage + 1)
    }




    return (
         <div className="catalogPagesNavigatorContainer">
            <button onClick={backwardsHandler}>{'<'}</button>
            <div>{props.catalogPage}</div>
            <button onClick={forwardsHandler}>{'>'}</button>
         </div>
    )
 
}

export default CatalogPagesNavigator