import { Navigation } from 'react-native-navigation'
import {registerScreens} from './router'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'findHome.login'
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
})