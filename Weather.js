import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet,StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze:{
        iconName:"weather-hail",
        gradient: ["#304352","#d7d2cc"]
    },
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient: ["#485563","#29323c"]
    },
    Drizzle:{
        iconName:"weather-rainy",
        gradient: ["#5f2c82","#49a09d"]
    },
    Rain:{
        iconName:"weather-pouring",
        gradient: ["#005C97","##363795"]
    },
    Snow:{
        iconName:"weather-snowy",
        gradient: ["#70e1f5","#ffd194"]
    },
    Clear:{
        iconName:"weather-sunny",
        gradient: ["#FFB75E","#ED8F03"]
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient: ["#304352","#d7d2cc"]
    },
    Mist:{
        iconName:"weather-fog",
        gradient: ["#b993d6","#8ca6db"]
    },
    Dust:{
        iconName:"weather-fog",
        gradient: ["#b993d6","#8ca6db"]
    }
}

export default function Weather({temp,condition}){
    return (
    <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}>
        <StatusBar barStyle ="light-content"/>
        <View style = {styles.Uphalf}>
        <MaterialCommunityIcons size = {96} name = {weatherOptions[condition].iconName} color = "white"/>
        <Text style = {styles.temp}>{temp}•</Text>
        </View>
        <View style = {styles.Downhalf}>
        </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze","Mist","Dust"]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center" 
    },
    Uphalf:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    Downhalf:{
        flex:1
    },
    temp:{
        fontSize:42,
        color:"white"
    }
});