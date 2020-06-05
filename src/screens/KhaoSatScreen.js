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
  YellowBox,
} from 'react-native';

YellowBox.ignoreWarnings(['Setting a timer']);


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class KhaoSatScreen extends React.Component {
  static navigationOptions = {header: null}

  constructor(props){
    super(props);
    this.state = {
      diadiem: '',
      sonha: '',
      ngay: '',
      ghichu: '',
      ghichu: null,
      sotien: 30000
      /*diadiem: true,
      sonha: true,
      ngay: true,
      thoigian: true,*/
    }

    database = firebaseApp.database();
    khaosat = database.ref('KhaoSat');
  }

  goDichVuScreen(){
    //const {navigate} = this.props.navigation;
    const { navigation } = this.props
    navigation.navigate('DichVuScreen');
  }

  _submit(){
  	if(this.state.diadiem == '' || this.state.sonha == '' || this.state.ngay ==''){
  		Alert.alert(
          'Lỗi',
          'Phải nhập đầy đủ thông tin',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false}
        )

  	} else if(this.state.diadiem != '' && this.state.sonha != '' && this.state.ngay !='' ){
  		khaosat.push({
	  		DiaDiem:this.state.diadiem,
	  		SoNha:this.state.sonha,
	  		Ngay:this.state.ngay,
	  		GhiChu:this.state.ghichu,
	  		SoTien:this.state.sotien,
  		}, ()=>Alert.alert(
            'Thành công',
            'Nhân viên sẽ sớm liên hệ Quý khách để khảo sát dịch vụ. Cảm ơn Quý khách đã lựa chọn dịch vụ của JupViec!',
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
	  return (
	  	<View>
	  		<View style={styles.bannerContainer}>
	  			<Text style={styles.itemNamebanner}>Trước khi thực hiện tổng vệ sinh, JupViec sẽ tiến hành khảo sát nhà bạn.</Text>
	  		</View>

	  		<View style = {{flexDirection: 'row', marginLeft: 10, marginTop:20}}>
    			<Icon name="map-marker" size={25} color="#484848"/>
  	  			<Text style={styles.itemName}>ĐỊA ĐIỂM KHẢO SÁT (*)</Text>
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
	  	  		<Text style={styles.itemName}>LỊCH KHẢO SÁT (*)</Text>
        	</View>
	  		<View>
		  		<TextInput 
	  	  			style={styles.textInput}
	  	  			placeholder="Nhập ngày khảo sát"
	  	  			onChangeText={(value) => this.setState({ngay:value})}/>
	  		</View>
			
			<View style = {{flexDirection: 'row', marginLeft: 10, marginTop:5}}>
	          	<Icon name="edit" size={25} color="#484848"/>
	  	  		<Text style={styles.itemName}>GHI CHÚ</Text>
        	</View>
	  		<View>
		  		<TextInput
		  			style={styles.textInputGC}
		  			multiline={true}
		  			placeholder="Nhập yêu cầu cụ thể của bạn. VD: dọn kho, cạo vết ố, vệ sinh nhà sau khi xây dựng..."
		  			onChangeText={(value) => this.setState({ghichu:value})}/>
	  		</View>
	  		<View>
	  			<Text style={styles.textPhiDC}>(Miễn phí nếu sử dụng dịch vụ sau khi khảo sát)</Text>
	  		</View>
	  		<View style= {styles.sotien}>
	  			<Text style={styles.sotien}>Số tiền</Text>
	  			<Text style={styles.hienthisotien}>50.000 đ</Text>
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

export default KhaoSatScreen;

const styles = StyleSheet.create({
	bannerContainer:{
	    paddingTop: 5,
	    backgroundColor: '#6699CC'
  	},

	itemNamebanner: {
		fontSize: 14,
		fontWeight: 'bold',
		color: 'white',
		marginVertical: 7,
		marginLeft: 10,
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
	textInputGC: {
		height: 80,
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
		marginLeft: 10,
		marginTop: 15,
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
		marginLeft: 245,
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

