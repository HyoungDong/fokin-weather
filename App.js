import React from "react";
import Loading from "./Loading"
import { Alert } from "react-native";
import * as Location from "expo-location";

const API_KEY = "f4453a6f7504a6fe09837faa1f1ac0c7"; 

export default class extends React.Component{
  state ={
    isLoading:true,

  };
  getlocation = async() =>{
    try {
      await Location.requestPermissionsAsync();
      const { coords:{ latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.setState({isLoading:false});
      //Send to API and get weather
      //console.log(coords.latitude, coords.longitude);
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }

  }
  componentDidMount(){
    this.getlocation();
  }
  render(){
    const { isLoading } = this.state;
    return isLoading?<Loading/>:null;
  }
}


