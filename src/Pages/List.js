import React from 'react'
import Nav from '../Components/Nav'

import RecipeItem from '../Components/RecipeItem'
import { useState } from 'react'
import { useParams} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

import Item from './Item';



export default function List() {

  
  const params = useParams();

  const {data} = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`)

  
  return (
    <div className='list'>
        

        <Nav></Nav>
        <div className='list-content'>
          <h1>{params.id}</h1>
          <p></p>
          <div className="item-grid">
              {data && data.meals.map(meal => {
                return <RecipeItem key={meal.idMeal} data={meal}></RecipeItem>
              })}
          </div>
        </div>
        
        
        
     
    </div>
  )
}

