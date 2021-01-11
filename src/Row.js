import React from 'react'
import './Row.css'
const Row=({name,first,second,third})=> {
    let frs=""
    if(first=="yes"){
        frs="🟢"
    }else{
        frs="🔴"
    }
    
    
    let sec=""
    if(second=="yes"){
        sec="🟢"
    }else{
        sec="🔴"
    }
    let thr=""
    if(third=="yes"){
        thr="🟢"
    }else{
        thr="🔴"
    }

    
    return (
        <>
            <tr>
              <th scope="row">{name}</th>
              <td >{frs}</td>
              <td >{sec}</td>
              <td >{thr}</td>
            </tr>
        </>
    )
}

export default Row
