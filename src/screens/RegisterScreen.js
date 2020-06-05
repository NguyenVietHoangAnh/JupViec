import React from 'react'
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Alert, Image} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import {firebaseApp} from 'JupViec/src/components/FirebaseConfig';
import {EMAIL, PASSWORD} from './Regexs';

function Register(props) {
  const { navigation } = props

  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={{uri: 'https://media.jupviec.vn/resize/800x600/files/ngx.chau/2019/07/25/giup-viec-nha-theo-gio-1-1426.png'}}>
        </Image>
        <Text style={styles.text}>Chào mừng bạn đến với JupViec.</Text>
        <Text style={styles.text}>Xin vui lòng điền thông tin vào các ô bên dưới</Text>
      </View>

      <View style={{marginBottom:12}}></View>

      <View>
        <View style={styles.body}>
          <Text style={styles.itemName}>HỌ VÀ TÊN</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập họ tên"
            />
        </View>
        <View style={styles.body}>
          <Text style={styles.itemName}>SỐ ĐIỆN THOẠI</Text>
          <TextInput style={styles.textInput2} placeholder="Nhập số điện thoại"/>
        </View>
        <View style={styles.body}>
          <Text style={styles.itemName}>EMAIL</Text>
          <TextInput style={styles.textInput3} placeholder="Nhập email"/>
        </View>
        <View style={styles.body}>
          <Text style={styles.itemName}>MẬT KHẨU</Text>
          <TextInput 
            style={styles.textInput4}
            placeholder="Nhập mật khẩu"
            secureTextEntry={true}
            />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('DichVuScreen')}>
          <Text style={styles.buttonText}>ĐĂNG KÝ</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle:{
    width: 300, height: 154,
    marginTop:10,
    marginBottom:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },

  body:{
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 70,
  },

  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
    marginTop: 5
  },
  text: {
    color: '#101010',
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
    //fontWeight: 'bold'
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 15,
    color: 'white'
  },
  bannerContainer:{
      paddingTop: 70,
      backgroundColor: '#6699CC'
    },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#484848',
    marginVertical: 7,
    marginLeft: 10,
    },
  textInput: {
    height: 40,
    width: 210,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 37,
    //marginRight: 10,
    backgroundColor: '#DDDDDD'
  },
  textInput2: {
    height: 40,
    width: 210,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 10,
    //marginRight: 10,
    backgroundColor: '#DDDDDD'
  },
  textInput3: {
    height: 40,
    width: 210,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 67,
    //marginRight: 10,
    backgroundColor: '#DDDDDD'
  },
  textInput4: {
    height: 40,
    width: 210,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 38,
    //marginRight: 10,
    backgroundColor: '#DDDDDD'
  },
  textPhiDC: {
    color: '#484848',
    fontStyle: 'italic',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 40,
  },
  sotien: {
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#484848',
    marginVertical: 7,
    marginLeft: 10,
  },
  hienthisotien :{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    marginVertical: 7,
    marginLeft: 220,
    textAlign: 'right'
  }
 });

export default Register