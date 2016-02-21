import React from 'react'

import { display as orgs } from '../../common/orgs'

const { string } = React.PropTypes

export function getCheckBox (name, org) {
  return name === orgs[org] ? '☑' : '☐'
}

function OrgOption (props) {
  return (
    <div>{getCheckBox(props.name, props.organization)} {props.name}</div>
  )
}
OrgOption.propTypes = {
  name: string,
  organization: string
}
export default OrgOption
