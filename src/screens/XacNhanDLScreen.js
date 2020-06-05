import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {firebaseApp} from 'JupViec/src/components/FirebaseConfig';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  Stack,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class XacNhanDLScreen extends React.Component {
  static navigationOptions = {header: null}

  constructor(props){
    super(props);
    this.state = {
      diadiem: '',
      sonha: '',
      ngay: '',
      thoigian: '',
      makm:'',
      makm:'null',
      /*diadiem: true,
      sonha: true,
      ngay: true,
      thoigian: true,*/
    }

    database = firebaseApp.database();
    donhang = database.ref('DonHang').child('DungLe');
  }

  goDichVuScreen(){
    //const {navigate} = this.props.navigation;
    const { navigation } = this.props
    navigation.navigate('DichVuScreen');
  }

  _submit(){
  	if(this.state.diadiem == '' || this.state.sonha == '' || this.state.ngay =='' || this.state.thoigian ==''){
  		Alert.alert(
          'Lỗi',
          'Phải nhập đầy đủ thông tin',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false}
        )

  	} else if(this.state.diadiem != '' && this.state.sonha != '' && this.state.ngay !='' && this.state.thoigian !=''){
  		donhang.push({
    		DiaDiem:this.state.diadiem,
    		SoNha:this.state.sonha,
    		Ngay:this.state.ngay,
    		ThoiGian:this.state.thoigian,
        MaKM:this.state.makm,
  		}, ()=>Alert.alert(
            'Thành công',
            'Bạn đã tạo đơn hàng thành công. Nhân viên sẽ sớm liên hệ Quý khách. Cảm ơn Quý khách đã lựa chọn dịch vụ của JupViec!',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => this.goDichVuScreen()},
            ],
            { cancelable: false }
        ))
  	}
  	
  }

  render() {
    const { navigation } = this.props
    return(
      <View>
  		  <View style={styles.bannerContainer}>
  		  </View>

    		<View style = {{flexDirection: 'row', marginLeft: 10, marginTop:20}}>
    			<Icon name="map-marker" size={25} color="#484848"/>
  	  		<Text style={styles.itemName}>ĐỊA ĐIỂM LÀM VIỆC (*)</Text>
        </View>
        <View>
  	  		<TextInput
  	  			style={styles.textInput}
  	  			placeholder="Nhập địa điểm"
  	  			onChangeText={(value) => this.setState({diadiem:value})}/>
    		</View>

    		<View style = {{flexDirection: 'row', marginLeft: 10, marginTop:5}}>
          <Icon name="home" size={25} color="#484848"/>
          <Text style={styles.itemName}>SỐ NHÀ/CĂN HỘ (*)</Text>
        </View>
        <View>
  	  		<TextInput 
  	  			style={styles.textInput}
  	  			placeholder="Nhập số nhà/căn hộ"
  	  			onChangeText={(value) => this.setState({sonha:value})}/>
    		</View>
        
    		<View style = {{flexDirection: 'row', marginLeft: 10, marginTop:5}}>
          <Icon name="calendar" size={22} color="#484848"/>
  	  		<Text style={styles.itemName}>LỊCH LÀM VIỆC (*)</Text>
        </View>
        <View>
  	  		<TextInput 
  	  			style={styles.textInput}
  	  			placeholder="Nhập ngày làm việc"
  	  			onChangeText={(value) => this.setState({ngay:value})}/>
    		</View>
        
    		<View style = {{flexDirection: 'row', marginLeft: 10, marginTop:5}}>
          <Icon name="bell" size={22} color="#484848"/>
  	  		<Text style={styles.itemName}>THỜI GIAN LÀM VIỆC (*)</Text>
        </View>
        <View>
  	  		<TextInput 
  	  			style={styles.textInput}
  	  			placeholder="Nhập số ca làm việc. (1 ca = 3.5h)"
  	  			onChangeText={(value) => this.setState({thoigian:value})}/>
    		</View>

        <View style = {{flexDirection: 'row', marginLeft: 10, marginTop:5}}>
          <Icon name="percent" size={22} color="#484848"/>
          <Text style={styles.itemName}>MÃ KHUYẾN MÃI</Text>
        </View>
        <View>
          <TextInput 
            style={styles.textInput}
            placeholder="Nhập mã khuyến mãi (nếu có)"
            onChangeText={(value) => this.setState({makm:value})}/>
        </View>

    		<View style= {styles.sotien}>
    			<Text style={styles.sotien}>Số tiền</Text>
          <Text style={styles.textPhiDC}>(Đã bao gồm phí dụng cụ)</Text>
    			<Text style={styles.hienthisotien}>0đ/3.5h</Text>
    		</View>
    		<TouchableOpacity
  	        style={styles.buttonContainer}
  	        onPress={() => {this._submit()}}>
  	        <Text style={styles.buttonText}>XÁC NHẬN</Text>
        </TouchableOpacity>
  	  </View>
    )
  }
}

const styles = StyleSheet.create({
	bannerContainer:{
	    paddingTop: 70,
	    backgroundColor: '#6699CC'
  	},
	itemName: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#484848',
		marginVertical: 7,
		marginLeft: 5,
  	},
	textInput: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: '#DDDDDD'
	},
	textPhiDC: {
		color: '#484848',
		fontStyle: 'italic',
		fontSize: 14,
		marginLeft: 5,
		marginTop: 8,
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
		marginLeft: 90,
		textAlign: 'right'
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
 });

export default XacNhanDLScreen;

/*function XacNhanDLScreen(props) {
  const { navigation } = props
  return (
  	<View>
  		<View style={styles.bannerContainer}>
  		</View>
  		<View>
  			<Icon name="rocket" size={30} color="#900" />
	  		<Text style={styles.itemName}>ĐỊA ĐIỂM LÀM VIỆC</Text>
	  		<TextInput
	  			style={styles.textInput}
	  			placeholder="Nhập địa điểm"/>
  		</View>
  		<View>
	  		<Text style={styles.itemName}>SỐ NHÀ/CĂN HỘ</Text>
	  		<TextInput 
	  			style={styles.textInput}
	  			placeholder="Nhập số nhà/căn hộ"/>
  		</View>
  		<View>
	  		<Text style={styles.itemName}>LỊCH LÀM VIỆC</Text>
	  		<TextInput 
	  			style={styles.textInput}
	  			placeholder="Nhập ngày làm việc"/>
  		</View>
  		<View>
	  		<Text style={styles.itemName}>THỜI GIAN LÀM VIỆC</Text>
	  		<TextInput 
	  			style={styles.textInput}
	  			placeholder="Nhập số ca làm việc. (1 ca = 3.5h)"/>
  		</View>
  		<View>
  			<Text style={styles.textPhiDC}>(Đã bao gồm phí dụng cụ)</Text>
  		</View>
  		<View style= {styles.sotien}>
  			<Text style={styles.sotien}>Số tiền</Text>
  			<Text style={styles.hienthisotien}>0đ/3.5h</Text>
  		</View>
  		<TouchableOpacity
	        style={styles.buttonContainer}
	        onPress={() => navigation.navigate('DichVuScreen')}>
	        <Text style={styles.buttonText}>TRỞ VỀ</Text>
      	</TouchableOpacity>
  	</View>
  );
};*/


