import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

type IngridientValueType = Boolean[]

function DishIngredients(props: any) {
  const [ingredients, setIngredients] = useState<Object>(props.ingredients)

  const toggleIngredient = (el: any) => {
    const copyIngredients = { ...ingredients }
    // @ts-ignore
    copyIngredients[el] = !copyIngredients[el]
    setIngredients(copyIngredients)
    props.setIngridient(copyIngredients)
  }

  const ingredientKey = Object.keys(ingredients)
  const ingredientValue: IngridientValueType = Object.values(ingredients)

  const ingridientsItem = ingredientKey.map((ingredient, i) => {
    return (
      <>
        {props.isShifting ? (
          <Row>
            <Col xs={3}>
              <Form.Check
                type='checkbox'
                checked={!!ingredientValue[i]}
                onChange={() => {
                  toggleIngredient(ingredient)
                }}
              />
            </Col>
            <Col xs={9}>{ingredient}</Col>
          </Row>
        ) : (
          <ul>
            {ingredientValue[i] ? <li>{ingredient}</li> : null}
          </ul>
        )}
      </>
    )
  })

  return <>{ingridientsItem}</>
}

export default DishIngredients
