import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';


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
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const ServiceItem = ({image, name}) => (
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.itemImage} />
    <Text style={styles.itemName} >
      {name}
    </Text>
  </View>
);

function DichVuScreen (props) {
  const { navigation } = props
  return (
    <View>      
      <View style={styles.headerContainer}>
        <View style={styles.containerStyle}>
          <Image style={styles.imageStyle}
            source={require('JupViec/user-circle-icon-vector.jpg')}>
          </Image>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.welcometextStyle}>Chào ĐCĐ. Chúc bạn một ngày vui vẻ!</Text>
        </View>
      </View>

      <View style={styles.bannerContainer}>
        <Image style={styles.imagebannerStyle}
          source={require('JupViec/src/assets/banner.png')}>
        </Image>
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.listItemContainer}>
          <View>
            <TouchableOpacity onPress={() => {
              navigation.navigate('DVDungLeScreen');
              }}>
              <ServiceItem
                name="Giúp việc dùng lẻ"
                image={require('JupViec/src/assets/dungle.png')}
              />
            </TouchableOpacity>
            <ServiceItem
              name="Giúp việc giặt Sofa"
              image={require('JupViec/src/assets/giatsofa.png')}
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => {
              navigation.navigate('DVDungDinhKyScreen');
              }}>
              <ServiceItem
                name="Giúp việc định kỳ"
                image={require('JupViec/src/assets/dungdk.png')}
                
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate('DVTongVeSinhScreen');
              }}>
              <ServiceItem
                name="Tổng vệ sinh"
                image={require('JupViec/src/assets/tongvs.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  headerContainer:{
    flexDirection: 'row',
    paddingTop: 5,
    backgroundColor: '#006600'
  },

  bannerContainer:{
    paddingTop: 15,
    backgroundColor: '#6699CC'
  },

  inputContainer:{
    backgroundColor: '#006600',
    color: '#006600',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    marginBottom: 5,
  },

  bodyContainer:{
    backgroundColor: '#EEEEEE',
  },

  sectionContainer:{
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },

  listItemContainer:{
    flexDirection: 'row',
  },

  itemContainer: {
    width: 150,
    marginRight: 30,
    marginTop: 10,
  },
/**/
  imageStyle:{
    width: 30, height: 30,
    marginBottom:5,
    marginLeft: 10,
    alignItems: 'center',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },

  imagebannerStyle:{
    width: 370, height: 120,
    marginBottom:15,
    marginLeft: 20,
    alignItems: 'center',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },

  itemImage: {
    width: 80,
    height: 80,
    marginLeft: 70,
    marginTop:15,
  },

  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#484848',
    marginVertical: 7,
    marginLeft: 60,
    textAlign:'center',

  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  },

  welcometextStyle:{
    color:'#FFFFFF',
    fontSize:12,
    fontWeight: 'bold',
    textAlign:'center',
    justifyContent:'center'
  }
})


export default DichVuScreen;