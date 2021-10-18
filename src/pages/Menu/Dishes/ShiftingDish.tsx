import { useState } from 'react'
import foodData from "../DB/foodData"
import DishIngridients from "./DishIngridients"
import { Button, Col, Row, Card } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { updateIngridientsAC } from '../../../bll/ingridientsReducer'
import { AppStoreType } from '../../../bll/store'


function ShiftingDish(props: any) {

  const loading = useSelector<AppStoreType>(state => state.ingridients)
  const dispatch = useDispatch()

  // ----------------------------------------------------------------
  const token = useParams<{ token: string }>()
  //@ts-ignore
  const dish = foodData[0].find(el => el.id == token.token)
  // ---------------------------------------------------------------------
  const [updIngredients, setRenderIng] = useState<Object>(dish.ingredients);

  const setIngridient = (newIngredients: any) => {
    setRenderIng(newIngredients)
  }

  const finishSifting = () => {
    dispatch(updateIngridientsAC(updIngredients))
    props.dishisChanged()
  }


  return (
    <div>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Row>
            <Card
              border="warning"
              key="`${dish.id}`"
              className="mb-3 mx-2 my-5"
              style={{ width: '48rem' }}
            >
              <Row>
                <Col xs lg="7">
                  <img style={{ width: "100%" }} src={dish?.image} />
                </Col>
                <Col xs lg="5">
                  <Card.Title><h2>{dish?.name}</h2></Card.Title>
                  <Row>
                    <Col xs lg="5"><h3>Состав</h3></Col>
                    <Col xs lg="7"></Col>
                  </Row>
                  <Row>
                    <Col xs={7}>
                      <DishIngridients
                        setIngridient={setIngridient}
                        ingredients={updIngredients}
                      />
                    </Col>
                    <Col xs={5}>
                      <br />
                      <Button onClick={finishSifting}
                        variant="outline-secondary" size="sm">
                        готово
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}><h5>Вес: {dish?.weight}</h5></Col>
                    <Col sm={7}></Col>
                  </Row>
                  <Row>
                    <Col sm={7}><h5>Стоимость: {dish?.prise}</h5></Col>
                    <Col sm={5}></Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Row>
        </Col>
      </Row>
     </div>
  )
}

export default ShiftingDish;
