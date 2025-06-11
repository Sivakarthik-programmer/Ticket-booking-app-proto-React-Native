import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function SummaryScreen({ route }) {
  if (!route.params) {
    return (
      <View style={styles.container}>
        <Text>No data passed to Summary Screen.</Text>
      </View>
    );
  }

  const { from, to, date, train, passengers } = route.params;

  const getFormattedText = () => {
    let summary = `Tatkal Ticket Details:\n`;
    summary += `From: ${from}\nTo: ${to}\nDate: ${date}\nTrain: ${train}\n\n`;
    summary += `Passengers:\n`;
    passengers.forEach((p, index) => {
      summary += `${index + 1}. ${p.name}, ${p.age} yrs, ${p.gender}, ${p.berth} berth\n`;
    });
    return summary;
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(getFormattedText());
    Alert.alert('Copied', 'Ticket info copied to clipboard!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Summary</Text>

      <Text>From: {from}</Text>
      <Text>To: {to}</Text>
      <Text>Date: {date}</Text>
      <Text>Train: {train}</Text>

      <Text style={styles.subheading}>Passengers:</Text>
      {passengers.map((p, index) => (
        <Text key={index}>
          {index + 1}. {p.name}, {p.age}, {p.gender}, {p.berth}
        </Text>
      ))}

      <View style={{ marginTop: 20 }}>
        <Button title="Copy to Clipboard" onPress={copyToClipboard} />
        <Button
        title="Start New Booking"
        onPress={() => navigation.navigate('TrainDetails')}
        />

      </View>
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
    textAlign: 'center',
    marginBottom: 15,
  },
  subheading: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 8,
  },
});
