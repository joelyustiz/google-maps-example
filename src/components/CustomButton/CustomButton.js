import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const CustomButton = ({ children, disabled, value, type }) => {
  return <Button disabled={disabled} type={type} value={value} />
}

CustomButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node
}
