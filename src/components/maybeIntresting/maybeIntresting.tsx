import React from 'react'
import foodData from '../../pages/menuPage/Menu/DB/foodData'
// import {useParams} from 'react-router-dom'
import './maybeIntresting.scss'
// import {useDispatch, useSelector} from 'react-redux'
// import DishIngredients from './DishIngridients'
// import ListItem from '../Assortment/ListItem'
import ListItem from '../../pages/menuPage/Menu/Assortment/ListItem'
// import {updateIngridientsAC} from "../../../../bll/cartReducer";
// import {AppStoreType} from "../../../../bll/store";
// // import spinerImg from "../../../../bll/spiner.gif"


function CompletedDish(props: any) {

  
  return (
    <div className={'main-dish'}>
 
       <div className={'may-be-intresting'}>
        <h2>Вас так же могут заинтересовать</h2>
        <ListItem isIntresting={true} data={foodData[0]} />
      </div> 
    </div>
  )
}

export default CompletedDish
