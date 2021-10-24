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
  
  console.log(orderedDish);
  
  return (
    <h1>
      <br/>
       Корзина:
     </h1>
  )


}

export default Cart
