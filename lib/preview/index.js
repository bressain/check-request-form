import React from 'react'
import styleable from 'react-styleable'

import { bishop, unit } from '../common/config'
import css from './index.css'
import * as orgs from '../common/orgs'
import LabelValue from './components/label-value'
import { getCheckBox, default as OrgOption } from './components/org-option'
import Signature from './components/signature'

const { object, number, string } = React.PropTypes

function renderOtherOption ({ organization, otherOrg, css }) {
  return (
    <div className={css.otherOrgContainer}>
      <span>{getCheckBox(orgs.display.Other, organization)} Other:</span>
      <span className={css.otherOrg}>{organization === orgs.constants.Other ? otherOrg : ''}</span>
    </div>
  )
}

function Preview (props) {
  return (
    <div className={props.css.container}>
      <div className={props.css.header}>
        <div className={props.css.headerLeft}>
          <div className={props.css.titleContainer}>
            <h1 className={props.css.title}>CHECK REQUEST FORM</h1>
            <h3 className={props.css.subtitle}>{unit}</h3>
          </div>
          <LabelValue label={'Name/Payee:'} value={props.name} />
        </div>
        <div className={props.css.headerRight}>
          <LabelValue label={'Date:'} value={props.date.format('M-D-YYYY')} />
          <LabelValue label={'Sub Total:'} numeric value={props.subtotal.toFixed(2)} />
          <LabelValue label={'Tax:'} numeric value={props.tax.toFixed(2)} />
          <LabelValue label={'Total:'} numeric value={props.total.toFixed(2)} />
        </div>
      </div>
      <LabelValue label={'What was purchased and for what purpose?'} value={props.purpose} />
      <div className={props.css.orgContainer}>
        <div className={props.css.org}>
          <OrgOption name={'Activities Committee'} organization={props.organization} />
          <OrgOption name={'High Priests'} organization={props.organization} />
          <OrgOption name={'Ward Mission'} organization={props.organization} />
          {renderOtherOption(props)}
        </div>
        <div className={props.css.org}>
          <OrgOption name={'Elder\'s Quorum'} organization={props.organization} />
          <OrgOption name={'Primary'} organization={props.organization} />
          <OrgOption name={'Young Men'} organization={props.organization} />
        </div>
        <div className={props.css.org}>
          <OrgOption name={'Fast Offering'} organization={props.organization} />
          <OrgOption name={'Relief Society'} organization={props.organization} />
          <OrgOption name={'Young Women'} organization={props.organization} />
        </div>
      </div>
      <p className={props.css.info}>Please keep church expense receipts separate from personal expenses. <strong>A receipt or other proof of purchase must be attached to this form and proper signatures obtained before checks can be printed.</strong></p>
      <div className={props.css.signatures}>
        <div className={props.css.signature}>
          <Signature label={'Organization President (please print)'} value={props.orgPresident} />
          <Signature label={'Signature'} value={''} />
        </div>
        <div className={props.css.signature}>
          <Signature label={'Bishop (please print)'} value={bishop} />
          <Signature label={'Signature'} value={''} />
        </div>
      </div>
    </div>
  )
}
Preview.propTypes = {
  css: object,
  date: object,
  name: string,
  organization: string,
  orgPresident: string,
  otherOrg: string,
  purpose: string,
  subtotal: number,
  tax: number,
  total: number
}
export default styleable(css)(Preview)
