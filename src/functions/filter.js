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
                    if(product[key] === filters[key]){
                         isGood = true
                        }
                 }
                 if(key === "discount"){
                    if(product[key] !== filters[key]){
                        isGood = true
                    }
                 }
                 if(key === "price"){
                    if(filters[key][1] === "<="){
  
                       if(product[key] <= filters[key][0]){
                        isGood = true
                       }
                         
                    }
                    else 
                    if(filters[key][1] === ">="){
                        if(product[key] >= filters[key][0]){
                            isGood = true
                           }
                    }
                 }
                 if (key === "sizes"){
                    filters[key].every((size)=>{
                        if(product[key].includes(size)){
                           isGood = true
                        }
                       
                    })
                 }
                 if (key === "colors"){
                    filters[key].every((size)=>{
                        if(product[key].includes(size)){
                           isGood = true
                        }
                       
                    })
                 }


                if(!isGood) return false

             }
             return true
        })
    return filteredArray
}
export default searchFilter