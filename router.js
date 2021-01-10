import React from 'react'
import {Navigation} from 'react-native-navigation'
import {Provider} from 'react-redux'
import store from './src/store'

// VIEWS
import App from './App'
import Login from './src/pages/Login'
import Home from './src/pages/Home'

export function registerScreens() {
  Navigation.registerComponent('findHome.main', () => WrappedComponent(App))
  Navigation.registerComponent('findHome.login', () => WrappedComponent(Login))
  Navigation.registerComponent('findHome.home', () => WrappedComponent(Home))
}

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <Component
          {...props}
        />
      </Provider>
    )

    return <EnhancedComponent />
  }
}