import { View } from "react-native";
import { s } from './Home.style';
import { Txt } from '../../components/Txt/Txt';


export function Home() {
    return (
        <>
            <View style={s.meteo_basic}>
                <Txt>Hello</Txt>
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