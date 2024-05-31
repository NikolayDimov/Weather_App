import { View } from "react-native";
import { s } from './Home.style';
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from '../../utils/meteo-utils';
import { MeteoAdvanced } from "../../components/MeteoAdvanced/MeteoAdvanced";
import { SearchBar } from "../../components/SearchBar/SearchBar";


export function Home({ weather, city, onSubmitSearch }) {
    const currentWeather = weather.current_weather;
    const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode);
    const windspeed = currentWeather.windspeed;
    const sunrise = weather.daily.sunrise[0].split('T')[1];
    const suntset = weather.daily.sunset[0].split('T')[1];

    return (
        <>
            <View style={s.meteo_basic}>
                <MeteoBasic
                    dailyWeather={weather.daily}
                    interpretation={currentInterpretation}
                    temperature={Math.round(currentWeather.temperature)}
                    city={city}
                />
            </View>
            <View style={s.searchbar_container}>
                <SearchBar onSubmit={onSubmitSearch} />
            </View>
            <View style={s.meteo_advanced}>
                <MeteoAdvanced sunrise={sunrise} sunset={suntset} windspeed={windspeed} />
            </View>
        </>
    );
};