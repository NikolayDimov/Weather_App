import React from "react";
import { Text, useWindowDimensions } from "react-native";
import { s } from './Txt.style';

export function Txt({ children, style, ...restProps }) {
    const { height } = useWindowDimensions();
    console.log(height);

    const fontSize = style?.fontSize || s.txt.fontSize;
    const scaledFontSize = fontSize * (height / 800);


    return (
        <Text style={[s.txt, style,
        { fontSize: scaledFontSize }
        ]} {...restProps}>
            {children}
        </Text>
    );
}
