import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AnswerScreen() {
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
        <ThemedText type="title">Answer Questions</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">🌟 Current Questions</ThemedText>
        <ThemedText>
          Browse open questions below or check your notifications for questions matching your interests.
        </ThemedText>
      </ThemedView>

      {/* Example Question 1 */}
      <ThemedView style={styles.questionContainer}>
        <ThemedText type="defaultSemiBold">💰 Bounty: £25</ThemedText>
        <ThemedText type="subtitle">How do I fix this React Native styling issue?</ThemedText>
        <ThemedText>
          • Time remaining: 3h 42m{'\n'}
          • Category: Programming{'\n'}
          • 3 answers submitted{'\n'}
          • Attachments: 1 code screenshot
        </ThemedText>
        <ThemedText style={styles.actionText}>
          Tap to view details and answer
        </ThemedText>
      </ThemedView>

      {/* Example Question 2 */}
      <ThemedView style={styles.questionContainer}>
        <ThemedText type="defaultSemiBold">💰 Bounty: £50</ThemedText>
        <ThemedText type="subtitle">What's the best approach for mobile authentication in 2024?</ThemedText>
        <ThemedText>
          • Time remaining: 12h 15m{'\n'}
          • Category: Security{'\n'}
          • 7 answers submitted{'\n'}
          • Attachments: None
        </ThemedText>
        <ThemedText style={styles.actionText}>
          Tap to view details and answer
        </ThemedText>
      </ThemedView>

      {/* Example Question 3 */}
      <ThemedView style={styles.questionContainer}>
        <ThemedText type="defaultSemiBold">💰 Bounty: £15</ThemedText>
        <ThemedText type="subtitle">Help identify this plant from my garden</ThemedText>
        <ThemedText>
          • Time remaining: 1h 05m{'\n'}
          • Category: Gardening{'\n'}
          • 0 answers submitted{'\n'}
          • Attachments: 3 photos
        </ThemedText>
        <ThemedText style={styles.actionText}>
          Tap to view details and answer
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">✅ Answering Guidelines</ThemedText>
        <ThemedText>
          • Provide detailed, well-researched answers{'\n'}
          • Include sources when possible{'\n'}
          • Format code properly{'\n'}
          • Be respectful and professional{'\n'}
          • Answers are reviewed for quality before submission
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">🏆 Bounty Distribution</ThemedText>
        <ThemedText>
          • Original poster selects the best answer{'\n'}
          • If no selection is made, bounty is split among all valid answers{'\n'}
          • Payments processed immediately after selection{'\n'}
          • 5% platform fee deducted from each bounty
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
  questionContainer: {
    gap: 8,
    marginBottom: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(161, 206, 220, 0.2)',
  },
  actionText: {
    marginTop: 8,
    fontStyle: 'italic',
    color: '#1D3D47',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});