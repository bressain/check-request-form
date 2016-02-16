import autobind from 'autobind-decorator'
import moment from 'moment'
import React from 'react'
import { render } from 'react-dom'
import styleable from 'react-styleable'

import Form from './form'

@styleable(require('./index.css'))
@autobind
class Index extends React.Component {
  state = {
    date: moment(),
    name: '',
    organization: '',
    orgPresident: '',
    otherOrg: '',
    purpose: '',
    subtotal: 0,
    tax: 0,
    total: 0
  }
  static propTypes = {
    css: React.PropTypes.object
  };
  handleDateChanged (date) {
    this.setState({ date: date })
  }
  handleNameChanged (value) {
    this.setState({ name: value })
  }
  handleOrganizationChanged (value) {
    this.setState({ organization: value })
  }
  handleOrgPresidentChanged (value) {
    this.setState({ orgPresident: value })
  }
  handleOtherOrgChanged (value) {
    this.setState({ otherOrg: value })
  }
  handlePurposeChanged (value) {
    this.setState({ purpose: value })
  }
  handleSubTotalChanged (value) {
    this.setState({
      subtotal: value,
      total: value + this.state.tax
    })
  }
  handleTaxChanged (value) {
    this.setState({
      tax: value,
      total: this.state.subtotal + value
    })
  }
  render () {
    return (
      <div className={this.props.css.container}>
        <h1 className={this.props.css.title}>Check Request Form</h1>
        <h3 className={this.props.css.subtitle}>Dry Creek 2nd Ward</h3>
        <Form date={this.state.date}
              name={this.state.name}
              onDateChanged={this.handleDateChanged}
              onNameChanged={this.handleNameChanged}
              onOrganizationChanged={this.handleOrganizationChanged}
              onOrgPresidentChanged={this.handleOrgPresidentChanged}
              onOtherOrgChanged={this.handleOtherOrgChanged}
              onPurposeChanged={this.handlePurposeChanged}
              onSubTotalChanged={this.handleSubTotalChanged}
              onTaxChanged={this.handleTaxChanged}
              organization={this.state.organization}
              orgPresident={this.state.orgPresident}
              otherOrg={this.state.otherOrg}
              purpose={this.state.purpose}
              subtotal={this.state.subtotal}
              tax={this.state.tax}
              total={this.state.total} />
      </div>
    )
  }
}

render(<Index />, document.getElementById('app'))
