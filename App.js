import React from 'react';
import {Alert, TouchableHighlightBase} from 'react-native';
import Loading from './Loading';
import * as Location from "expo-location";
import axios from "axios";
import Weather from './Weather';

const apiKey="f146b3f8a635946326858ae6c141975d";

export default class extends React.Component {

  state = {
    isLoading : true,
    
  };

  getWeather = async(lat, long) => {
      const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
      //const {data} = await axios.get("http://api.openweathermap.org/data/2.5/weather?lat=37.4713218&lon=126.96890129999998&appid=f146b3f8a635946326858ae6c141975d");

      console.log( data )
      this.setState({isLoading:false, condition:data.weather[0].main, temp:data.main.temp })
  
  }

  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {
        coords:{ latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
     
    }catch(error){
      Alert.alert("지역을 찾을 수가 없네요!","다시 시도해 주세요");
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, condition, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
  }
}