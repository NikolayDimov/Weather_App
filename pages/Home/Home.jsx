import { View } from "react-native";
import { s } from './Home.style';
import { Txt } from '../../components/Txt/Txt';
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from '../../utils/meteo-utils';
import { MeteoAdvanced } from "../../components/MeteoAdvanced/MeteoAdvanced";


export function Home({ weather, city }) {
    const currentWeather = weather.current_weather;
    const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode);
    const windspeed = currentWeather.windspeed;
    const sunrise = weather.daily.sunrise[0].split('T')[1];
    const suntset = weather.daily.sunset[0].split('T')[1];

    return (
        <>
            <View style={s.meteo_basic}>
                <MeteoBasic
                    interpretation={currentInterpretation}
                    temperature={Math.round(currentWeather.temperature)}
                    city={city}
                />
            </View>
            <View style={s.searchbar_container}>
                <Txt style={s.txt}>SearchBar</Txt>
            </View>
            <View style={s.meteo_advanced}>
                <MeteoAdvanced sunrise={sunrise} sunset={suntset} windspeed={windspeed} />
            </View>
        </>
    );
}