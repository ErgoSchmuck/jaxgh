import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/asq placeholder logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">ASQ!</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">🌟 App Summary</ThemedText>
        <ThemedText>
          A cross-platform (web, iOS, Android) app where users submit questions and attach monetary rewards. 
          Other users compete to answer these questions correctly. If the question receives a correct answer, 
          the original poster awards the bounty. If not, the bounty is split among all answerers.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">🧩 Core Features</ThemedText>
        
        <ThemedText type="defaultSemiBold">✅ Question Submission</ThemedText>
        <ThemedText>
          • Text + media input: text, image, video, livestream{'\n'}
          • Optional reward in USD (asker decides amount){'\n'}
          • Optional time limit (e.g., 1hr, 6hr, 24hr){'\n'}
          • AI review:{'\n'}
          &nbsp;&nbsp;• Categorizes question into tags/topics{'\n'}
          &nbsp;&nbsp;• Checks for appropriate content
        </ThemedText>

        <ThemedText type="defaultSemiBold">✅ Notifications</ThemedText>
        <ThemedText>
          • Users can opt-in to tags{'\n'}
          • Notified when a new question matches interest
        </ThemedText>

        <ThemedText type="defaultSemiBold">✅ Answering a Question</ThemedText>
        <ThemedText>
          • Browse or get notified of questions{'\n'}
          • View supporting materials{'\n'}
          • Submit a detailed answer (must pass AI quality check)
        </ThemedText>

        <ThemedText type="defaultSemiBold">✅ Bounty Distribution</ThemedText>
        <ThemedText>
          • Asker chooses winner manually{'\n'}
          • If expired with no chosen answer, bounty split among all responders{'\n'}
          • Option for community to vote on best answer (TBD)
        </ThemedText>

        <ThemedText type="defaultSemiBold">✅ Question Feed</ThemedText>
        <ThemedText>
          • Global list of live/open questions{'\n'}
          • Sorted by:{'\n'}
          &nbsp;&nbsp;• Reward amount{'\n'}
          &nbsp;&nbsp;• Popularity (upvotes){'\n'}
          &nbsp;&nbsp;• Time left{'\n'}
          • Users can upvote/downvote questions
        </ThemedText>

        <ThemedText type="defaultSemiBold">✅ Reputation System</ThemedText>
        <ThemedText>
          • Points based on upvotes (like Reddit karma){'\n'}
          • Bounties and points increase trustworthiness{'\n'}
          • Optional tiers (e.g., Bronze/Silver/Gold)
        </ThemedText>

        <ThemedText type="defaultSemiBold">✅ Case-Like Handling</ThemedText>
        <ThemedText>
          • Questions are treated like "cases"{'\n'}
          • Can attach:{'\n'}
          &nbsp;&nbsp;• Images, documents, videos, livestreams{'\n'}
          &nbsp;&nbsp;• Updates (question edits, comments)
        </ThemedText>

        <ThemedText type="defaultSemiBold">✅ Live Interaction</ThemedText>
        <ThemedText>
          • Live video room (TBD tech){'\n'}
          • Viewers can comment, ask clarifying questions{'\n'}
          • Only allowed within bounty time window
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sectionContainer: {
    gap: 8,
    marginBottom: 24,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});