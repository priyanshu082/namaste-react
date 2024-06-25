import React from "react"
import {useParams} from "react-router-dom"
 
const RestroMenu=()=>{
    const {_id}=useParams();
   return (
    <div>
        {_id}
        RestroMenu
    </div>
    )
}

export default RestroMenu