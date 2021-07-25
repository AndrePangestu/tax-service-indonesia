import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TaxSchemePages from '../pages/TaxSchemePages'

export default function RouterConfig() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={TaxSchemePages}/>
      </Switch>
    </div>
  )
}
