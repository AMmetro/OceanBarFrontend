import React, {useState} from 'react'
import {Col, Form, Row} from 'react-bootstrap'
import {IngredientType} from '../../../../redux/reducers/dishesReducer'

function DishIngredients(props: any) {
  const [ingredients, setIngredients] = useState<Array<IngredientType>>(
    props.ingredients
  )

  const toggleIngredient = (el: IngredientType, i: number) => {
    const elCopy = {...el}
    elCopy.isAdded = !el.isAdded
    const copyIngredients = [...ingredients]
    copyIngredients[i] = elCopy
    setIngredients(copyIngredients)
    props.setIngredient(copyIngredients)
  }

  const ingridientsItem = ingredients.map((ingredient, i) => {
    return (
      <>
        <Row key={`${i}`}>
          <Col xs={3}>
            <Form.Check
              type='checkbox'
              checked={!!ingredient.isAdded}
              onChange={() => {
                toggleIngredient(ingredient, i)
              }}
            />
          </Col>
          <Col xs={9}>{ingredient.name}</Col>
        </Row>
      </>
    )
  })

  return <>{ingridientsItem}</>
}

export default DishIngredients
