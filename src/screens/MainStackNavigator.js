import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/FontAwesome'

import WelcomeScreen from '../screens/WelcomeScreen'
import Login from '../screens/LoginScreen'
import Register from '../screens/RegisterScreen'
import DangNhap from '../screens/DangNhap'
import ForgotPassword from '../screens/ForgotPassword'
import DangKy from '../screens/DangKy'
import DichVuScreen from '../screens/DichVuScreen'
import DVDungLeScreen from '../screens/DVDungLeScreen'
import DVDungDinhKyScreen from '../screens/DVDungDinhKyScreen'
import DVTongVeSinhScreen from '../screens/DVTongVeSinhScreen'
import XacNhanDLScreen from '../screens/XacNhanDLScreen'
import XacNhanDKScreen from '../screens/XacNhanDKScreen'
import KhaoSatScreen from '../screens/KhaoSatScreen'

const Stack = createStackNavigator()
//const Tab = createBottomTabNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
      	<Stack.Screen
          name='WelcomeScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={WelcomeScreen}
          options={{ title: 'JupViec v.1.6.2' }}
        />

 		    <Stack.Screen
          name='Login'
          screenOptions={{
          gestureEnabled: true}}
          component={Login}
          options={{ title: 'Đăng nhập' }}
        />

        <Stack.Screen
          name='Register'
          screenOptions={{
          gestureEnabled: true}}
          component={Register}
          options={{ title: 'Đăng ký' }}
        />

        <Stack.Screen
          name='DangKy'
          screenOptions={{
          gestureEnabled: true}}
          component={DangKy}
          options={{ title: 'Đăng ký test' }}
        />

        <Stack.Screen
          name='ForgotPassword'
          screenOptions={{
          gestureEnabled: true}}
          component={ForgotPassword}
          options={{ title: 'Quên mật khẩu' }}
        />

        <Stack.Screen
          name='DangNhap'
          screenOptions={{
          gestureEnabled: true}}
          component={DangNhap}
          options={{ title: 'Đăng nhập test' }}
        />

      	<Stack.Screen
          name='DichVuScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={DichVuScreen}
          options={{ title: 'Dịch vụ' }}
        />
        
        <Stack.Screen
          name='DVDungLeScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={DVDungLeScreen}
          options={{ title: 'Giúp việc dùng lẻ' }}
        />

        <Stack.Screen
          name='DVDungDinhKyScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={DVDungDinhKyScreen}
          options={{ title: 'Giúp việc dùng định kỳ' }}
        />

        <Stack.Screen
          name='DVTongVeSinhScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={DVTongVeSinhScreen}
          options={{ title: 'Giúp việc tổng vệ sinh' }}
        />

        <Stack.Screen
          name='XacNhanDLScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={XacNhanDLScreen}
          options={{ title: 'Xác nhận thông tin' }}
        />

        <Stack.Screen
          name='XacNhanDKScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={XacNhanDKScreen}
          options={{ title: 'Xác nhận thông tin đk' }}
        />

        <Stack.Screen
          name='KhaoSatScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={KhaoSatScreen}
          options={{ title: 'Khảo sát tổng vệ sinh' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator