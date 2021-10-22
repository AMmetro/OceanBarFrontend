/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */

import {useSelector} from 'react-redux'
import {AppStoreType} from "../../../../bll/store";

const DessertList2 = () => {

  const foodData=useSelector<AppStoreType>(state=>state.dishes)
  //@ts-ignore
  const desertDishes = foodData.filter(dish => dish)

  console.log(desertDishes);
  


  return (
    <h1>
      
    </h1>
  )


}

export default DessertList2




