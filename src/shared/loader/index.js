import React, {useState} from "react";
import {
    StyleSheet,
    Image,
    ActivityIndicator,
    View
} from 'react-native';
import { HEIGHT, WIDTH } from "../../utils/constants";
export default ()=>{

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/ArcGIS.png')}/>
            <ActivityIndicator size={"large"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        zIndex:30000,
        width:WIDTH,
        height:HEIGHT
    },
    image:{
        width:300,
        height:300
    }
})