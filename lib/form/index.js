import autobind from 'autobind-decorator'
import moment from 'moment'
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styleable from 'react-styleable'

const { object } = React.PropTypes

import Organization from './components/organization'

@styleable(require('./index.css'))
@autobind
export default class Form extends React.Component {
  state = {
    organization: '',
    date: moment(),
    other: ''
  }
  static propTypes = {
    css: object
  };
  handleDateChange (date) {
    this.setState({ date: date })
  }
  handleOrganizationChanged (value) {
    this.setState({ organization: value })
  }
  handleOtherChanged (value) {
    this.setState({ other: value })
  }
  handleSubmit (e) {
    e.preventDefault()
    console.log("this.refs.name.value", this.refs.name.value)
    console.log("this.state.date", this.state.date.format('M-D-YYYY'))
    console.log("this.refs.purpose.value", this.refs.purpose.value)
    console.log("this.state.organization", this.state.organization)
    console.log("this.refs.orgPres.value", this.refs.orgPres.value)
    console.log("this.state.other", this.state.other)
    console.log("this.refs.subTotal.value", this.refs.subTotal.value)
    console.log("this.refs.tax.value", this.refs.tax.value)
    console.log("this.refs.total.value", this.refs.total.value)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label className={this.props.css.horzLabel}>
            Name/Payee
            <input autoFocus className={this.props.css.name} ref='name' type='text' name='name' placeholder='Name to write check out to' />
          </label>
          <label className={this.props.css.horzLabel}>
            Date
            <DatePicker className={this.props.css.date} dateFormat='M-D-YYYY' selected={this.state.date} onChange={this.handleDateChange} />
          </label>
        </div>
        <label className={this.props.css.label}>
          Purchased/Purpose
          <input className={this.props.css.purpose} ref='purpose' type='text' name='purpose' placeholder='What was purchased and for what purpose?' />
        </label>
        <Organization onOtherValueChanged={this.handleOtherChanged}
                      onValueChanged={this.handleOrganizationChanged}
                      otherValue={this.state.other}
                      value={this.state.organization} />
        <label className={this.props.css.label}>
          Organization President
          <input className={this.props.css.orgPres} ref='orgPres' type='text' name='orgPres' />
        </label>
        <label className={this.props.css.label}>
          Sub Total
          <input className={this.props.css.input} ref='subTotal' type='number' name='subTotal' placeholder='Total before sales tax' />
        </label>
        <label className={this.props.css.label}>
          Tax
          <input className={this.props.css.input} ref='tax' type='number' name='tax' placeholder='Sales tax' />
        </label>
        <label className={this.props.css.label}>
          Total
          <input className={this.props.css.input} ref='total' type='number' name='total' />
        </label>
        <input className={this.props.css.button} type='submit' value='Show printable form' />
      </form>
    )
  }
}
