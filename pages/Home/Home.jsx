import { View } from "react-native";
import { s } from './Home.style';
import { Txt } from '../../components/Txt/Txt';
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";


export function Home() {
    return (
        <>
            <View style={s.meteo_basic}>
                <MeteoBasic />
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