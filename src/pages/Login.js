import React, { useState } from 'react'
import {View, Text, StyleSheet, Image, Dimensions, ScrollView} from 'react-native'

import {Input, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

import Config from 'react-native-config'
import { Navigation } from 'react-native-navigation'

const { width, height } = Dimensions.get('screen')
const {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
  FOURTH_COLOR,
  FIFTH_COLOR,
  BASE_COLOR
} = Config

const LoginPage = ({ componentId }) => {
  const [showPassword, setShowPassword] = useState(false)

  const toHome = () => {
    console.log('to home');
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'findHome.home'
              }
            }
          ],
          options: {
            topBar: {
              visible: false
            }
          }
        }
      }
    })
  }
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.logoContainer}
      >
        <Image
          source={require('../assets/png/logo.png')}
          style={styles.logo}
          resizeMode="cover"
        />
        <View
          style={styles.titleContainer}
        >
          <Text
            style={[styles.title, styles.title_primary]}
          >
            Find
          </Text>
          <Text
            style={[styles.title, styles.title_secondary]}
          >
            Home
          </Text>
        </View>
      </View>
      <View
        style={styles.formContainer}
      >
        <View
          style={styles.formTop}
        />
        <View
          style={styles.formTitleContainer}
        >
          <Text
            style={[styles.title, styles.formTitle]}
          >
            Welcome
          </Text>
          <Text
            style={styles.formDescription}
          >
            Login for enjoy findhome
          </Text>
        </View>
        <View
          style={styles.form}
        >
          <Input
            label="Email"
            labelStyle={styles.formFieldLabel}
            inputContainerStyle={styles.formFieldContainer}
            inputStyle={styles.formField}
            placeholder="example@email.com"
            rightIcon={{ type: 'octicon', name: 'home' }}
          />
          <Input
            label="Password"
            labelStyle={styles.formFieldLabel}
            inputContainerStyle={styles.formFieldContainer}
            inputStyle={styles.formField}
            placeholder="**********"
            secureTextEntry={!showPassword}
            rightIcon={
              <Icon
                name={showPassword ? 'eye' : 'eye-outline'}
                size={24}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />
          <Button
            buttonStyle={styles.loginBtn}
            title="LOGIN"
            onPress={toHome}
          />
          <View
            style={styles.footer}
          >
            <Text
              style={styles.forgotText}
            >
              Forgot password?
            </Text>
            <Text
              style={styles.signupText}
            >
              create new account
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#${FIFTH_COLOR}`
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 40
  },
  logo: {
    width: 100,
    height: 100
  },
  titleContainer: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 40,
    fontFamily: 'Rubik-Mixed',
  },
  title_primary: {
    color: `#${PRIMARY_COLOR}`,
    fontWeight: '700'
  },
  title_secondary: {
    color: `#FFF`
  },
  formTop: {
    position: 'absolute',
    bottom: height / 8,
    // width: 310,
    // height: 310,
    width,
    height: width,
    // backgroundColor: '#fff',
    backgroundColor: `#${BASE_COLOR}`,
    transform: [
      {
        rotateZ: '45deg'
      }
    ],
    borderRadius: 45,
    // borderWidth: 1,
  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#fff',
    backgroundColor: `#${BASE_COLOR}`,
    paddingHorizontal: 20,
    // borderWidth: 1
  },
  formTitleContainer: {
    // borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
    bottom: 80
  },
  formTitle: {
    color: `#${PRIMARY_COLOR}`,
    fontFamily: 'Rubik-Medium'
  },
  formDescription: {
    fontSize: 20,
    fontFamily: 'Rubik-Light'
  },
  form: {
    flex: 1,
    width,
    position: 'absolute',
    paddingHorizontal: 20,
    marginTop: 20,
    // borderWidth: 1
  },
  formFieldContainer: {
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  formFieldLabel: {
    fontFamily: 'Rubik-Regular',
    color: `#${SECONDARY_COLOR}`
  },
  formField: {
  },
  loginBtn: {
    backgroundColor: `#${SECONDARY_COLOR}`,
    paddingVertical: 15,
    borderRadius: 10
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 30
  },
  forgotText: {
    fontFamily: 'Rubik-Light',
    fontSize: 14
  },
  signupText: {
    color: `#${SECONDARY_COLOR}`,
    fontFamily: 'Rubik-Medium',
    fontSize: 14,
  },
})

export default LoginPage