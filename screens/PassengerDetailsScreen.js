import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from 'react-native';

export default function PassengerDetailsScreen({ route, navigation }) {
  const { from, to, date, train } = route.params; // Access train details here

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [berth, setBerth] = useState('');
  const [passengers, setPassengers] = useState([]);

  const addPassenger = () => {
    if (!name || !age || !gender || !berth) {
      alert('Please fill all fields');
      return;
    }

    const newPassenger = { id: Date.now().toString(), name, age, gender, berth };
    setPassengers([...passengers, newPassenger]);

    // Reset form
    setName('');
    setAge('');
    setGender('');
    setBerth('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Train Details:</Text>
      <Text>From: {from}</Text>
      <Text>To: {to}</Text>
      <Text>Date: {date}</Text>
      <Text>Train: {train}</Text>

      <Text style={styles.heading}>Add Passenger</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <TextInput
        style={styles.input}
        placeholder="Gender (M/F)"
        value={gender}
        onChangeText={setGender}
      />

      <TextInput
        style={styles.input}
        placeholder="Berth Preference (Lower, Middle, etc)"
        value={berth}
        onChangeText={setBerth}
      />

      <Button title="Add Passenger" onPress={addPassenger} />

      <Text style={styles.listHeading}>Passenger List:</Text>
      <FlatList
        data={passengers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.passengerItem}>
            <Text>{item.name} | {item.age} | {item.gender} | {item.berth}</Text>
          </View>
        )}
      />
      <Button
        title="Go to Summary"
        onPress={() => {
            if (passengers.length === 0) {
            alert('Please add at least one passenger');
            return;
            }

            navigation.navigate('Summary', {
            from,
            to,
            date,
            train,
            passengers,
            });
        }}
        />

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  listHeading: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  passengerItem: {
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 8,
    borderRadius: 5,
  },
});
