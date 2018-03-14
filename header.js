import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

  export default class Header extends Component {
    render() {
      return (
          <View style={styles.container}>
            <View style={styles.navBar}>
                    <View style={styles.left}>
                        <Icon
                          name='home'
                          color='#d3d3d3'
                        />
                    </View>
                  <View style={styles.middle}>
                  <TouchableOpacity>
                    <Image
                      source={require('./assets/LOL-Original-flat.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  </View>
                  <View style={styles.right}>
                    <Icon
                      name='favorite'
                      color='#d3d3d3'
                    />
                  </View>
            </View>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    navBar: {
      backgroundColor: '#ffffff',
      justifyContent: 'space-between',
      flexDirection: 'row',
      height: 85,
      paddingTop: 30,
      elevation: 2,
      position: 'relative',
      borderBottomColor: '#d3d3d3',
      borderBottomWidth: 1,
    },
    image: {
      width: 170,
      height: 40
    },
    middle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    blue: {
      color: 'blue'
    },
    left: {
      flex: 1,
      paddingLeft: 5,
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    right: {
      flex: 1,
      paddingRight: 8,
      flexDirection: 'row',
      justifyContent: 'flex-end'
    }

  });
