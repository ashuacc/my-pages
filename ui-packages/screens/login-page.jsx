<import model="login-page" label="login-page" style="login-page" content="login-page" />
  <Fragment>
    <View style={styles.subContainer2}>
      <NewTextInput
        placeholder={langStr("KEY_EMAIL_LABEL")}
        autoCorrect={false}
        onChange={handleEmailChange}
        onFocus={resetErrors}
        presetValue={props.email}
        showTipOnFocus={true}
        errorMessage={props.emailErrorMessage.errorMsg}
        exception={props.exception}
        maxLength={100}
        restrictSpace={true}
      />
      <NewTextInput
        passwordMode={true}
        autoCorrect={false}
        placeholder={langStr("KEY_PASSWORD_LABEL")}
        tipMessage={
          "8-16 characters with at least 1 number,1 uppercase, 1 lowercase and 1 special character"
        }
        onChange={handlePasswordChange}
        onFocus={resetErrors}
        presetValue={props.password}
        exception={props.passException}
        maxLength={100}
        showTipOnFocus={true}
        errorMessage={props.passErrorMessage.errorMsg}
      />

      <View style={{ width: props.sizes.fullScreen }}>
        <TouchableOpacity
          accessibilityLabel="forgotBtn"
          accesible
          onPress={setForgotPasswordModalVisible}
        >
          <Text
            accessibilityLabel="forgotText"
            accesible
            style={loginStyles.forgotPasswordText}>{langStr("KEY_FORGOT_PASSWORD_LABEL")}</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.loginBtnContainer}>
      <AppButton
        type={styles.loginBtn}
        title={langStr("KEY_LOGIN_LABEL")}
        press={onLoginPressed}
      />
      <View style={{ marginTop: 15 }}>
        <TouchableOpacity onPress={newUserPressed}>
          <Text style={{ color: "blue", size: 16, textDecorationLine: "underline" }}>{langStr("KEY_NEW_USER")}</Text>
        </TouchableOpacity>
      </View>
  </View>
</Fragment>