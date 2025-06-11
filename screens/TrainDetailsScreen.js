import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function TrainDetailsScreen({ navigation }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [train, setTrain] = useState('');

  const handleNext = () => {
    if (!from || !to || !date || !train) {
      alert('Please fill all fields');
      return;
    }

    navigation.navigate('PassengerDetails', {
        from,
        to,
        date,
        train,
    });

  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Train Details</Text>

      <TextInput
        style={styles.input}
        placeholder="From Station"
        value={from}
        onChangeText={setFrom}
      />

      <TextInput
        style={styles.input}
        placeholder="To Station"
        value={to}
        onChangeText={setTo}
      />

      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />

      <TextInput
        style={styles.input}
        placeholder="Train Number or Name"
        value={train}
        onChangeText={setTrain}
      />

      <Button title="Next" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
});
