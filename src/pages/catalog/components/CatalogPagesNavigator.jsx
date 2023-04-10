


import "../styles/catalogPagesNavigator.css"
function CatalogPagesNavigator(props) {

    const catalogData = props.catalogData
    const setCatalogData = props.setCatalogData


    const backwardsHandler = ()=>{
        if (catalogData.catalogPage > 1){
             setCatalogData({...catalogData , catalogPage:catalogData.catalogPage - 1})
             document.documentElement.scrollTop = 0
             
            }
    }
    const forwardsHandler = ()=>{
        if(catalogData.catalogPage < catalogData.searchData.length){

            setCatalogData({...catalogData , catalogPage:catalogData.catalogPage + 1})
        document.documentElement.scrollTop = 0
        }
    }
    const numberedBtnsHandler = (e)=>{
        if(e.target.textContent != catalogData.catalogPage){
            
        setCatalogData({...catalogData , catalogPage:Number(e.target.textContent)})
        document.documentElement.scrollTop = 0
        }
    }

    for (let i = 0 ; i < document.querySelectorAll('.numberedBtns').length; i++){
        if(document.querySelectorAll('.numberedBtns')[i].textContent == catalogData.catalogPage){
            document.querySelectorAll('.numberedBtns')[i].classList.add('deactivateNumberedBtn')
        }
        else
        document.querySelectorAll('.numberedBtns')[i].classList.remove('deactivateNumberedBtn')
    
    }

    return (
         <div className="catalogPagesNavigatorContainer">

            <button onClick={backwardsHandler} className={`movingBtns ${catalogData.catalogPage === 1 ? 'deactivateMovingBtn' : ''}`}>{'<'}</button>
            <button onClick={numberedBtnsHandler} className='numberedBtns'>{1}</button>
            {catalogData.searchData.length < 4 ? 
               catalogData.searchData.map((array , i)=>{
                 if(i === 0 || catalogData.searchData.length === 1) return
                 return <button onClick={numberedBtnsHandler} className='numberedBtns' key={i}>{i+1}</button>
                })
            :
            catalogData.searchData.map((array , i)=>{
                if(catalogData.searchData.length === 1 || i === catalogData.searchData.length-1) return
                return <button onClick={numberedBtnsHandler} className='numberedBtns' key={i}>{i+2}</button>
               })}
            <button onClick={forwardsHandler} className={`movingBtns ${catalogData.catalogPage === catalogData.searchData.length ? 'deactivateMovingBtn' : ''}`}>{'>'}</button>

         </div>
    )
 
}

export default CatalogPagesNavigator