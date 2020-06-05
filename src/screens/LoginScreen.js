import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function Login(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ĐĂNG NHẬP THÀNH CÔNG</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('DangKy')}>
        <Text style={styles.buttonText}>ĐĂNG KÝ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('DichVuScreen')}>
        <Text style={styles.buttonText}>XEM CÁC DỊCH VỤ GIÚP VIỆC</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 10,
    margin: 5
  },
  buttonText: {
    fontSize: 15,
    color: 'white'
  }
})

export default Login