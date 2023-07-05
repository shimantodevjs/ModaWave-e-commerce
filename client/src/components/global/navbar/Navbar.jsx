import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Badge , IconButton} from '@mui/material'
import{
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined
}  from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { setIsCartOpen } from '../../../state/cartSlice'


const Navbar = () => {
  const dispatch =useDispatch()
  const cart = useSelector((state)=>state.cart.cart)

  return (
    <div className='navbar'>
       <div className="container">
          <h2>
          <Link to='/' className='logo'>MODAWAVE</Link>
          </h2>
          <div className="navMenu">
            <IconButton className='iconBtn'>
            <PersonOutline />
            </IconButton>
           
            <Badge
              badgeContent={cart.length}
              color="secondary"
              invisible={cart.length === 0}
              sx={{
                "& .MuiBadge-badge":{
                  right:5,
                  top:5,
                  padding:'0 4px',
                  height:'14px',
                  minWidth:'13px'
                }
              }}
            >
             <IconButton
               onClick={dispatch(setIsCartOpen({}))}
               className='iconBtn'
             >
            <ShoppingBagOutlined />
             </IconButton>
            </Badge>
            <IconButton className='iconBtn'>
            <MenuOutlined />
            </IconButton>
            <IconButton className='iconBtn'>
            <SearchOutlined />
            </IconButton>
          </div>
       </div>
    </div>
  )
}

export default Navbar
