import { Text, View , Image, StyleSheet} from "react-native"

function Welcome() {
  return (
    <View style={styles.img}>
        <Image source={require('../assets/Splash Page_01.png')}  />
    </View>
  )
}
const styles = StyleSheet.create({
  img: {
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100
  }
})

export default Welcome