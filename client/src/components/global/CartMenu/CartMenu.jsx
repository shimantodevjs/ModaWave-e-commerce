import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { Close , Add , Remove } from '@mui/icons-material'
import { removeFormCart,
         setIsCartOpen,
         increaseCount,
         decreaseCount } from '../../../state/cartSlice'
import { Link } from 'react-router-dom'     
import "./CartMenu.scss"    

const CartMenu = () => {
    const dispatch= useDispatch();
    
  return (
    <div>
      
    </div>
  )
}

export default CartMenu
