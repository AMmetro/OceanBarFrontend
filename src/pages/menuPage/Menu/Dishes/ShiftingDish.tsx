import {useState} from 'react'
import {useDispatch} from 'react-redux'
import DishIngridients from './DishIngridients'
import {Button, Card, Col, Row} from 'react-bootstrap'
import {updateIngridientsAC} from "../../../../bll/cartReducer";

function ShiftingDish(props: any) {
  
 
  const [ingredients, setIngredients] = useState<Object>(props.currentDish?.ingredients);

  const updateIngridient = (newIngredients: any) => {
          setIngredients(newIngredients)
   }

 
  const finishSifting = () => {
      // dispatch(updateIngridientsAC(
      // [{id:props.currentDish.id},
      //   ingredients]
      // ))
      props.dishisChanged()
      props.updateIngredients(ingredients)
  }

  return (
    <Row className='justify-content-md-center'>
      <Col md='auto'>
        <Row>
          <Card
            border='warning'
            key='`${dish.id}`'
            className='mb-3 mx-2 my-5'
            style={{width: '48rem'}}
          >
            <Row>
              <Col xs lg='7'>
                <img style={{width: '100%'}} src={props.currentDish?.image} />
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
                      isShifting={true}
                      setIngridient={updateIngridient}
                      ingredients={props.currentDish?.ingredients}
                    />
                  </Col>
                  <Col xs={5}>
                    <br />
                    <Button
                      onClick={finishSifting}
                      variant='outline-secondary'
                      size='sm'
                    >
                      готово
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Row><br/></Row>
                  <Col sm={5}>
                    <h5>Вес: {props.currentDish?.weight}</h5>
                  </Col>
                  <Col sm={7}></Col>
                </Row>
                <Row>
                  <Col sm={7}>
                    <h5>Стоимость: {props.currentDish?.prise}</h5>
                  </Col>
                  <Col sm={5}></Col>
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
