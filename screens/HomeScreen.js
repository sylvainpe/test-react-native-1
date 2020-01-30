import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      divValue: 'empty',
      starArray: [100,100,100,50,0]
    };
  }

  static navigationOptions = {
    header: null
  }

  listExample = [1,2,3,4,5];
  sum = (list) => list.reduce((a, b) => a + b);

  updateDiv = () => {
    this.setState({
      divValue: 'Updated !'
    });
  }

  updateStarsArray = (input) => {
    let array = [0,0,0,0,0];
    for(let i = 0 ; i < 5 ; i++) {
      if(input >= 1) {
        array[i] = 100;
      } else if(input < 1 && input > 0) {
        array[i] = input * 100;
      } else {
        array[i] = 0;
      }
      input -= 1;
    }
    this.setState({
      starArray: array
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={imageData}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>1. Write a function that sum's a list of integers</Text>
            <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
                <MonoText style={styles.codeHighlightText}>
                  listExample = [1,2,3,4,5];
                </MonoText>
                <MonoText style={styles.codeHighlightText}>
                  sum = (list) => list.reduce((a, b) => a + b);
                </MonoText>
            </View>
            <Text style={styles.tabBarInfoText}>
              Result: {this.sum(this.listExample)}
            </Text>
          </View>
          <br />
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>2. Write a function that will update the contents of a div when a button is clicked.</Text>
            <Text style={styles.tabBarInfoText}>
              <Button
                title="Press me"
                onPress={() => this.updateDiv()}
              />
              <div>
                {this.state.divValue}
              </div>
            </Text>
          </View>

          <br />
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>3. Write a function that takes an input between 0 and 5 inclusively and outputs an array of 5 elements that will be used for generating 5 stars in a UI.</Text>
            <Text style={styles.tabBarInfoText}>

            <TextInput
              style={{ height: 30, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
              onChangeText={text => this.updateStarsArray(text)}
              defaultValue={'3.5'}
            />
            <br />
              <div>
                {
                  this.state.starArray.length ? this.state.starArray.map((item) =>
                  (<span> {item} </span>)) : '-'
                }
              </div>
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const imageData = 'data:image/jpeg;base64,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';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
});
