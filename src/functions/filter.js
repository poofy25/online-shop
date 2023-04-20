 // SEARCH FILTER FOR FILTRING PRODUCTS
 
 
 const searchFilter= (filters , data)=>{

      const filteredArray = data.products.filter((product)=>{ //this runs for every product in DB
          
             for(const key in filters){  //this runs for every key that you want to filter for
                let isGood = false;
                 if (key === "id"){
                    if((filters[key]).includes(product[key]) ){
                         isGood = true
                        }
                 }
                 if (key === "category"){
                    filters[key].forEach((category)=>{
                     if(product[key] === category || category === '*'){
                        isGood = true
                       }
                       
                    })
                 
                 }
                 if(key === "sale"){
                    if(product['discount'] !== null || filters[key][0] === true){
                        isGood = true
                    }
                 }
                 if(key === "range"){
                    if(filters[key][0] === "<="){
                       if(product['price'] <= Number(filters[key][1])){
                        isGood = true
                       }
                         
                    }
                    else 
                    if(filters[key][0] === ">="){
                        if(product['price'] >= Number(filters[key][1]) ){
                            isGood = true
                           }
                    }
                 }
                 if (key === "size"){
                    filters[key].forEach((size)=>{
                        if(product['sizes'].includes(size)){
                           isGood = true
                        }
                       
                    })
                 }
                 if (key === "color"){
                    filters[key].forEach((size)=>{
                        if(product['colors'].includes(size)){
                           isGood = true
                        }
                       
                    })
                 }
                 if (key === "name"){
                  
                    if(filters[key]){
                     if((product[key].toLowerCase()).indexOf((filters[key][0].toLowerCase())) !=-1? true: false){
                        isGood = true
                     }
                  }
                  else{
                     isGood = true
                  }
                 }


                if(!isGood) return false

             }
             return true
        })
    return filteredArray
}
export default searchFilter