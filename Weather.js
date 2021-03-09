import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions={
  Clear :{
    iconName : "weather-sunset",
    gradient : ["#EDE574","#E1F5C4"],
    title:"쾌청화창",
    text : "오늘은 날씨가 아주 맑아요!"
  },
  Mist:{
    iconName : "weather-hail",
    gradient : ["#91EAE4","#86A8E7","#7F7FD5"],
    title:"스며드는 촉촉함",
    text : "오늘은 촉촉한 날이네요!"
  },
  Thunderstorm:{
    iconName : "weather-partly-lightning",
    gradient : ["#b92b27","#1565C0"],
    title:"번쩍번쩍 천둥번개",
    text : "오늘은 천둥번개 각이에요!"
  },
  Drizzle:{
    iconName : "weather-rainy",
    gradient : ["#2ebf91","#8360c3"],
    title:"싸래기비",
    text : "오늘은 비가 조금씩 올 것 같아요!"
  },
  Rain:{
    iconName : "weather-pouring",
    gradient : ["#4286f4","#373B44"],
    title:"커피향이 그리운 비냄새",
    text : "오늘은 우산을 꼭 챙겨야 하는 날씨에요!"
  },
  Snow:{
    iconName : "weather-snowy",
    gradient : ["#2980B9","#6DD5FA"],
    text : "오늘은 펑펑 눈이 옵니다!"
  },
  Clouds:{
    iconName : "weather-cloudy",
    gradient : ["#4286f4","#373B44"],
    text : "오늘은 구름 친구들이 많이 보일거에요!"
  },
  Haze :{
    iconName : "weather-hazy",
    gradient : ["#FFAFBD","#ffc3a0"],
    title:"촉촉함",
    text : "오늘은 연무가 많이 끼는 날이에요!"
  },
  Smoke:{
    iconName : "weather-windy-variant",
    gradient : ["#00F260","#0575E6"],
    title:"앞을 조심해야하는 흐린 날",
    text : "오늘은 좀 흐리고 뿌연 날씨입니다!"
  },
  Dust:{
    iconName : "weather-windy",
    gradient : ["#F3904F","#3B4371"],
    title:"황사와 미세먼지 콜라보",
    text : "오늘은 황사와 미세먼지를 조심하세요!"
  },
  Fog:{
    iconName : "weather-fog",
    gradient : ["#C6FFDD","#FBD786","#f7797d"],
    title:"춤추는 안개의 날",
    text : "오늘은 안개가 많으니, 운전 조심하셔요!"
  },
  Sand:{
    iconName : "weather-cloudy-alert",
    gradient : ["#4286f4","#373B44"],
    title: "황사 조심",
    text : "오늘은 황사가 심하니, 마스크를 꼭 챙기셔요!"
  },
  Ash:{
    iconName : "weather-fog",
    gradient : ["#ffd89b","#19547b"],
    title: "먼지구덩이의 날",
    text : "오늘은 미세먼지 대박이니까, 마스크를 꼭 챙기셔요!"
  },
  Squall:{
    iconName : "weather-pouring",
    gradient : ["#fc00ff","#00dbde"],
    title: "시원한 소낙비",
    text : "소나기가 올 예정입니다!"
  },
  Tornado:{
    iconName : "weather-tornado",
    gradient : ["#1D2B64","#F8CDDA"],
    title: "우리나라에선 드문 토네이도",
    text : "토네이도가 올 예정이니 집에만 계셔요!"
  },
}


function Weather({temp, condition}){
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
        <View style={styles.halfContainer}>
          <StatusBar barStyle="light-content"/>
          <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={86} color="white" />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View  style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.text}>{weatherOptions[condition].text}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp:PropTypes.number.isRequired,
  condition:PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Clear", "Clouds", "Haze", "Smoke", "Dust", "Fog","Sand", "Ash", "Squall", "Tornado" ])
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  halfContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },  
  temp:{
    fontSize : 42,
    color: "white"
  },
  textContainer:{
    paddingHorizontal:40,
    alignItems:'flex-start',
    justifyContent: 'center',
    flex:1
  },
  title:{
    fontSize : 40,
    color: "white",
    marginBottom:20,
    marginLeft:-80,
    textAlign:'left'
  },
  text:{
    fontSize : 15,
    marginLeft:-70,
    color: "white",
    textAlign:'left'
  },
});

export default Weather;