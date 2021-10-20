import React from 'react'
import foodData from '../DB/foodData'
// import {useParams} from 'react-router-dom'
import './ComletedDish.scss'
import {useDispatch, useSelector} from 'react-redux'
import DishIngredients from './DishIngridients'
import ListItem from '../Assortment/ListItem'
import {updateIngridientsAC} from "../../../../bll/cartReducer";
import {AppStoreType} from "../../../../bll/store";
// import spinerImg from "../../../../bll/spiner.gif"


function CompletedDish(props: any) {

  const dispatch=useDispatch()

    const orderDish = () => {
           dispatch(updateIngridientsAC(
      [{id:props.currentDish.id},
        props.currentDish?.ingredients]
      ))
    };

  return (
    <div className={'main-dish'}>
      <div className={'title-dish'}>
        <h1>{props.currentDish.name}</h1>
      </div>
      <div className={'image-dish'}>
        {/* <i className='arrow bi bi-arrow-left-circle'></i> */}
        <img className={'image'} src={props.currentDish.image} alt='food' />
        {/* <i className='arrow bi bi-arrow-right-circle'></i> */}
        <div className={'ingredients'}>
          <div className={'changing'}>
            <span className={'composition'}>Состав</span>
            <span className={'change-ingr'}
             onClick={()=>{props.dishisChanged()}}  
              >Изменить</span>
          </div>
          <DishIngredients ingredients={props.currentDish?.ingredients} isShifting={false} />
          <button className={'order-btn'} onClick={()=>{orderDish()}}>Заказать</button>
        </div>
      </div>
      <div className={'may-be-intresting'}>
        <h2>Вас так же могут заинтересовать</h2>
        <ListItem isIntresting={true} data={foodData[0]} />
      </div>
    </div>
  )
}

export default CompletedDish
