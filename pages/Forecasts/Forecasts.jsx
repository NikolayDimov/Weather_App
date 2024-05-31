import { s } from "./Forecasts.style.js";
import { Txt } from "../../components/Txt/Txt.jsx";
import { useRoute } from "@react-navigation/native";

export function Forecasts({ }) {
    const route = useRoute();
    const { params } = route;
    console.log('params', params);

    return <Txt>Forecasts</Txt>;
}