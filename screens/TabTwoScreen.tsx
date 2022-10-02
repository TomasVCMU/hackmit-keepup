import { StyleSheet as StyleSheet2 } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import { ScrollView, StyleSheet } from 'react-native';

import { RootTabScreenProps } from '../types';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Audio } from 'expo-av';
import { useState, useEffect} from 'react';
import { Sound } from 'expo-av/build/Audio';

export default function TabTwoScreen() {

  const [sound, setSound] = useState<Sound | any>();
  const [isPlaying, setIsPlaying] = useState(false);

  async function playSound(flag: boolean) {
    if (!isPlaying) {
      Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
      })
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(require('../assets/sounds/song-1.mp3'));
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
      setIsPlaying(true)
    } else {
      setIsPlaying(false)
      setSound(null)
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView>
        <Card>
        <View style={styles.container}>
        <Avatar.Image source={require('../assets/images/man2.jpeg')} />
        <Title> @Tomas.Vie </Title> 
        </View>
    
          <Card.Title title="Tomas" left={(props) => <Avatar.Image {...props} source={require('../assets/images/man2.jpeg')} />} />
          <Card.Content>
            <Title> September 20, 2022</Title>  
            <Title>I was just listening to this cool song </Title>
          </Card.Content>
          <Card.Cover source={require('../assets/images/maxresdefault.jpeg')} />
          <Card.Actions>
            <Button onPress={() => playSound(isPlaying)}>Play</Button>
          </Card.Actions>
        </Card>
      <Card>
        <Card.Title title="Tomas" left={(props) => <Avatar.Image {...props} source={require('../assets/images/man2.jpeg')} />} />
        <Card.Content>
          <Title> July 20, 2022</Title>  
          <Title> this video is so dope </Title>
        </Card.Content>
        <Card.Actions>
          <Button>Play</Button>
        </Card.Actions>
      </Card><Card>
        <Card.Title title="Tomas" left={(props) => <Avatar.Image {...props} source={require('../assets/images/man2.jpeg')} />} />
        <Card.Content>
          <Title> June 20, 2022</Title>  
          <Title> this tiktok trend made me die laughing </Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Play</Button>
        </Card.Actions>
      </Card><Card>
        <Card.Title title="Tomas" left={(props) => <Avatar.Image {...props} source={require('../assets/images/man2.jpeg')} />} />
        <Card.Content>
        <Title> April 20, 2022</Title>  
        <Title> this youtube vid is so funny LOL </Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }} />
        <Card.Actions>
          <Button>Play</Button>
        </Card.Actions>
      </Card><Card>
        <Card.Title title="Tomas" left={(props) => <Avatar.Image {...props} source={require('../assets/images/man2.jpeg')} />} />
        <Card.Content>
          <Title> January 20, 2022</Title>  
          <Title>I just watched this really cool show on Netflix! </Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://www.joblo.com/wp-content/uploads/2021/06/stranger-things-season-4-cast-announcement.jpg' }} />
        <Card.Actions>
          <Button>Play</Button>
        </Card.Actions>
      </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
