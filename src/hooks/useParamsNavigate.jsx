import { useNavigate , useLocation , createSearchParams } from "react-router-dom"

import getObjFromUrl from "../functions/getObjFromUrl"

 const useParamsNavigate = ()=>{
     const navigateTo = useNavigate()
       const useNavParams = (filter , merge)=>{
   
     navigateTo({pathname:'/catalog/' , search:`${createSearchParams({...filter})}`})

}


   return useNavParams

}
export default useParamsNavigate;
