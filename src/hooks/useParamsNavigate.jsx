import { useNavigate , useLocation , createSearchParams } from "react-router-dom"
import { useState , useEffect } from "react";
//navigateTo({pathname:location.pathname, search:`?${createSearchParams({...params , category:categorySelected})}`})
 const useParamsNavigate = ()=>{
     const navigateTo = useNavigate()
     const location = useLocation()
     const oldParams = Object.fromEntries(new URLSearchParams(location.search));
   const useNavParams = (filter , merge)=>{
    if(merge) navigateTo({pathname:'/catalog/' , search:`${createSearchParams({...oldParams , ...filter})}`})
    if(!merge) navigateTo({pathname:'/catalog/' , search:`${createSearchParams({...filter})}`})
}


   return useNavParams

}
export default useParamsNavigate;
