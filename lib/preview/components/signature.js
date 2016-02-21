import React from 'react'
import styleable from 'react-styleable'

import css from './signature.css'

const { object, string } = React.PropTypes

function Signature (props) {
  return (
    <div className={props.css.container}>
      <div className={props.css.underline}>
        <div className={props.css.value}>{props.value}</div>
      </div>
      <div className={props.css.label}>{props.label}</div>
    </div>
  )
}
Signature.propTypes = {
  css: object,
  label: string,
  value: string
}
export default styleable(css)(Signature)
