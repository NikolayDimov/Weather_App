import { s } from './App.style';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Home } from './pages/Home/Home';
import { Alert, ImageBackground } from 'react-native';
import backgroundImg from './assets/background/background.png';
import { useEffect, useState } from 'react';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MeteoApi } from './api/meteo';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Forecasts } from './pages/Forecasts/Forecasts';


const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    background: "transparent"
  }
};


export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require('./assets/fonts/Alata-Regular.ttf')
  });

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates);
      fetchCityByCoords(coordinates);
    }
  }, [coordinates]);

  async function fetchWeatherByCoords(coords) {
    const weatherResponse = await MeteoApi.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  }

  async function fetchCityByCoords(coords) {
    const cityResponse = await MeteoApi.fetchCityByCoords(coords);
    setCity(cityResponse);
  }

  async function fetchCoordsByCity(city) {
    try {
      const coordsResponse = await MeteoApi.fetchCoordsByCity(city);
      setCoordinates(coordsResponse);
    } catch (err) {
      Alert.alert("Oops!", err);
    }
  }

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });
    } else {
      setCoordinates({ lat: '48.85', lng: '2.35' });
    }
  };

  // console.log('coordinates', coordinates);
  // console.log('weather', weather);
  // console.log('isFontLoaded', isFontLoaded);

  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground imageStyle={s.img} style={s.img_background} source={backgroundImg}>
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            {isFontLoaded && weather &&
              <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='Home'
              >
                <Stack.Screen name="Home">
                  {() => <Home weather={weather} city={city} onSubmitSearch={fetchCoordsByCity} />}
                </Stack.Screen>
                <Stack.Screen name="Forecasts" component={Forecasts} />
              </Stack.Navigator>
            }
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}



