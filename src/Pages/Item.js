import React, { useEffect } from 'react'

import Nav from '../Components/Nav'
import { useParams } from 'react-router-dom'
import { useFetch , useState} from '../hooks/useFetch'

export default function Item() {
  const params = useParams()



  const {data } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)


  return (
    <div className='single-item'>
        <Nav></Nav>
        
          {data && <div className='single-item-content'>
            <h1>{data.meals[0].strMeal}</h1> 
            <h3>( {data.meals[0].strArea} )</h3> 
              

              <img src={data.meals[0].strMealThumb} alt="" />
              
              <div className='instructions'>
                <h2>Instructions : </h2>
                <p> {data.meals[0].strInstructions}</p>
              </div>
              <div className='ingredients'>
                  <h2>Ingredients : </h2>
                  <ul>
                  <li>{data.meals[0].strMeasure1} {data.meals[0].strIngredient1}</li>
                  <li>{data.meals[0].strMeasure2} {data.meals[0].strIngredient2}</li>
                  <li>{data.meals[0].strMeasure3} {data.meals[0].strIngredient3}</li>
                  <li>{data.meals[0].strMeasure4} {data.meals[0].strIngredient4}</li>
                  <li>{data.meals[0].strMeasure5} {data.meals[0].strIngredient5}</li>
                  <li>{data.meals[0].strMeasure6} {data.meals[0].strIngredient6}</li>
                  <li>{data.meals[0].strMeasure7} {data.meals[0].strIngredient7}</li>
                  <li>{data.meals[0].strMeasure8} {data.meals[0].strIngredient8}</li>
                  <li>{data.meals[0].strMeasure9} {data.meals[0].strIngredient9}</li>
                  <li>{data.meals[0].strMeasure10} {data.meals[0].strIngredient10}</li>
                  <li>{data.meals[0].strMeasure11} {data.meals[0].strIngredient11}</li>
                  <li>{data.meals[0].strMeasure12} {data.meals[0].strIngredient12}</li>
                  <li>{data.meals[0].strMeasure13} {data.meals[0].strIngredient13}</li>
                  <li>{data.meals[0].strMeasure14} {data.meals[0].strIngredient14}</li>
                  <li>{data.meals[0].strMeasure15} {data.meals[0].strIngredient15}</li>
                  <li>{data.meals[0].strMeasure16} {data.meals[0].strIngredient16}</li>
                  <li>{data.meals[0].strMeasure17} {data.meals[0].strIngredient17}</li>
                  <li>{data.meals[0].strMeasure18} {data.meals[0].strIngredient18}</li>
                  <li>{data.meals[0].strMeasure19} {data.meals[0].strIngredient19}</li>
                  <li>{data.meals[0].strMeasure20} {data.meals[0].strIngredient20}</li>
                  
                  
                </ul>
              </div>
              
          </div>}
       
    </div>
  )
}
