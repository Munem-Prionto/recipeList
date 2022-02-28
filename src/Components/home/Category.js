import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'

import RecipeItem from '../RecipeItem'

import { useFetch } from '../../hooks/useFetch'



export default function Category(props) {

/*   console.log('category page' , props) */

 
      const {data} = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.data.strCategory}`)


 

 


  return (
    <div className='home__category'>
        <div className='heading'>
            <h2><Link to={`list/${props.data.strCategory}`}>{props.data.strCategory}</Link> </h2>
            
            <Link to={`list/${props.data.strCategory}`}>view all {'>'} </Link>
        </div>
        {/* <p>{props.data.strCategoryDescription.slice(0,50)}...</p> */}
        <div className='item-grid'>
         
          {data && data.meals.slice(0,5).map(meal => {
            return <RecipeItem key={meal.idMeal} data={meal}></RecipeItem>
          })}
        </div>
        
    </div>
  )
}
