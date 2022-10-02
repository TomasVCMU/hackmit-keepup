import { ScrollView, StyleSheet } from 'react-native';

import { RootTabScreenProps } from '../types';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Audio } from 'expo-av';
import { useState, useEffect} from 'react';
import { Sound } from 'expo-av/build/Audio';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

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
    <ScrollView>
        <Card>
          <Card.Title title="Karen" left={(props) => <Avatar.Image {...props} source={require('../assets/images/girl.jpeg')} />} />
          <Card.Content>
            <Title>I was just listening to this cool song </Title>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button onPress={() => playSound(isPlaying)}>Play</Button>
          </Card.Actions>
        </Card>
      <Card>
        <Card.Title title="Tomas" left={(props) => <Avatar.Image {...props} source={require('../assets/images/girl.jpeg')} />} />
        <Card.Content>
          <Title>I was just listening to this cool song </Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Play</Button>
        </Card.Actions>
      </Card><Card>
        <Card.Title title="James" left={(props) => <Avatar.Image {...props} source={require('../assets/images/girl.jpeg')} />} />
        <Card.Content>
          <Title> this tiktok trend is so cringe </Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Play</Button>
        </Card.Actions>
      </Card><Card>
        <Card.Title title="Connie" left={(props) => <Avatar.Image {...props} source={require('../assets/images/girl.jpeg')} />} />
        <Card.Content>
          <Title> this youtube vid is so funny LOL </Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Play</Button>
        </Card.Actions>
      </Card><Card>
        <Card.Title title="Anne" left={(props) => <Avatar.Image {...props} source={require('../assets/images/girl.jpeg')} />} />
        <Card.Content>
          <Title>I just watched this really cool show on Netflix! </Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Play</Button>
        </Card.Actions>
      </Card>
      </ScrollView>
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
