import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Font, StC, Shadow } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';

const ButtonFlex = ({
    disabled,
    onPress,
    style,
    title,
    hide,
}) => {
    return (
        !hide &&
            <TouchableOpacity 
                activeOpacity={0.5} 
                onPress={disabled ? null : onPress} 
                style={[styles.btn, 
                    style,
                    disabled && {backgroundColor: Colors.GREY},
                ]}
            >
                <Text style={[
                    styles.label,
                ]}>{title}</Text>
            </TouchableOpacity>
        
    )
}

export default ButtonFlex

const styles = StyleSheet.create({
    btn:{
        ... StC.centerPage,
        marginHorizontal: RFValue(15),
        borderRadius: RFValue(10),
        marginVertical: RFValue(10),
        height: RFValue(40),
        backgroundColor: Colors.PRIMARY,
    },
    label:{
        ... Font.BLACK,
        ... Font.F14,
        fontWeight: 'bold',
    },
});
