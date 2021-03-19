import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';
import {SearchBar} from 'react-native-elements';
//import { Card } from 'react-native-paper';
//import { Icon, Product } from '../components/';

const { width } = Dimensions.get('screen');
import * as SMS from 'expo-sms';
//import MyHeader from '../components/MyHeader';

import { Header, Icon, Badge } from 'react-native-elements';
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search:'',
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#1B2E0F' }}>
        <Header
          centerComponent={{
            text: 'GreenPin',
            style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' },
          }}
          rightComponent={
            <Icon
              name="paw"
              type="font-awesome"
              color="#696969"
              onPress={() => {
                this.props.navigation.navigate('NotificationScreen');
              }}
            />
          }
          backgroundColor="#eaf8fe"
        />


          <View styles ={{height:20,width:'100%',backgroundColor:'white'}}>
              <SearchBar
              placeholder="Type Here..."
              placeholderTextColor={'#d1da3f'}
              onChangeText={(text) => {
                this.setState({
                  search: text,
                });}}
            />
          </View>

        <Text style={{color:'white', marginTop:10, fontSize:22}}>
          Foundation News and Updates
        </Text>
        <ScrollView>
          <TouchableOpacity>
            <Card
              style={{
                padding: 10,
                marginTop: -30,
                backgroundColor: '#1B2E0F',
                color: '#82152b',
              }}
              isDark>
              <CardImage
                style={{ fontSize: 20, color: 'red', marginTop: 50 }}
                source={require('../assets/plant.jpg')}
              />
            </Card>
          </TouchableOpacity>
          <Text style={{color:'white', marginTop:20, fontSize:22}}>
          Top Foundations and NGOs
        </Text>
          <View style={styles.modalBackButton}>
              <View style={{ marginRight:-100, marginTop:10}}>
              <Image
                source={require('../assets/Nyati-logo-seo.png')}
                  fadeDuration={0}
                  style={{ width: 80, height: 80, marginRight:-50, marginTop:10 }}
              />
              </View>
              <View style={{ marginRight:-20, marginTop:-90, justifyContent:'center', alignItems:'center'}}> 
              <Image
                source={require('../assets/544.png')} 
                  fadeDuration={0}
                  style={{ width: 80, height: 80, marginRight:20, marginTop:10 }}
              />
              </View>
              <View style={{ marginRight:-38, marginTop:-95, justifyContent:'flex-end', alignItems:'flex-end'}}>
              <Image 
                source={require('../assets/apple.png')}
                  fadeDuration={0}
                  style={{ width: 90, height: 90, marginRight:40, marginTop:10 }}
              />
              </View>
              </View>
          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    width: width * 0.5,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300',
  },
  divider: {
    borderRightWidth: 0.3,
  },
  products: {
    width: width - 50 * 2,
    paddingVertical: 50 * 2,
  },

  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: 50,
  },
  imageStyles: {
    width: 200,
    height: 200,
  },
  shadow: {
    shadowColor: '#415136',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  imageContainer: {
    elevation: 1,
  },
});
