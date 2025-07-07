import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AskScreen() {
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
        <ThemedText type="title">Ask a Question</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">✍️ Question Details</ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Question title input field]
        </ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Detailed description text area]
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">📎 Attachments</ThemedText>
        <ThemedText>
          • Add images, documents, or videos{'\n'}
          • Record video directly in app{'\n'}
          • Start a livestream (optional)
        </ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Attachment upload area]
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">💰 Set Bounty</ThemedText>
        <ThemedText>
          • Minimum bounty: $5{'\n'}
          • Higher bounties get more attention{'\n'}
          • You only pay if you accept an answer
        </ThemedText>
        <ThemedText style={styles.placeholderText}>
          [$ Amount input field]
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">⏱️ Time Limit</ThemedText>
        <ThemedText>
          • Choose how long answers will be accepted:{'\n'}
          &nbsp;&nbsp;• 1 hour (urgent questions){'\n'}
          &nbsp;&nbsp;• 6 hours (standard){'\n'}
          &nbsp;&nbsp;• 24 hours (complex questions){'\n'}
          &nbsp;&nbsp;• Custom time (up to 7 days)
        </ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Time limit selector]
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">🏷️ Categories</ThemedText>
        <ThemedText>
          • AI will suggest categories{'\n'}
          • Helps reach the right experts{'\n'}
          • You can manually adjust
        </ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Category selector]
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText style={styles.placeholderButton}>
          [SUBMIT QUESTION BUTTON]
        </ThemedText>
        <ThemedText style={styles.footerText}>
          By submitting, you agree to our Terms and confirm this question follows Community Guidelines
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
  placeholderText: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#A1CEDC',
    borderRadius: 8,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    fontStyle: 'italic',
    color: '#1D3D47',
  },
  placeholderButton: {
    padding: 16,
    backgroundColor: '#A1CEDC',
    color: '#1D3D47',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 8,
    overflow: 'hidden',
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
    color: '#666',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});