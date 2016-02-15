import autobind from 'autobind-decorator'
import React from 'react'
import styleable from 'react-styleable'

const { func, object, string } = React.PropTypes

@styleable(require('./organization.css'))
@autobind
export default class Organization extends React.Component {
  state = {
    showOther: false
  }
  static propTypes = {
    css: object,
    onOtherValueChanged: func,
    onValueChanged: func,
    otherValue: string,
    value: string
  };
  handleAuxChange (e) {
    this.props.onValueChanged(e.target.value)
    this.setState({
      showOther: e.target.value === 'Other'
    })
  }
  handleOtherChange (e) {
    this.props.onOtherValueChanged(e.target.value)
  }
  render () {
    return (
      <div>
        <label className={this.props.css.label}>
          Organization
          <select className={this.props.css.input} name='organization' value={this.props.value} onChange={this.handleAuxChange}>
            <option value=''>Choose...</option>
            <option value='Activities Committee'>Activities Committee</option>
            <option value="Elder's Quorum">Elder's Quorum</option>
            <option value='Fast Offering'>Fast Offering</option>
            <option value='High Priests'>High Priests</option>
            <option value='Primary'>Primary</option>
            <option value='Relief Society'>Relief Society</option>
            <option value='Ward Mission'>Ward Mission</option>
            <option value='Young Men'>Young Men</option>
            <option value='Young Women'>Young Women</option>
            <option value='Other'>Other</option>
          </select>
        </label>
        <input className={this.props.css.other + ' ' + (this.state.showOther ? '' : this.props.css.hidden)} type='text' name='other' value={this.props.otherValue} onChange={this.handleOtherChange} />
      </div>
    )
  }
}
