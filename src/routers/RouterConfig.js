import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TaxReliefPages from '../pages/TaxReliefPages'
import TaxSchemePages from '../pages/TaxSchemePages'

export default function RouterConfig() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={TaxSchemePages}/>
        <Route exact path="tax-relief" component={TaxReliefPages}/>
      </Switch>
    </div>
  )
}
