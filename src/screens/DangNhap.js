import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Alert} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import {firebaseApp} from 'JupViec/src/components/FirebaseConfig';
import {EMAIL, PASSWORD} from './Regexs';

class DangNhap extends React.Component {
  static navigationOptions = {header: null}

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      emailValid: true,
      passwordValid: true
    }
  }

  validate(type, value){
    if(type == "email"){
      this.setState({email: value})
      if(value == ''/* || EMAIL.test(value)*/){
        this.setState({emailValid: true})
      } else {
        this.setState({emailValid: false})
      }
    } else if(type == "password"){
      this.setState({password: value})
      if(value == '' /*|| PASSWORD.test(value)*/){
        this.setState({passwordValid: true})
      } else {
        this.setState({passwordValid: false})
      }
    }
  }

  _login(){
    if(/*this.state.emailValid && this.state.passwordValid && */this.state.email != '' && this.state.password != ''){
      firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
          //const {navigate} = this.props.navigation;
    	  const { navigation } = this.props
          navigation.navigate('DichVuScreen');
        })
        .catch(function(error){
          Alert.alert(
            'Đăng nhập không thành công',
            'Email hoặc mật khẩu không đúng',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false}
          )
        });
    } else {
      if(this.state.email == '' || this.state.password == ''){
        Alert.alert(
          'Lỗi',
          'Email và mật khẩu không được trống!',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false}
        )
      }
    }
  }

  //QUÊN MẬT KHẨU
  goToForgotPassword = () => this.props.navigation.navigate('ForgotPassword')

  render() {
    //const {navigate} = this.props.navigation;
    const { navigation } = this.props
    return(
      <View style={styles.container}>
        <TextInput
          style={[styles.inputStyle, !this.state.emailValid? styles.error:null]}
          placeholder='Nhập Email'
          onChangeText={(email) => {this.validate("email", email)}}
          value={this.state.email}
         />
         <TextInput
           style={[styles.inputStyle, !this.state.passwordValid? styles.error:null]}
           placeholder='Nhập mật khẩu'
           secureTextEntry={true}
           onChangeText={(password) => {this.validate("password", password)}}
           value={this.state.password}
          />
        <TouchableOpacity onPress={() => {this._login()}}>
          <Text style={styles.btnText}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DangKy')}>
          <Text style={styles.btnTextSignUp}>Chưa có tài khoản?   Đăng ký ngay</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.goToForgotPassword}>
          <Text style={styles.btnTextForgotPass}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DangNhap

/******************** THIẾT KẾ **********************/
const styles = StyleSheet.create({
	container: {
    backgroundColor: '#26AE90',
    flex: 1,
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 20
  },
  inputStyle: {
    backgroundColor: '#fff',
    marginBottom: 15,
    fontSize: 18,
    paddingLeft: 15,
    height: 40
  },
  btnText: {
    backgroundColor: '#fff',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center'
  },
  btnTextSignUp: {
    fontSize: 16,
    color: '#fff',
    marginTop: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btnTextForgotPass: {
    fontSize: 16,
    color: '#fff',
    marginTop: 30,
    textAlign: 'center'
  },
  error: {
    borderWidth: 2,
    borderColor: 'red'
  }
});

