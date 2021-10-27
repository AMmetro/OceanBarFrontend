import { useState } from "react"
import ShiftingDish from './ShiftingDish'
import CompletedDish from './CompletedDish'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../../redux/hooks'
import MaybeIntresting from '../../../../components/maybeIntresting/maybeIntresting'
import {IngredientType} from '../../../../redux/reducers/dishesReducer'
import {IngredientsType} from '../../../../redux/reducers/dishesReducer'
import {DishType} from '../../../../redux/reducers/dishesReducer'

// type ingrType = {name:string, isAdded:boolean}
// type updIngridientsType = Array<ingrType>



function Dish() {

  const token = useParams<{ token: string }>()
  const allDishes = useAppSelector<any>(state => state.dish)
  

const currentDish = allDishes.find((el) => el.id == token.token)


const [ingredients, setIngredients] = useState<IngredientsType>(currentDish.ingredients);

const updatedDish = { ...currentDish, ingredients }

const updateIngredients = (updIngridients: IngredientsType) => {
  setIngredients(updIngridients)
}

  const [dishСhangeStatus, setDishСhangeStatus] = useState<boolean>(false);

  const changeStatus = () => {
    setDishСhangeStatus(!dishСhangeStatus)
  }

    return (
    <div>

      {dishСhangeStatus
         ? 
        <ShiftingDish
        changeStatus={changeStatus}
          // updateIngredients={updateIngredients}
          currentDish ={updatedDish} 
         />
        :
        <CompletedDish
        changeStatus={changeStatus}
          currentDish={updatedDish}
          />
        }

      {!dishСhangeStatus
        ?
        <div>
            <MaybeIntresting/>         
        </div>
        : <div style={{marginTop:"100px"}}></div>
      }
      </div>
  )
}

export default Dish;




