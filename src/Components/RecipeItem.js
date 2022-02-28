import React from 'react'
import { Link , Route, useRouteMatch} from 'react-router-dom'
import Item from '../Pages/Item';




export default function RecipeItem({data}) {



  return (
    <div className='recipeItem'>
        <Link to={`/item/${data.idMeal}`}>
          <img src={data.strMealThumb} alt=""/>
          <p>{data.strMeal}</p>
        </Link>

    </div>
  )
}
