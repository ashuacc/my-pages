<import model="landing-page" label="landing-page" style="landing-page" content="landing-page" />
  <View style={{ flex: 1 }}>
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={{ uri: contents.bg }}>
      <View style={{ flex: 1, margin: 10, marginHorizontal: 0 }}>
        <View style={styles.langHeader}>
          <Languages
            textStyle={styles.langStyle}
            containerStyle={{ paddingHorizontal: 10 }}
            accessibilityLabel="langContainer"
            testID="langContainer"
            indicateColor="#6b6a6d"
          />
        </View>

        <View style={styles.container}>
          <View style={styles.aboutContainer}>
            <Image
              style={styles.aboutImg}
              source={{ uri: contents.about }}
            />
            <Text style={styles.subDescription}>{langStr(labels.subDescription)}</Text>
          </View>

          <View style={styles.disclaimer}>
            <View style={styles.disclaimerPadding}>
              <View style={styles.tncPrivacyContainer}>
                <Text style={styles.tncPrivacyTextStyle}>{langStr(labels.tnc1)}</Text>
                <TouchableOpacity
                  style={styles.tncPrivacyTextSpacing}
                  onPress={goToTnC}>
                  <Text style={styles.tncPrivacyTextStyleWithUl}>{langStr(labels.tnc2)}</Text>
                </TouchableOpacity>
                <View style={styles.tncPrivacyTextSpacing}>
                  <Text style={styles.tncPrivacyTextStyle}>{langStr(labels.and)}</Text>
                </View>
                <TouchableOpacity
                  style={styles.tncPrivacyTextSpacing}
                  onPress={goToPrivacy}>
                  <Text style={styles.tncPrivacyTextStyleWithUl}>{langStr(labels.tnc3)}</Text>
                </TouchableOpacity>
                <View style={styles.tncPrivacyTextSpacing}>
                  <Text style={styles.tncPrivacyTextStyle}>{langStr(labels.tnc4)}</Text>
                </View>
              </View>
            </View>

            <View>
              <View style={styles.loginBtnsContainer}>
                <SocialLogin
                  context={labels.loginContext}
                  fbText={langStr(labels.connectWithFb)}
                  {...this.props}
                />
                <SocialLogin
                  context={labels.loginContext}
                  gmailText={langStr(labels.connectWithGoogle)}
                  {...this.props}
                  isGoogle
                />
                <TouchableOpacity
                  style={styles.loginMail}
                  onPress={loginWithEmail}
                >
                  <Image
                    resizeMode="contain"
                    style={styles.iconMailLogo}
                    source={{ uri: contents.mail }}
                  />
                  <Text style={styles.mailLoginText}>{langStr(labels.loginWithEmail)}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  </View>
