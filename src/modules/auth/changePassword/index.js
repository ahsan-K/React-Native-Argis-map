import React from 'react';
import { View, Button } from "react-native";
import styles from './styles';

export default function ({ navigation }) {
    return (
      <View style={styles.container}>
        <Button
          title="Change Password"
        />
      </View>
    );
}
  