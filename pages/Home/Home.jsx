import { View } from "react-native";
import { s } from './Home.style';
import { Txt } from '../../components/Txt/Txt';
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from '../../utils/meteo-utils';


export function Home({ weather }) {
    const currentWeather = weather.current_weather;
    const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode);

    return (
        <>
            <View style={s.meteo_basic}>
                <MeteoBasic
                    interpretation={currentInterpretation}
                    temperature={Math.round(currentWeather.temperature)}
                />
            </View>
            <View style={s.searchbar_container}>
                <Txt style={s.txt}>SearchBar</Txt>
            </View>
            <View style={s.meteo_advanced}>
                <Txt style={s.txt}>Advanced weather info</Txt>
            </View>
        </>
    );
}