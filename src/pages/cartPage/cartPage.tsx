import React from 'react'
import OceanBarHeader from '../../components/homePageComponents/Header/Header'
import HowItWorks from '../../components/homePageComponents/HowItWorks/HowItWorks'
import BookATable from '../../components/homePageComponents/BookATable/BookATable'
import Slider from '../../components/homePageComponents/Slider/Slider'
// eslint-disable-next-line max-len
import ContactsCard from '../../components/homePageComponents/ContactsCard/ContactsCard'
import Footer from '../../components/homePageComponents/Footer/Footer'
import {useSelector} from 'react-redux'
import {AppStoreType} from "../../bll/store";


type IngridientValueType = Boolean[]

const Cart = () => {

  const orderedDish=useSelector<AppStoreType>(state=>state.cart)
  
  console.log(orderedDish) 

  // @ts-ignore
   const orderedId=orderedDish[0].id
  // @ts-ignore 
  const ingridientKey = Object.keys(orderedDish[1])
  // @ts-ignore 
  const ingridientValue: IngridientValueType = Object.values(orderedDish[1])

 //@ts-ignore
  const orderedIngridients=ingridientKey.map((el,i) => {
    if (ingridientValue[i]){
    return (
      <div>{el}</div>
      ) }
  })

  return (
    <h1>
      <br/>
       Временная корзина:
       <br/>
       <br/>
       <div>Ваш заказ Id = {orderedId}</div>
       <br/>
       <div>заказаны ингридиенты:</div>
       {orderedIngridients}
    </h1>
  )


}

export default Cart
