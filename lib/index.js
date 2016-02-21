import autobind from 'autobind-decorator'
import moment from 'moment'
import React from 'react'
import { render } from 'react-dom'
import styleable from 'react-styleable'

import Form from './form'
import { orgPresidents } from './common/config'
import Preview from './preview'

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
    this.handleOrgPresidentChanged(orgPresidents[value])
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
  handlePrintForm () {
    const preview = document.getElementById('preview')
    const iFrame = document.getElementById('previewFrame').contentWindow
    iFrame.document.open()
    iFrame.document.write(`<html><head><link href="bundle.css" rel="stylesheet"></link></head><body>${preview.innerHTML}</body></html>`)
    iFrame.document.close()
    iFrame.focus()
    iFrame.print()
  }
  render () {
    return (
      <div className={this.props.css.container}>
        <div className={this.props.css.form}>
          <Form date={this.state.date}
                name={this.state.name}
                onDateChanged={this.handleDateChanged}
                onNameChanged={this.handleNameChanged}
                onOrganizationChanged={this.handleOrganizationChanged}
                onOrgPresidentChanged={this.handleOrgPresidentChanged}
                onOtherOrgChanged={this.handleOtherOrgChanged}
                onPurposeChanged={this.handlePurposeChanged}
                onPrintForm={this.handlePrintForm}
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
        <div className={this.props.css.spacer}></div>
        <div className={this.props.css.preview} id='preview'>
          <Preview date={this.state.date}
                   name={this.state.name}
                   organization={this.state.organization}
                   orgPresident={this.state.orgPresident}
                   otherOrg={this.state.otherOrg}
                   purpose={this.state.purpose}
                   subtotal={this.state.subtotal}
                   tax={this.state.tax}
                   total={this.state.total} />
        </div>
      </div>
    )
  }
}

render(<Index />, document.getElementById('app'))
