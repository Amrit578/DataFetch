import axios from "axios";
import { useState, useEffect } from "react";
const Fetch = () =>{
    const[api,setApi] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res =>{
            console.log(res)
            setApi(res.data)
        }).catch(error =>{
            console.log(error)
        })
    },[])
    return(
        <>
            <ul>
                {
                    api.map(item => <li key={item.id}>{item.title}</li>)
                } 
            </ul>
    
        </>
    )
}

export default Fetch;