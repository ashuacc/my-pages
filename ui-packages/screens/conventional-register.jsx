<import model="conventional-register" label="conventional-register" style="conventional-register" content="conventional-register" />
<TouchableWithoutFeedback accessible={false}>
  <ScrollView style={styles.container}>
    <View style={styles.mainContainer}>
      <NewTextInput
        placeholder={langStr("NEW_REGISTER_EMAIL_LABEL")}
        maxLength={100}
        exception={props.exception}
        errorMessage={props.emailErrorMessage.errorMsg}
        autoCorrect={false}
        onChange={value => {
          this.setState(
            {
              email: value,
            },
            () => {
              this.onEmailChange(value);
            }
          );
        }}
        onSubmit={value => {
          this.setState(
            {
              email: value,
            },
            () => {}
          );
        }}
        onFocus={() => {
          this.setState({
            emailException: false,
            emailErrorMsg: "",
          });
        }}
        showTipOnFocus={false}
        restrictSpace={true}
      />
      <NewTextInput
        passwordMode={true}
        autoCorrect={false}
        maxLength={16}
        placeholder={langStr("NEW_REGISTER_PASSWORD_LABEL")}
        exception={props.passException}
        errorMessage={langStr("NEW_REGISTER_PASSWORD_SECURITY_MESSAGE")}
        tipMessage={langStr("NEW_REGISTER_PASSWORD_SECURITY_MESSAGE")}
        onChange={value => {
          this.setState(
            {
              password: value,
            },
            () => {
              this.onPasswordChange(value);
            }
          );
        }}
        onSubmit={value => {
          this.setState(
            {
              password: value,
            },
            () => {}
          );
        }}
        onFocus={() => {
          this.setState({
            passwordException: false,
            passwordErrorMsg: "",
          });
        }}
        showTipsOnFocus={true}
      />
      <View style={{ flexDirection: "row" }}>
        <View style={styles.registerLabelContainer}>
          <Text style={styles.registerLabel}>{langStr("NEW_REGISTER_COUNTRY_LABEL")}</Text>
          <PruDropdownComponent
            selectedValueCB={props.onCountrySelection}
            selectedOption={props.selectedCountry}
            options={props.enabledCountriesList}
            enabled={props.countrySelectorEnabled}></PruDropdownComponent>
        </View>
        <View style={styles.registerLabelContainer}>
          <Text style={styles.registerLabel}>
            {langStr("NEW_REGISTER_LANGUAGES_LABEL")}
          </Text>
          {/* {this.prepareLanguagePicker()} */}
        </View>
      </View>
    </View>
    <TouchableOpacity
      style={styles.sendCodeBtnRect}
      onPress={props.signupPressed}>
      <Text style={styles.sendCodeBtnTitle}>{SIGN_UP}</Text>
    </TouchableOpacity>

    <View style={styles.haveAccountContainer}>
      <Text style={registrationStyles.newText}>{ALREADY_HAVE_ACOUNT}</Text>
      <TouchableOpacity
        hitSlop={styles.newRegistrationPosition}
        onPress={signinPressed}
        style={styles.headerButton}
        accessibilityLabel="loginBtn"
        accesible>
        <View style={styles.regBtnTextStyle}>
          <Text
            accessibilityLabel="registerText"
            accesible
            style={{
              fontSize: 13.3,
              lineHeight: 15.6,
              textAlign: "left",
              color: "#68737a",
            }}>{langStr("NEW_REGISTRATION_SIGNIN")}</Text>
        </View>
      </TouchableOpacity>
    </View>
  </ScrollView>
</TouchableWithoutFeedback>
