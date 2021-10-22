import React from 'react'
import foodData from '../DB/foodData'
import './ComletedDish.scss'
import {useDispatch, useSelector} from 'react-redux'
import DishIngredients from './DishIngridients'
import {updateIngridientsAC} from '../../../../bll/cartReducer'

import {Form, Button, Modal, CloseButton} from 'react-bootstrap'

function CompletedDish(props: any) {
  const dispatch = useDispatch()

  const orderDish = () => {
    dispatch(
      updateIngridientsAC([
        {id: props.currentDish.id},
        props.currentDish?.ingredients
      ])
    )
  }

  const handleClose = () => {
    window.history.go(-1)
  }

  return (
    <div className={'main-dish'}>
      <div className={'title-dish'}>
        <h1>{props.currentDish.name}</h1>
      </div>
      <div className={'image-dish'}>
        {/* <i className='arrow bi bi-arrow-left-circle'></i> */}
        <img className={'image'} src={props.currentDish.image} alt='food' />
        {/* <i className='arrow bi bi-arrow-right-circle'></i> */}
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
                props.dishisChanged()
              }}
            >
              Изменить
            </span>
          </div>
          <DishIngredients
            ingredients={props.currentDish?.ingredients}
            isShifting={false}
          />

          <br />
          <span>
            <h5>Вес: {props.currentDish?.weight}</h5>
          </span>
          <span>
            <h5>Калории: {props.currentDish?.calories}</h5>
          </span>
          <div className='line'></div>
          <br />
          <span>
            <h5>Стоимость: {props.currentDish?.prise}BYN</h5>
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
      </div>
      {/* <div className={'may-be-intresting'}>
        <h2>Вас так же могут заинтересовать</h2>
        <ListItem isIntresting={true} data={foodData[0]} />
      </div> */}
    </div>
  )
}

export default CompletedDish
