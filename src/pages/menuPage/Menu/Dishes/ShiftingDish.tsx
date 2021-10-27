import {useState} from 'react'
import DishIngridients from './DishIngridients'
import {Button, Card, Col, Row} from 'react-bootstrap'
import {IngredientType} from '../../../../redux/reducers/dishesReducer'
import {IngredientsType} from '../../../../redux/reducers/dishesReducer'
import {DishType} from '../../../../redux/reducers/dishesReducer'

type PropsType = {
  updateIngredients?: () => void
  changeStatus?: () => void
  currentDish: DishType
}

function ShiftingDish(props: PropsType) {
  const [ingredients, setIngredients] = useState<IngredientsType>(
    props.currentDish?.ingredients
  )

  let disableIngredientAccept = false
  const minAmountIngredient = 1

  const addedIngredients = ingredients.filter((el) => {
    return el.isAdded == true
  })

  if (addedIngredients.length > minAmountIngredient) {
    disableIngredientAccept = false
  } else {
    disableIngredientAccept = true
  }

  const updateIngridient = (updIngredients: IngredientsType) => {
    setIngredients(updIngredients)
  }

  const finishSifting = () => {
    props.changeStatus()
  }

  return (
    <Row className='justify-content-md-center'>
      <Col md='auto'>
        <Row>
          <Card
            border='warning'
            key={`${props.currentDish.id}`}
            className='mb-3 mx-2 my-5'
            style={{width: '48rem'}}
          >
            <Row>
              <Row>
                <br />
              </Row>
              <Col xs lg='7'>
                <img
                  style={{width: '100%'}}
                  // src={props.currentDish?.image}
                  src={
                    'https://img.poehalisnami.by/static/countries/c84/small/84_637145235972434334.jpg'
                  }
                />
              </Col>
              <Col xs lg='5'>
                <Card.Title>
                  <h2>{props.currentDish?.name}</h2>
                </Card.Title>
                <Row>
                  <Col xs lg='5'>
                    <h3>Состав</h3>
                  </Col>
                  <Col xs lg='7'></Col>
                </Row>
                <Row>
                  <Col xs={7}>
                    <DishIngridients
                      setIngredient={updateIngridient}
                      ingredients={ingredients}
                    />
                  </Col>
                  <Col xs={5}>
                    <br />
                    <Button
                      onClick={finishSifting}
                      variant='outline-secondary'
                      size='sm'
                      disabled={disableIngredientAccept}
                    >
                      готово
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Row>
                    <br />
                  </Row>
                  <Col sm={6}>
                    <h5>Вес: {props.currentDish?.weight}</h5>
                  </Col>
                  <Col sm={6}></Col>
                </Row>
                <Row>
                  <Col sm={8}>
                    <h5>Стоимость: {props.currentDish?.price}BYN</h5>
                  </Col>
                  <Col sm={4}></Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Row>
      </Col>
    </Row>
  )
}

export default ShiftingDish
