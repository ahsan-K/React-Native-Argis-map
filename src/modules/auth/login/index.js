import React from 'react';
import { View, Button } from "react-native";
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import services from '../../../services';


export default function ({ navigation }) {
  const data = useSelector((state) => state.loginSlices)
  const dispatch = useDispatch()
    return (
      <View style={styles.container}>
        <Button
          onPress={()=>dispatch(services.Login())}
          title="Login"
        />
      </View>
    );
}
  