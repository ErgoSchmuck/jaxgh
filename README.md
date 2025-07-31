# jaxgh

change the margintop stuff to something more constant, manually putting in 20 everywhere is not a good idea

the focus should be put on exclusivity, every other question is greyed out and cannot be answered, only 10 questions are visible at a time.

const [documents, setDocuments] = useState<Array<{
    name: string;
    uri: string;
    type: string;
  }>>([]);
  const [verificationStatus, setVerificationStatus] = useState<'unverified' | 'pending' | 'verified'>('unverified');

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'image/*'],
        copyToCacheDirectory: true
      });

      if (result.canceled === false && result.assets && result.assets.length > 0) {
        const file = result.assets[0];
        const fileInfo = await FileSystem.getInfoAsync(file.uri);
        
        if (fileInfo.exists && fileInfo.size && fileInfo.size < 5000000) { // 5MB limit
          setDocuments([...documents, {
            name: file.name || 'unknown',
            uri: file.uri,
            type: file.mimeType || 'unknown'
          }]);
          setVerificationStatus('pending');
          Alert.alert('Document Uploaded', 'Your qualifications are under review');
        } else {
          Alert.alert('Error', 'File is too large (max 5MB)');
        }
      }
    } catch (err) {
      Alert.alert('Error', 'Failed to upload document');
      console.error(err);
    }
  };
*/