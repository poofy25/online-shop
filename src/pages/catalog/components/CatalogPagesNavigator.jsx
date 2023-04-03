


import "../styles/catalogPagesNavigator.css"
function CatalogPagesNavigator(props) {

    const backwardsHandler = ()=>{
        if (props.catalogPage > 1){
             props.setCatalogPage(props.catalogPage - 1);
             document.documentElement.scrollTop = 0
             
            }
    }
    const forwardsHandler = ()=>{
        if(props.catalogPage < props.searchData.length){
        props.setCatalogPage(props.catalogPage + 1)
        document.documentElement.scrollTop = 0
        }
    }
    const numberedBtnsHandler = (e)=>{
        if(e.target.textContent != props.catalogPage){
        props.setCatalogPage(Number(e.target.textContent))
        document.documentElement.scrollTop = 0
        }
    }

    for (let i = 0 ; i < document.querySelectorAll('.numberedBtns').length; i++){
        if(document.querySelectorAll('.numberedBtns')[i].textContent == props.catalogPage){
            document.querySelectorAll('.numberedBtns')[i].classList.add('deactivateNumberedBtn')
        }
        else
        document.querySelectorAll('.numberedBtns')[i].classList.remove('deactivateNumberedBtn')
    
    }

    return (
         <div className="catalogPagesNavigatorContainer">

            <button onClick={backwardsHandler} className={`movingBtns ${props.catalogPage === 1 ? 'deactivateMovingBtn' : ''}`}>{'<'}</button>
            <button onClick={numberedBtnsHandler} className='numberedBtns'>{1}</button>
            {props.searchData.length < 4 ? 
           props.searchData.map((array , i)=>{
            if(i === 2 || props.searchData.length === 1) return
            return <button onClick={numberedBtnsHandler} className='numberedBtns' key={i}>{i+2}</button>
           })
            :
            props.searchData.map((array , i)=>{
                if(props.searchData.length === 1 || i === props.searchData.length-1) return
                return <button onClick={numberedBtnsHandler} className='numberedBtns' key={i}>{i+2}</button>
               })}
            <button onClick={forwardsHandler} className={`movingBtns ${props.catalogPage === props.searchData.length ? 'deactivateMovingBtn' : ''}`}>{'>'}</button>

         </div>
    )
 
}

export default CatalogPagesNavigator