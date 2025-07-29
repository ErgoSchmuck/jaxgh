import { Image, StyleSheet, View, Pressable } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AnswerScreen() {
  const router = useRouter();

  // Current active question (now generic rash question)
  const activeQuestion = {
    id: 1,
    username: "@HealthConcerned",
    title: "What's causing this specific rash pattern on my forearm? (Photo included)",
    bountyCash: 0.85,
    bountyGreyMatter: 75,
    timeLeft: "28m",
    category: "Health",
    contentPreview: "Appeared 3 days ago, itches but doesn't hurt. Not responding to hydrocortisone.",
    timeInSpotlight: "28m remaining"
  };

  // Queued questions (technical question moved here)
  const queuedQuestions = [
    {
      id: 2,
      username: "@DevUser123",
      title: "How do I implement secure biometric authentication in React Native?",
      position: 1,
      bountyCash: 5.00,
      bountyGreyMatter: 45,
      timeUntilActive: "~32m",
      upvotes: 12,
      description: "Need help implementing Face ID/Touch ID that works across iOS and Android..."
    },
    {
      id: 3,
      title: "Interpreting these ambiguous blood test results from my recent physical",
      position: 2,
      bountyCash: 1.20,
      bountyGreyMatter: 95,
      timeUntilActive: "~45m",
      upvotes: 23,
      description: "Doctor said 'probably fine' but I want second opinions on these borderline values"
    },
    {
      id: 4,
      title: "Is this antique vase authentic? Here's multiple detailed photos",
      position: 3,
      bountyCash: 1.50,
      bountyGreyMatter: 110,
      timeUntilActive: "~1h",
      upvotes: 31,
      description: "Inherited from grandmother, markings suggest Ming Dynasty but need expert eyes"
    },
    {
      id: 5,
      title: "Why does my homemade sourdough have this unusual crumb structure?",
      position: 4,
      bountyCash: 0.55,
      bountyGreyMatter: 65,
      timeUntilActive: "~1h15m",
      upvotes: 14,
      description: "Followed Tartine recipe exactly but getting these dense pockets with tunnels"
    },
    {
      id: 6,
      title: "Legal interpretation of this oddly worded contract clause",
      position: 5,
      bountyCash: 2.50,
      bountyGreyMatter: 150,
      timeUntilActive: "~1h30m",
      upvotes: 42,
      description: "Paragraph 4.3 seems to contradict Appendix B - need legal perspective"
    },
    {
      id: 7,
      title: "Identifying this obscure 80s song from a poor quality recording",
      position: 6,
      bountyCash: 0.70,
      bountyGreyMatter: 80,
      timeUntilActive: "~1h45m",
      upvotes: 27,
      description: "Heard in a Berlin club in 1987, Shazam can't identify, lyrics are unclear"
    },
    {
      id: 8,
      title: "Why is my cat behaving this specific way after moving homes?",
      position: 7,
      bountyCash: 0.60,
      bountyGreyMatter: 55,
      timeUntilActive: "~2h",
      upvotes: 19,
      description: "Hiding in bathtub only at night, normal during day - not typical for her"
    },
    {
      id: 9,
      title: "Authenticating these supposed WWII love letters found in attic",
      position: 8,
      bountyCash: 0.18,
      bountyGreyMatter: 125,
      timeUntilActive: "~2h15m",
      upvotes: 36,
      description: "Paper and ink seem period-appropriate but need handwriting analysis"
    },
    {
      id: 10,
      title: "Diagnosing this intermittent engine noise in my classic car",
      position: 9,
      bountyCash: 2.20,
      bountyGreyMatter: 140,
      timeUntilActive: "~2h30m",
      upvotes: 39,
      description: "Only happens between 2200-2500 RPM when warm, mechanics can't replicate"
    },
    {
      id: 11,
      title: "Interpreting the meaning behind my child's unusual drawings",
      position: 10,
      bountyCash: 0.90,
      bountyGreyMatter: 85,
      timeUntilActive: "~2h45m",
      upvotes: 21,
      description: "Consistently drawing figures with 3 eyes for past month, teacher concerned"
    }
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/asq placeholder logo.png')}
          style={styles.reactLogo}
        />
      }>

      {/* Priority Question Section */}
      <ThemedView style={styles.priorityContainer}>
        <ThemedView style={styles.priorityBanner}>
          <ThemedText type="title" style={styles.priorityText}>@HealthConcerned is Asqing the World...</ThemedText>
        </ThemedView>

        <ThemedView style={styles.activeQuestionContainer}>
          <View style={styles.questionHeader}>
            <ThemedText type="title" style={styles.questionTitle}>{activeQuestion.title}</ThemedText>
          </View>

          <View style={styles.bountyRow}>
            <ThemedText style={styles.cashBounty}>£{activeQuestion.bountyCash.toFixed(2)}</ThemedText>
            <ThemedText style={styles.greyMatterBounty}>🧠 {activeQuestion.bountyGreyMatter} GM</ThemedText>
            <ThemedText style={styles.timerText}>{activeQuestion.timeInSpotlight}</ThemedText>
          </View>

          <ThemedText style={styles.contentPreview}>
            {activeQuestion.contentPreview}
          </ThemedText>

          <Pressable
            onPress={() => router.push(`/question/${activeQuestion.id}`)}
            style={({ pressed }) => [
              styles.answerButton,
              { opacity: pressed ? 0.8 : 1 }
            ]}
          >
            <ThemedText style={styles.buttonText}>ANSWER NOW</ThemedText>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </Pressable>
        </ThemedView>
      </ThemedView>
      {/* Queued Questions Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">QUEUED QUESTIONS</ThemedText>
        <ThemedText style={styles.queueSubtitle}>
          These questions will become available in order. Draft answers now!
        </ThemedText>
      </ThemedView>

      {queuedQuestions.map((question) => (
        <ThemedView key={question.id} style={styles.questionContainer}>
          <Pressable
            onPress={() => router.push(`/question/${question.id}`)}
            style={({ pressed }) => [
              styles.pressableContent,
              { opacity: pressed ? 0.6 : 1 }
            ]}
          >
            <View style={styles.questionContent}>
              <View style={styles.bountyRow}>
                <ThemedText style={styles.cashBounty}>£{question.bountyCash.toFixed(2)}</ThemedText>
                <ThemedText style={styles.greyMatterBounty}>🧠 {question.bountyGreyMatter} GM</ThemedText>
                <ThemedText style={styles.timeText}>~{question.timeUntilActive}</ThemedText>
              </View>
              <ThemedText type="subtitle">{question.title}</ThemedText>
              <ThemedText style={styles.questionDescription}>{question.description}</ThemedText>
              <ThemedText style={styles.actionText}>Tap to view details and draft answer</ThemedText>
            </View>
          </Pressable>
          <View style={styles.votingContainer}>
            <Ionicons name="arrow-up-circle" size={28} color="#757575" />
            <ThemedText style={styles.score}>{question.upvotes}</ThemedText>
            <Ionicons name="arrow-down-circle" size={28} color="#757575" />
          </View>
        </ThemedView>
      ))}

      {/* How It Works Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">⚙️ HOW PRIORITY QUEUE WORKS</ThemedText>
        <ThemedText>
          • Your question gets exclusive attention for its time slot{'\n'}
          • Higher bounties get priority placement{'\n'}
          • Grey Matter upvotes boost queue position{'\n'}
          • Draft answers can be prepared in advance
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  priorityContainer: {
    borderRadius: 12,
    marginBottom: 24,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderLeftWidth: 4,
    borderLeftColor: '#1D3D47',
    overflow: 'hidden'
  },
  priorityBanner: {
    backgroundColor: 'rgba(29, 61, 71, 0.1)',
    padding: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(29, 61, 71, 0.1)'
  },
  priorityText: {
    color: '#1D3D47',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1
  },
  questionTitle: {
    flex: 1,
    marginRight: 8,
  },
  activeQuestionContainer: {
    padding: 20,
    backgroundColor: 'transparent'
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  bountyRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 8,
    flexWrap: 'wrap'
  },
  cashBounty: {
    color: '#4CAF50',
    fontWeight: 'bold'
  },
  greyMatterBounty: {
    color: '#9C27B0',
    fontWeight: 'bold'
  },
  timerText: {
    color: '#1D3D47',
    fontWeight: 'bold',
    marginLeft: 'auto'
  },
  contentPreview: {
    marginVertical: 12,
    lineHeight: 22,
    color: '#333'
  },
  answerButton: {
    backgroundColor: '#1D3D47',
    padding: 14,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
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
  questionDescription: {
    color: '#666',
    fontSize: 14,
    marginVertical: 6,
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
  pressableContent: {
    flex: 1,
  },
  queueSubtitle: {
    color: '#666',
    marginBottom: 12,
    fontSize: 14
  },
  timeText: {
    color: '#666',
    fontStyle: 'italic',
    marginLeft: 'auto'
  }
});