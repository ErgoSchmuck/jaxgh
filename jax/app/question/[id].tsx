import { Image, StyleSheet, View, ScrollView, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function QuestionDetailScreen() {
  // Dummy question data
  const question = {
    id: 1,
    title: "How do I fix this React Native styling issue?",
    bountyCash: 2.50,
    bountyGreyMatter: 12,
    timeLeft: "3h 42m",
    category: "Programming",
    answers: 3,
    score: 12,
    content: `I'm having trouble with styling in my React Native app. The buttons aren't aligning properly on iOS devices, and the shadows look different on Android. Here's my current code:

\`\`\`javascript
<View style={styles.container}>
  <Button title="Submit" style={styles.button} />
</View>
\`\`\`

And my stylesheet:

\`\`\`javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#A1CEDC',
  }
});
\`\`\`

Can someone explain why this might be rendering differently across platforms and suggest a solution?`,
    attachments: [
      {
        type: 'image',
        source: require('@/assets/images/code-image.png') // Update path
      },
      {
        type: 'image',
        source: require('@/assets/images/UI screen.png') // Update path
      }
    ],
    comments: [
      {
        id: 1,
        author: "ReactNativeExpert",
        score: 8,
        content: "You need to use Platform-specific styling. Try Platform.select() for different styles per OS.",
        timestamp: "2 hours ago"
      },
      {
        id: 2,
        author: "MobileDev123",
        score: 5,
        content: "For shadows, use the elevation prop on Android and shadow props on iOS.",
        timestamp: "1 hour ago"
      },
      {
        id: 3,
        author: "UI_Specialist",
        score: 3,
        content: "Consider using a UI library like NativeBase for more consistent cross-platform components.",
        timestamp: "30 minutes ago"
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
      </ThemedView>

      {/* Question Content with light blue background */}
      <ThemedView style={styles.questionContent}>
        <View style={styles.bountyRow}>
          <ThemedText style={styles.cashBounty}>£{question.bountyCash.toFixed(2)}</ThemedText>
          <ThemedText style={styles.greyMatterBounty}>🧠 {question.bountyGreyMatter} GM</ThemedText>
        </View>
        <View style={styles.metaData}>
          <ThemedText>⏱️ {question.timeLeft} remaining</ThemedText>
          <ThemedText>📚 {question.category}</ThemedText>
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
              source={attachment.source} // Changed from uri to source
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
          placeholder="Type your detailed answer here..."
          placeholderTextColor="#999"
        />
        <View style={styles.answerActions}>
          <ThemedText style={styles.actionButton}>Attach Files</ThemedText>
          <ThemedText style={styles.submitButton}>Submit Answer</ThemedText>
        </View>
      </ThemedView>

      {/* Comments Section */}
      <ThemedView style={styles.commentsContainer}>
        <ThemedText type="subtitle">Top Comments ({question.comments.length})</ThemedText>

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
  questionContent: {
    backgroundColor: 'rgba(161, 206, 220, 0.15)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
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
  attachmentImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  answerInputContainer: {
    marginBottom: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
  },
  answerInput: {
    minHeight: 120,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginVertical: 12,
    textAlignVertical: 'top',
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
});