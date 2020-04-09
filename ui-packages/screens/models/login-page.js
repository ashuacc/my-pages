model = {
  handleEmailChange(email) {
    this.props.handleEmailChange(email);
  },

  handlePasswordChange(password) {
    this.props.handlePasswordChange(password);
  },

  resetErrors(err, exc) {
    this.props.resetErrors();
  },

  langStr(key) {
    return this.props.metaKeys[key] || key;
  },

  setForgotPasswordModalVisible() {
    this.props.gotoSentOtp();
    this.props.cleanLoginError();
  },

  onLoginPressed() {
    // const { email, password, previousUser, countryCode, metaKeys } = this.props;
    this.props.handleLogin();
  },

  newUserPressed() {
    this.props.goto("UserRegistrationScreen");
    this.props.justDispatchAction("SET_NEW_USER");
  }
};

//# sourceURL=login-page-model.js
