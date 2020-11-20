import React from 'react'
import { LinkUrl, Nav } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline, MdLocationOn } from 'react-icons/md'

const SIZE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <LinkUrl to='/'><MdHome size={SIZE} /></LinkUrl>
      <LinkUrl to='/navigation'><MdLocationOn size={SIZE} /></LinkUrl>      
    </Nav>
  )
}
