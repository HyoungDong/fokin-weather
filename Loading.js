import React from "react";
import { StyleSheet, Text, View } from 'react-native';


export default function Loading(){
    return <View style ={styles.container}>
        <Text>Getting the fucking weather</Text>
    </View>
}
const styles = StyleSheet.create({
    container:{
        flex :1
    }
});