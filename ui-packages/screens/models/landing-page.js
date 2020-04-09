model = {
  loginWithEmail() {
    const { goto } = this.props;
    goto("NewLoginComponent");
  },

  goToTnC() {
    const { gotoNewCommon } = this.props;

    gotoNewCommon({
      termsPrutopia: this.langStr("COMMON_KEY_TERMS_LABEL"),
      title: "",
      message: "Register",
    });
  },

  goToPrivacy() {
    const { gotoNewCommon } = this.props;

    gotoNewCommon({
      privacyPrutopia: this.langStr("COMMON_KEY_PRIVACY_LABEL"),
      title: "",
      message: "Register",
    });
  },

  langStr(key) {
    return this.props.metaKeys[key] || key;
  }
};

//# sourceURL=landing-page-model.js
