import autobind from 'autobind-decorator'
import DatePicker from 'react-datepicker'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import styleable from 'react-styleable'

const { func, number, object, string } = React.PropTypes

import Organization from './components/organization'
import { unit } from '../common/config'

@styleable(require('./index.css'))
@autobind
export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      subtotal: '',
      tax: ''
    }
  }
  static propTypes = {
    css: object,
    date: object,
    name: string,
    onDateChanged: func,
    onNameChanged: func,
    onOrganizationChanged: func,
    onOrgPresidentChanged: func,
    onOtherOrgChanged: func,
    onPurposeChanged: func,
    onPrintForm: func,
    onSubTotalChanged: func,
    onTaxChanged: func,
    organization: string,
    orgPresident: string,
    otherOrg: string,
    purpose: string,
    subtotal: number,
    tax: number,
    total: number
  };
  componentWillReceiveProps (nextProps) {
    if (this.props.subtotal !== nextProps.subtotal)
      this.setState({ subtotal: nextProps.subtotal })
    if (this.props.tax !== nextProps.tax)
      this.setState({ tax: nextProps.tax })
  }
  handleNameChanged (e) {
    this.props.onNameChanged(e.target.value)
  }
  handlePurposeChanged (e) {
    this.props.onPurposeChanged(e.target.value)
  }
  handleOrgPresidentChanged (e) {
    this.props.onOrgPresidentChanged(e.target.value)
  }
  handleSubTotalChanged (e) {
    this.setState({ subtotal: e.target.value })
    const parsed = parseFloat(e.target.value)
    if (!isNaN(parsed))
      this.props.onSubTotalChanged(parsed)
  }
  handleOnTaxChanged (e) {
    this.setState({ tax: e.target.value })
    const parsed = parseFloat(e.target.value)
    if (!isNaN(parsed))
      this.props.onTaxChanged(parsed)
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.onPrintForm()
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 className={this.props.css.title}>Check Request Form</h1>
        <h3 className={this.props.css.subtitle}>{unit}</h3>
        <div>
          <label className={this.props.css.horzLabel}>
            Name/Payee
            <input autoFocus
                   className={this.props.css.name}
                   onChange={this.handleNameChanged}
                   placeholder='Name to write check out to'
                   type='text'
                   value={this.props.name} />
          </label>
          <label className={this.props.css.horzLabel}>
            Date
            <DatePicker className={this.props.css.date}
                        dateFormat='M-D-YYYY'
                        onChange={this.props.onDateChanged}
                        selected={this.props.date} />
          </label>
        </div>
        <label className={this.props.css.label}>
          Purchased/Purpose
          <input className={this.props.css.purpose}
                 onChange={this.handlePurposeChanged}
                 placeholder='What was purchased and for what purpose?'
                 type='text'
                 value={this.props.purpose} />
        </label>
        <Organization onOtherValueChanged={this.props.onOtherOrgChanged}
                      onValueChanged={this.props.onOrganizationChanged}
                      otherValue={this.props.otherOrg}
                      value={this.props.organization} />
        <label className={this.props.css.label}>
          Organization President
          <input className={this.props.css.orgPres}
                 onChange={this.handleOrgPresidentChanged}
                 type='text'
                 value={this.props.orgPresident} />
        </label>
        <label className={this.props.css.label}>
          Sub Total
          <input className={this.props.css.input}
                 min='0'
                 onChange={this.handleSubTotalChanged}
                 placeholder='Total before sales tax'
                 step='0.10'
                 type='text'
                 value={this.state.subtotal} />
        </label>
        <label className={this.props.css.label}>
          Tax
          <input className={this.props.css.input}
                 min='0'
                 onChange={this.handleOnTaxChanged}
                 placeholder='Sales tax'
                 step='0.10'
                 type='text'
                 value={this.state.tax} />
        </label>
        <label className={this.props.css.label}>
          Total
          <div className={this.props.css.total}>{this.props.total.toFixed(2)}</div>
        </label>
        <input className={this.props.css.button} type='submit' value='Print form' />
      </form>
    )
  }
}
