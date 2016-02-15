import React from 'react'
import { render } from 'react-dom'
import styleable from 'react-styleable'

import Form from './form'

@styleable(require('./index.css'))
class Index extends React.Component {
  static propTypes = {
    css: React.PropTypes.object
  };
  render () {
    return (
      <div className={this.props.css.container}>
        <h1 className={this.props.css.title}>Check Request Form</h1>
        <h3 className={this.props.css.subtitle}>Dry Creek 2nd Ward</h3>
        <Form />
      </div>
    )
  }
}

render(<Index />, document.getElementById('app'))
