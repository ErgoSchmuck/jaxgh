import { Image, StyleSheet, View, ScrollView, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function QuestionDetailScreen() {
  // Updated rash question data
  const question = {
    id: 1,
    username: "@exampleUser1",
    title: "What's causing this specific rash pattern on my forearm? (Photo included)",
    bountyCash: 0.85,
    bountyGreyMatter: 75,
    timeLeft: "0h 28m",
    category: "Dermatology",
    answers: 3,
    score: 18,
    content: `I noticed this unusual rash on my forearm 3 days ago. Here are the details:
    
• Circular pattern with raised edges
• Mild itching but no pain
• Not responding to hydrocortisone cream
• No known allergies or exposure to new products

The rash looks like this: [photo included]

Additional context:
- I haven't traveled recently
- No insect bites that I noticed
- No fever or other symptoms

Could this be ringworm, eczema, or something else? Should I see a doctor immediately?`,
    attachments: [
      {
        type: 'image',
        source: require('@/assets/images/arm view.jpg')
      },
      {
        type: 'image',
        source: require('@/assets/images/arm closeup picture.jpg')
      }
    ],
    comments: [
      {
        id: 1,
        author: "DrSkinExpert",
        score: 12,
        content: "This appears to be nummular eczema. Try using a moisturizer with ceramides and avoid scratching. If it spreads, see a dermatologist.",
        timestamp: "2 hours ago"
      },
      {
        id: 2,
        author: "MedStudent2023",
        score: 8,
        content: "Could be ringworm - look for slight scaling at the edges. An OTC antifungal cream might help if it is fungal.",
        timestamp: "1 hour ago"
      },
      {
        id: 3,
        author: "AllergyMom",
        score: 5,
        content: "Have you used any new detergents? The circular pattern makes me think of contact dermatitis.",
        timestamp: "45 minutes ago"
      }
    ]
  };

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
        <ThemedText type="title">{question.title}</ThemedText>
        <ThemedText style={styles.usernameText}>Asked by {question.username}</ThemedText>
      </ThemedView>

      {/* Question Content */}
      <ThemedView style={styles.questionContent}>
        <View style={styles.bountyRow}>
          <ThemedText style={styles.cashBounty}>£{question.bountyCash.toFixed(2)}</ThemedText>
          <ThemedText style={styles.greyMatterBounty}>🧠 {question.bountyGreyMatter} GM</ThemedText>
        </View>
        <View style={styles.metaData}>
          <ThemedText>⏱️ {question.timeLeft} remaining</ThemedText>
          <ThemedText>🏥 {question.category}</ThemedText>
          <ThemedText>💬 {question.answers} answers</ThemedText>
          <ThemedText>👍 {question.score} votes</ThemedText>
        </View>

        <ThemedView style={styles.questionBody}>
          <ThemedText>{question.content}</ThemedText>
        </ThemedView>

        {/* Attachments */}
        <View style={styles.attachmentsContainer}>
          {question.attachments.map((attachment, index) => (
            <Image
              key={index}
              source={attachment.source}
              style={styles.attachmentImage}
              resizeMode="contain"
            />
          ))}
        </View>
      </ThemedView>

      {/* Answer Input */}
      <ThemedView style={styles.answerInputContainer}>
        <ThemedText type="subtitle">Your Answer</ThemedText>
        <TextInput
          style={styles.answerInput}
          multiline
          placeholder="Provide your medical opinion or personal experience..."
          placeholderTextColor="#999"
        />
        <View style={styles.answerActions}>
          <ThemedText style={styles.actionButton}>Attach Photos</ThemedText>
          <ThemedText style={styles.submitButton}>Submit Answer</ThemedText>
        </View>
      </ThemedView>

      {/* Comments Section */}
      <ThemedView style={styles.commentsContainer}>
        <ThemedText type="subtitle">Community Responses ({question.comments.length})</ThemedText>

        {question.comments.sort((a, b) => b.score - a.score).map(comment => (
          <ThemedView key={comment.id} style={styles.commentCard}>
            <View style={styles.commentHeader}>
              <ThemedText style={styles.commentAuthor}>{comment.author}</ThemedText>
              <View style={styles.commentScore}>
                <Ionicons name="arrow-up" size={16} color="#4CAF50" />
                <ThemedText style={styles.scoreText}>{comment.score}</ThemedText>
              </View>
            </View>
            <ThemedText style={styles.commentContent}>{comment.content}</ThemedText>
            <ThemedText style={styles.commentTimestamp}>{comment.timestamp}</ThemedText>
          </ThemedView>
        ))}
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
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  questionBody: {
    marginVertical: 12,
  },
  bountyRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 8,
  },
  cashBounty: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  greyMatterBounty: {
    color: '#9C27B0',
    fontWeight: 'bold',
  },
  metaData: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 12,
  },
  attachmentsContainer: {
    marginTop: 16,
    gap: 8,
  },
  answerInputContainer: {
    marginBottom: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
  },
  answerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    color: '#1D3D47',
    padding: 8,
  },
  submitButton: {
    backgroundColor: '#1D3D47',
    color: 'white',
    padding: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  commentsContainer: {
    gap: 16,
  },
  commentCard: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  commentAuthor: {
    fontWeight: 'bold',
  },
  commentScore: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  scoreText: {
    color: '#4CAF50',
  },
  commentContent: {
    marginBottom: 8,
  },
  commentTimestamp: {
    fontSize: 12,
    color: '#666',
  },
  usernameText: {
    color: '#666',
    fontSize: 14,
    marginTop: 4
  },
  questionContent: {
    backgroundColor: 'rgba(161, 206, 220, 0.15)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  attachmentImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginVertical: 8
  },
  answerInput: {
    minHeight: 120,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginVertical: 12,
    textAlignVertical: 'top',
    backgroundColor: 'white'
  }
});