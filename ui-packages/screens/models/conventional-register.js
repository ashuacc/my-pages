model = {
  signinPressed() {
    this.props.goto("Login");
    this.props.justDispatchAction("SET_EXISTING_USER");
  }
}

//# sourceURL=conventional-register-model.js
