import React from 'react'
import styleable from 'react-styleable'

import css from './label-value.css'

const { bool, object, string } = React.PropTypes

function LabelValue (props) {
  return (
    <div className={props.css.container}>
      <span className={props.numeric ? props.css.numericLabel : props.css.label}>{props.label}</span>
      <span className={props.numeric ? props.css.numericUnderline : props.css.underline}>{props.value}</span>
    </div>
  )
}
LabelValue.propTypes = {
  css: object,
  label: string,
  numeric: bool,
  value: string
}
export default styleable(css)(LabelValue)
