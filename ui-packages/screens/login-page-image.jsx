<import label="login-page-image" content="login-page-image" />
<View style={{
      paddingTop: 20,
      height: 240,
      alignItems: "center",
      width: props.sizes.fullScreen,
    }}>
  <View style={{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  }}></View>

  <Image
    style={{
      width: props.sizes.fullScreen * 0.8,
      height: "100%",
      resizeMode: "contain"
    }}
    source={{ uri: contents.img }}
  />
</View>