import autobind from 'autobind-decorator'
import React from 'react'
import styleable from 'react-styleable'

import * as orgs from '../../common/orgs'

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
  handleOrganizationChanged (e) {
    this.props.onValueChanged(e.target.value)
    this.setState({
      showOther: e.target.value === orgs.constants.Other
    })
  }
  handleOtherChange (e) {
    this.props.onOtherValueChanged(e.target.value)
  }
  renderOption (key, i) {
    return (<option value={key} key={i + 1}>{orgs.display[key]}</option>)
  }
  renderOptions () {
    return Object.keys(orgs.constants).map(this.renderOption)
  }
  render () {
    return (
      <div>
        <label className={this.props.css.label}>
          Organization
          <select className={this.props.css.input} name='organization' value={this.props.value} onChange={this.handleOrganizationChanged}>
            <option value='' key={0}>Choose...</option>
            {this.renderOptions()}
          </select>
        </label>
        <input className={this.props.css.other + ' ' + (this.state.showOther ? '' : this.props.css.hidden)} type='text' name='other' value={this.props.otherValue} onChange={this.handleOtherChange} />
      </div>
    )
  }
}
