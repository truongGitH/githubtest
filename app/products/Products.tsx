'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import clsx from "clsx"
import style from './styleProducts.module.css'
import Link from "next/link"

var productsApi = 'http://localhost:3000/posts'


function Products() {
    
    

    const [items, setItems] = useState<any>()
    const [pages, setPages] = useState<number>(1)
 
    useEffect(() => { 
        axios.get(productsApi + `?_page=${pages}&_per_page=12`)
        .then((response)=>{
            console.log(response)
            setItems(response.data.data)})
    }, [pages])

    return (
        <div >
            <ul className={clsx(style.wrapper)}>
                {items?.map((item:any) =>(
                    <li 
                        key={item.id}
                        className={clsx(style.prd)}
                    >{item.product}
                    </li>
                ))}
            </ul>
            <div className={clsx(style.pages)}>
                <a onClick={()=>{setPages(1)}}>1</a>
                <a onClick={()=>{setPages(2)}}>2</a>
                <a onClick={()=>{setPages(3)}}>3</a>
            </div>
        </div>
    )
}
export default Products