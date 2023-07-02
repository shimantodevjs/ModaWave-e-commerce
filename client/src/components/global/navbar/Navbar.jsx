import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Badge ,  IconButton } from '@mui/material'
import{
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined
}  from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './Navbar.scss'


const Navbar = () => {
  // const dispatch =useDispatch()

  return (
    <div className='navbar'>
       <div className="container">
          <h2>
          <Link to='/' className='logo'>MODAWAVE</Link>
          </h2>
          <div className="navMenu">
            <PersonOutline />
            <ShoppingBagOutlined />
            <MenuOutlined />
            <SearchOutlined />
          </div>
       </div>
    </div>
  )
}

export default Navbar
