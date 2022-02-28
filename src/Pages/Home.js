import React from 'react'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'

import Nav from '../Components/Nav'
import Category from '../Components/home/Category'

import {useFetch} from '../hooks/useFetch'



export default function Home() {
    

  const {data} = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php')


  return (
    <div className='home'>
        <Nav></Nav>
        <div className="content">
            <header>
                <span>Explore different recipes all in one place.</span> 
               {/*  <span>One stop shop for all recipes.</span> */}
            </header>
      
            <main>
                <div className='dishes'>
                    {data && data.categories.map(category => {
                    return ( <Category key={category.idCategory} data={category}></Category>)
                  })}
                </div>
               
              
            </main>
            
        </div>
       
    </div>
  )
}
