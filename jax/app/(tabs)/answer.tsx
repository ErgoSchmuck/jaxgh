import { Image, StyleSheet, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

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

      {/* Example Question 1 - Cash Only */}
      <ThemedView style={styles.questionContainer}>
        <View style={styles.questionContent}>
          <View style={styles.bountyRow}>
            <ThemedText style={styles.cashBounty}>£2.50</ThemedText>
            <ThemedText style={styles.greyMatterBounty}>🧠 12 GM</ThemedText>
          </View>          <ThemedText type="subtitle">How do I fix this React Native styling issue?</ThemedText>
          <ThemedText>
            • Time remaining: 3h 42m{'\n'}
            • Category: Programming{'\n'}
            • 3 answers submitted{'\n'}
            • Attachments: 1 code screenshot
          </ThemedText>
          <ThemedText style={styles.actionText}>
            Tap to view details and answer
          </ThemedText>
        </View>
        <View style={styles.votingContainer}>
          <Ionicons name="arrow-up-circle" size={28} color="#757575" />
          <ThemedText style={styles.score}>12</ThemedText>
          <Ionicons name="arrow-down-circle" size={28} color="#757575" />
        </View>
      </ThemedView>

      {/* Example Question 2 - Grey Matter Only */}
      <ThemedView style={styles.questionContainer}>
        <View style={styles.questionContent}>
          <View style={styles.bountyRow}>
            <ThemedText style={styles.cashBounty}>£0.50</ThemedText>
            <ThemedText style={styles.greyMatterBounty}>🧠 74 GM</ThemedText>
          </View>          <ThemedText type="subtitle">What's the best approach for mobile authentication in 2025?</ThemedText>
          <ThemedText>
            • Time remaining: 12h 15m{'\n'}
            • Category: Security{'\n'}
            • 7 answers submitted{'\n'}
            • Attachments: None
          </ThemedText>
          <ThemedText style={styles.actionText}>
            Tap to view details and answer
          </ThemedText>
        </View>
        <View style={styles.votingContainer}>
          <Ionicons name="arrow-up-circle" size={28} color="#757575" />
          <ThemedText style={styles.score}>24</ThemedText>
          <Ionicons name="arrow-down-circle" size={28} color="#757575" />
        </View>
      </ThemedView>

      {/* Example Question 3 - Both Currencies */}
      <ThemedView style={styles.questionContainer}>
        <View style={styles.questionContent}>
          <View style={styles.bountyRow}>
            <ThemedText style={styles.cashBounty}>£0.00</ThemedText>
            <ThemedText style={styles.greyMatterBounty}>🧠 80 GM</ThemedText>
          </View>
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
        </View>
        <View style={styles.votingContainer}>
          <Ionicons name="arrow-up-circle" size={28} color="#757575" />
          <ThemedText style={styles.score}>5</ThemedText>
          <Ionicons name="arrow-down-circle" size={28} color="#757575" />
        </View>
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

      {/* Rest of your content... */}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(161, 206, 220, 0.2)',
  },
  questionContent: {
    flex: 1,
  },
  bountyRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 5,
  },
  cashBounty: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  greyMatterBounty: {
    color: '#9C27B0',
    fontWeight: 'bold',
  },
  votingContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    fontWeight: 'bold',
    marginVertical: 4,
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