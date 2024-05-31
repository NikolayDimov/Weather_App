import { View, Image } from "react-native";
import { s } from './MeteoBasic.style';
import { Txt } from "../Txt/Txt";

export function MeteoBasic({ }) {
    return (
        <>
            <View style={s.clock}>
                <Txt>Clock</Txt>
            </View>
            <View>
                <Txt>City</Txt>
            </View>
            <View style={s.interpretation}>
                <Txt style={s.interpretation_txt}>Sunny</Txt>
            </View>
            <View style={s.temperature_box}>
                <Txt style={s.temperature}>3</Txt>
                <Image style={s.image} />
            </View>
        </>
    );
}


