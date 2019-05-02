import React, { Component } from 'react'

class Action extends Component {
  constructor (props) {
    super(props)
    // this.state = { action: 'WITHDRAW' }
  }
  render () {
    let { action } = this.props

    if (action == 'WITHDRAW') {
      return (
        <div>
          <form action="sign-up_submit" method="get" accept-charset="utf-8">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
              <div class="mt3">
                <label class="db fw4 lh-copy f6" for="email-address">Withdraw Amount</label>
                <input class="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address" id="email-address" />
              </div>
              <div class="mt3">
                <label class="db fw4 lh-copy f6" for="password">Confirm</label>
                <input class="b pa2 input-reset ba bg-transparent" type="password" name="password" id="password" />
              </div>
            </fieldset>
            <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up" /></div>
          </form>
        </div>
      )
    } else if (action == 'DEPOSIT') {
      return (
        <div>
          <form action="sign-up_submit" method="get" accept-charset="utf-8">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
              <div class="mt3">
                <label class="db fw4 lh-copy f6" for="email-address">Deposit Amount</label>
                <input class="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address" id="email-address" />
              </div>
            </fieldset>
            <div class="mt3">
              <a class="f6 link dim ba ph3 pv2 mb2 dib black" href="#0">Confirm</a>

            </div>
          </form>
        </div>
      )
    }
  }
}

export default Action
