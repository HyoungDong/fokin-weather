import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet,StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { thistle } from "color-name";

const weatherOptions = {
    Haze:{
        iconName:"weather-hail",
        gradient: ["#304352","#d7d2cc"],
        title:"It's a Hazy Day",
        subtitle:"Cars will be hazy in the distance"
    },
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient: ["#485563","#29323c"],
        title:"Zeus is annoyed",
        subtitle:"Zeus used magic to create a thunderstorm"
    },
    Drizzle:{
        iconName:"weather-rainy",
        gradient: ["#5f2c82","#49a09d"],
        title:"There will be a drizzle",
        subtitle:"Overcast skies will persist with drizzle and patches of fog developing"
    },
    Rain:{
        iconName:"weather-pouring",
        gradient: ["#005C97","##363795"],
        title:"Outbreaks of rain are expected in the afternoon",
        subtitle:"Dont forget to take your umbrella"
    },
    Snow:{
        iconName:"weather-snowy",
        gradient: ["#70e1f5","#ffd194"],
        title:"What a white day",
        subtitle:"Dont take your umbrella and feel the snow"
    },
    Clear:{
        iconName:"weather-sunny",
        gradient: ["#FFB75E","#ED8F03"],
        title:"Today will always be clean like your life",
        subtitle:"Don't wear your jaket, the Sun will take it"
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient: ["#304352","#d7d2cc"],
        title:"There will be lot of candyfloss in the sky",
        subtitle:"Don't eat it. You'll have an upset stomach."
    },
    Mist:{
        iconName:"weather-fog",
        gradient: ["#b993d6","#8ca6db"],
        title:"There will be lot of candyfloss in the sky",
        subtitle:"Don't eat it. You'll have an upset stomach."
    },
    Dust:{
        iconName:"weather-fog",
        gradient: ["#b993d6","#8ca6db"],
        title:"There will be lot of candyfloss in the sky",
        subtitle:"Don't eat it. You'll have an upset stomach."
    }
}

export default function Weather({temp,condition,name}){
    return (
    <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}>
        <StatusBar barStyle ="light-content"/>
        <View style = {styles.Uphalf}>
        <Text style ={styles.country}>{name}</Text>
        <MaterialCommunityIcons size = {96} name = {weatherOptions[condition].iconName} color = "white"/>
        <Text style = {styles.temp}>{temp}•</Text>
        </View>
        <View style = {{...styles.Downhalf,...styles.textcontainer}}>
        <Text style = {styles.title}>{weatherOptions[condition].title}</Text>
        <Text style = {styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:42, 
        color:"white"
    },
    title:{
        color:"white",
        fontSize:44,
        fontWeight:"300",
        marginBottom:15,
        textAlign:"left"
    },
    subtitle:{
        fontWeight:"600",
        color:"white",
        fontSize:24,
        textAlign:"left"
    },
    textcontainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    },
    country:{
        fontSize:50,
        color:"white",
        marginBottom:15
    }
});