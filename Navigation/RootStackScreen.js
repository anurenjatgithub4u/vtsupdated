import React, { lazy } from 'react';
import Loadable from '../Suspense_Component/Loadable';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();


const LoadingScreen = Loadable(lazy(() => import('../RootScreen/LoadingScreen')));
const LoginScreen = Loadable(lazy(() => import('../RootScreen/LoginScreen')))
const UserTypeScreen = Loadable(lazy(() => import('../RootScreen/UserTypeScreen')))
const ForgotPasswordScreen = Loadable(lazy(() => import('../RootScreen/ForgotPasswordScreen')))
const NewRegisterScreen = Loadable(lazy(() => import('../RootScreen/NewRegisterScreen')))

const OtpVerifyScreen = Loadable(lazy(() => import('../RootScreen/OtpVerifyScreen')))

const UpdatePasswordScreen = Loadable(lazy(() => import('../RootScreen/UpdatePasswordScreen')))

const CitizensRegisterScreen = Loadable(lazy(() => import('../RootScreen/Citizens/CitizensRegisterScreen')))

const CustomDatePicker = Loadable(lazy(() => import('../CustomdatePicker')))

const CitizensOtpVerifyScreen = Loadable(lazy(() => import('../RootScreen/Citizens/CitizensOtpVerifyScreen')))



const AdminOtpVerifyScreen = Loadable(lazy(() => import('../RootScreen/AdminOtpVerifyScreen')))

const RootStackScreen = () => {
  return (
    <RootStack.Navigator>
   
      <RootStack.Screen options={{ headerShown: false }} name="LoadingScreen" component={LoadingScreen} />

      <RootStack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />

      <RootStack.Screen options={{ headerShown: false }} name="UserTypeScreen" component={UserTypeScreen} />

      <RootStack.Screen options={{ headerShown: false }} name="ForgotPasswordScreen" component={ForgotPasswordScreen} />

      <RootStack.Screen options={{ headerShown: false }} name="NewRegisterScreen" component={NewRegisterScreen} />

      <RootStack.Screen options={{ headerShown: false }} name="CitizensRegisterScreen" component={CitizensRegisterScreen} />

      <RootStack.Screen options={{ headerShown: false }} name="OtpVerifyScreen" component={OtpVerifyScreen} />

      <RootStack.Screen options={{ headerShown: false }} name="UpdatePasswordScreen" component={UpdatePasswordScreen} />

      <RootStack.Screen options={{ headerShown: false }} name="CitizensOtpVerifyScreen" component={CitizensOtpVerifyScreen} />






    </RootStack.Navigator>
  );
}

export default RootStackScreen;
