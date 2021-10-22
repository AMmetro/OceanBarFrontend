import { useState } from "react"
import ShiftingDish from './ShiftingDish'
import CompletedDish from './CompletedDish'
import { useParams } from 'react-router-dom'
import foodData from '../DB/foodData'
// import { useSelector } from 'react-redux'
// import { AppStoreType } from "../../../../bll/store";
import MaybeIntresting from '../../../../components/maybeIntresting/maybeIntresting'


function Dish() {

  const token = useParams<{ token: string }>()

  // @ts-ignore
  const currentDish = foodData[0].find((el) => el.id == token.token)
  const [ingredients, setIngredients] = useState<Object>(currentDish.ingredients);
  const [dishСhangeStatus, setDishСhangeStatus] = useState<boolean>(false);

  // @ts-ignore
  const updatedDish = { ...currentDish, ingredients }

  const updateIngredients = (updIngridients: any) => {
    setIngredients(updIngridients)
  }

  const changeStatus = () => {
    setDishСhangeStatus(!dishСhangeStatus)
  }

  return (
    <div>

      {dishСhangeStatus
        ? <ShiftingDish
          dishisChanged={changeStatus}
          currentDish={updatedDish}
          updateIngredients={updateIngredients}
        />
        :
        <CompletedDish
          dishisChanged={changeStatus}
          currentDish={updatedDish} />}

      <MaybeIntresting />

    </div>
  )
}

export default Dish;




