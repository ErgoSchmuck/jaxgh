import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/asq placeholder logo.png')}
          style={styles.reactLogo}
        />
      }>
      {/* Profile Section */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Profile & Settings</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">👤 Your Profile</ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Profile picture upload]
        </ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Name: John Doe (Expert Mechanic)]
        </ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Reputation: Gold Tier (1,240 Grey Matter)]
        </ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Success rate: 87% correct answers)]
        </ThemedText>
      </ThemedView>

      {/* Expertise Settings */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">🔧 Your Expertise</ThemedText>
        <ThemedText>
          Select tags you're comfortable answering (max 10):
        </ThemedText>
        <ThemedView style={styles.tagsContainer}>
          <ThemedText style={styles.selectedTag}>Car Mechanics ✓</ThemedText>
          <ThemedText style={styles.selectedTag}>Motorcycles ✓</ThemedText>
          <ThemedText style={styles.selectedTag}>Small Engines ✓</ThemedText>
          <ThemedText style={styles.unselectedTag}>+ Marine Engines</ThemedText>
          <ThemedText style={styles.unselectedTag}>+ Aviation</ThemedText>
          <ThemedText style={styles.unselectedTag}>+ HVAC Systems</ThemedText>
        </ThemedView>
        <ThemedText style={styles.placeholderText}>
          [Add custom expertise field]
        </ThemedText>
      </ThemedView>

      {/* Notification Preferences */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">🔔 Notification Settings</ThemedText>
        
        <ThemedText type="defaultSemiBold" style={{ marginTop: 20 }}>⏰ Preferred Notification Times</ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Available hours: 8:00 AM - 10:00 PM]
        </ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Days: Weekdays only]
        </ThemedText>
        
        <ThemedText type="defaultSemiBold" style={{ marginTop: 20 }}>📊 Answer Likelihood Threshold</ThemedText>
        <ThemedText>
          Only notify me about questions where my predicted success rate is:
        </ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Slider: 75% minimum confidence]
        </ThemedText>
        
        <ThemedText type="defaultSemiBold" style={{ marginTop: 20 }}>🧮 Daily Question Limit</ThemedText>
        <ThemedText>
          Maximum notifications to receive per day:
        </ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Number input: 5 questions/day]
        </ThemedText>
        
        <ThemedText type="defaultSemiBold" style={{ marginTop: 20 }}>💰 Bounty Threshold</ThemedText>
        <ThemedText>
          Minimum bounty amount to notify me about:
        </ThemedText>
        <ThemedText style={styles.placeholderText}>
          [£ Amount input: £15 minimum]
        </ThemedText>
      </ThemedView>

      {/* Account Settings */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">⚙️ Account Settings</ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Payment method: Visa ****4242]
        </ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Payout preferences: Weekly automatic]
        </ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Change password]
        </ThemedText>
        <ThemedText style={styles.placeholderText}>
          [Two-factor authentication: Enabled]
        </ThemedText>
      </ThemedView>

      {/* About Section*/}
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
        <ThemedText>
          • Question Submission with bounties{'\n'}
          • Smart notifications based on expertise{'\n'}
          • Answer quality requirements{'\n'}
          • Fair bounty distribution{'\n'}
          • Reputation system with tiers
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
    color: '#1D3D47',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginVertical: 8,
  },
  selectedTag: {
    padding: 8,
    backgroundColor: '#A1CEDC',
    borderRadius: 16,
    overflow: 'hidden',
    color: '#1D3D47',
  },
  unselectedTag: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#A1CEDC',
    borderRadius: 16,
    overflow: 'hidden',
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