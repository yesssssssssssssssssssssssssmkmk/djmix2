import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

class Sound1 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://soundbible.com/mp3/grenade-launcher-daniel_simon.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'yellow',
          borderWidth: 1,
          borderRadius: 100,
          width: 250,
          height: 75,
          marginLeft: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={this.playSound}>
        <Text>SOUND 1</Text>
      </TouchableOpacity>
    );
  }
}
class Sound2 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          borderWidth: 1,
          borderRadius: 100,
          width: 250,
          height: 75,
          marginLeft: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={this.playSound}>
        <Text>SOUND 2</Text>
      </TouchableOpacity>
    );
  }
}

class Sound3 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://soundbible.com/mp3/M1 Garand Gun-SoundBible.com-1519788442.mp3',

      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'purple',
          borderWidth: 1,
          borderRadius: 100,
          width: 250,
          height: 75,
          marginLeft: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={this.playSound}>
        <Text>SOUND 3</Text>
      </TouchableOpacity>
    );
  }
}
class Sound4 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://soundbible.com/mp3/Teacher Charlie Brown Talking-SoundBible.com-1454295165.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'brown',
          borderWidth: 1,
          borderRadius: 100,
          width: 250,
          height: 75,
          marginLeft: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={this.playSound}>
        <Text>SOUND 4</Text>
      </TouchableOpacity>
    );
  }
}
class Sound5 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'https://audio.code.org/start2.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          borderWidth: 1,
          borderRadius: 100,
          width: 250,
          height: 75,
          marginLeft: 50,

          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={this.playSound}>
        <Text>SOUND 5</Text>
      </TouchableOpacity>
    );
  }
}
class StopSound extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          borderWidth: 1,
          borderRadius: 100,
          width: 250,
          height: 75,
          marginLeft: 50,
          marginBottom: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          Audio.setIsEnabledAsync(false);
        }}>
        <Text>STOP SOUND</Text>
      </TouchableOpacity>
    );
  }
}
export default class App extends React.Component {
  render() {
    return (
       
      <View style={{ marginTop: 100 }}>
        <View style = {{marginLeft:80,marginTop:1,marginBottom:20,backgroundColor:'orange'}}>
          <Text> DJ AUDIO MIXER APP STAGE 2 </Text>
        </View>
        <Sound1 />
        <Text> </Text>
        <Sound2 />
        <Text> </Text>
        <Sound3 />
        <Text> </Text>
        <Sound4 />
        <Text> </Text>
        <Sound5 />
        <Text> </Text>
        <StopSound />
      </View>
    );
  }
}
