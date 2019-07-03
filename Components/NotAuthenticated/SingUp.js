const SignUp = ( props ) => {
  const { navigation } = props
  return(
  <View style={styles.sign}>
    <Text>Component SignUp</Text>
    <Button 
      title="Back"
      onPress={() => {navigation.goBack()}}
    />
  </View>
)};