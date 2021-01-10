import React, { useState } from 'react'
import {View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native'

import {Header, Avatar, Icon, Input} from 'react-native-elements'

import Config from 'react-native-config'

const { width, height } = Dimensions.get('screen')
const {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
  FOURTH_COLOR,
  FIFTH_COLOR,
  BASE_COLOR
} = Config

const HomePage = (props) => {
  const [filter, setFilter] = useState(1)
  const [filters, setFilters] = useState([
    {id: 1, name: 'Home', icon: 'home', typeIcon: 'octicon'},
    {id: 2, name: 'Apart', icon: 'apartment', typeIcon: 'material'},
    {id: 3, name: 'Rents', icon: 'key', typeIcon: 'octicon'},
    {id: 4, name: 'Offers', icon: 'tag', typeIcon: 'octicon'}
  ])

  const centerHeaderComponent = () => (
    <View
      style={styles.headerCenter}
    >
      <Icon
        name="place"
        type="material"
        size={24}
        color={`#${PRIMARY_COLOR}`}
      />
      <Text
        style={styles.headerCenterText}
      >
        Los angeles, CA
      </Text>
      <Icon
        name="chevron-down-sharp"
        type="ionicon"
        size={20}
        color={`#${PRIMARY_COLOR}`}
      />
    </View>
  )
  const rightHeaderComponent = () => (
    <View
      style={styles.headerRight}
    >
      <Icon
        name="bell"
        type="evilicon"
        size={32}
        style={styles.headerRightIcon}
        color={`#${PRIMARY_COLOR}`}
      />
      <Icon
        name="settings"
        type="ionicons"
        size={24}
        color={`#${PRIMARY_COLOR}`}
      />
    </View>
  )
  
  return (
    <View
      style={styles.container}
    >
      <Header
        containerStyle={styles.header}
        leftComponent={
          <Avatar
            containerStyle={styles.avatar}
            rounded
            title="DR"
            size="medium"
          />
        }
        centerComponent={centerHeaderComponent}
        rightComponent={rightHeaderComponent}
      />
      <ScrollView
        style={styles.content}
      >
        <View
          style={styles.contentWelcome}
        >
          <Text
            style={styles.contentTitle1}
          >
            Hello Daniel!
          </Text>
          <Text
            style={styles.contentTitle2}
          >
            Start looking for your house
          </Text>
        </View>
        <View
          style={styles.searchContainer}
        >
          <Input
            inputContainerStyle={styles.searchFieldContainer}
            inputStyle={styles.searchField}
            placeholder="What are you looking for?"
            leftIcon={{ type: 'ionicon', name: 'search' }}
            rightIcon={
              <Icon
                style={styles.iconFilters}
                name="options"
                type="ionicon"
                size={24}
              />
            }
          />
          <View
            style={styles.filtersContainer}
          >
            {
              filters.map(f => (
                <TouchableOpacity
                  onPress={() => setFilter(f.id)}
                  style={[
                    styles.filter,
                    filter === f.id && styles.filterActive
                  ]}
                  key={f.id}
                >
                  <Icon
                    color={filter === f.id ? '#fff': '#D3DBE2'}
                    name={f.icon}
                    type={f.typeIcon}
                    size={36}
                  />
                  {
                    filter === f.id &&
                      <Text
                        style={styles.filterText}
                      >
                        {f.name}
                      </Text>
                  }
                </TouchableOpacity>
              ))
            }
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#${BASE_COLOR}`
  },
  header: {
    backgroundColor: `#${BASE_COLOR}`,
    paddingHorizontal: 20
  },
  avatar: {
    backgroundColor: `#${PRIMARY_COLOR}`
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerCenterText: {
    fontFamily: 'Rubik-Regular',
    fontSize: 12
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerRightIcon: {
    paddingRight: 25
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 40,
    paddingHorizontal: 20
  },
  contentWelcome: {
    // borderWidth: 1,
    paddingBottom: 20
  },
  contentTitle1: {
    fontSize: 20,
    fontFamily: 'Rubik-Light',
    color: '#B2B2B2'
  },
  contentTitle2: {
    fontSize: 20,
    fontFamily: 'Rubik-Regular',
    color: `#${PRIMARY_COLOR}`
  },
  searchContainer: {
    // borderWidth: 1,
  },
  searchFieldContainer: {
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10
  },
  searchField: {
    fontSize: 15,
    fontFamily: 'Rubik-Light'
  },
  iconFilters: {
    transform: [
      {
        rotateZ: '-90deg'
      }
    ]
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  filter: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    margin: 7,
    borderRadius: 10
  },
  filterActive: {
    backgroundColor: '#46D0D9',
    elevation: 2
  },
  filterText: {
    paddingTop: 10,
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
    color: '#fff'
  }
})

export default HomePage