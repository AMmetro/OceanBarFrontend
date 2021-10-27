import './ComletedDish.scss'
import {useDispatch} from 'react-redux'
import {updateIngridientsAC} from '../../../../bll/cartReducer'
import {Row, Col, Modal, CloseButton} from 'react-bootstrap'
import {DishType} from '../../../../redux/reducers/dishesReducer' 

type PropsType = {
  changeStatus?: () => void
  currentDish: DishType
}

function CompletedDish(props: PropsType) {
  const dispatch = useDispatch()

            //@ts-ignore
            const newIngred = props.currentDish.ingredients.map( el => { 
              if (el.isAdded) return (
                 <li><p>{el.name}</p></li>
                    )
            })

  const orderDish = () => {
    dispatch(
      updateIngridientsAC(
                                [
                                  {user:"email"},
                                  {dishId:`${props.currentDish.id}`},
                                  {ingredients:[`${props.currentDish?.ingredients}`]} 
                               ]
                         ))  }


   const handleClose = () => {
    window.history.go(-1)
  }

  return (
    <div className={'main-dish'}>
      <div className={'title-dish'}>
        <h1>{props.currentDish.name}</h1>
      </div>
      <Row>
        <Col md={8} lg={8}>
          <img
            className={'image'}
            style={{width: '100%', height:'auto'}}
            // src={props.currentDish.image}
            src={"https://img.poehalisnami.by/static/countries/c84/small/84_637145235972434334.jpg"} 
            alt='food'
          />
        </Col>
        <Col md={4} lg={4}>
          <div className={'ingredients'}>
            <span>
              <Modal.Header className='border-0'>
                <CloseButton onClick={() => handleClose()} />
              </Modal.Header>
            </span>
            <div className={'changing'}>
              <span className={'composition'}>Состав</span>
              <span
                className={'change-ingr'}
                onClick={() => {
                  props.changeStatus()
                }}
              >
                Изменить
              </span>
            </div>

             <ul>
               {newIngred}
            </ul>

            <br />
            <span>
              <h5>Вес: {props.currentDish?.weight}</h5>
            </span>
            <span>
              <h5>Калории: {props.currentDish?.calories}</h5>
            </span>
            <div className='line-dish'></div>
            <br />
            <span>
              <h5>Стоимость: {props.currentDish?.price}BYN</h5>
            </span>
            <button
              className={'order-btn-dish'}
              onClick={() => {
                orderDish()
              }}
            >
              Заказать
            </button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CompletedDish
