import React from "react";
import { Text, View } from "react-native";
import { Font, StC, Colors } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { MyView } from "@components";
import { numberFloat } from "@constants";

const ProgressBar = ({
    hide,
    label,
    value,
    isChecked
}) => {

    let percentage = value[0] / value[1] * 100

    return (

        <MyView style={styles.cardInput} hide={hide}>
            {label ? <Text style={Font.label}>{label}</Text> : null}
            <View style={styles.borderPicker}>
                <View style={[styles.progress, {width: percentage + `%`, backgroundColor: isChecked ? Colors.GREEN : Colors.PINK}]}/>
                <Text style={styles.value}>{numberFloat(value[0])}/{numberFloat(value[1])}</Text>
            </View>
        </MyView>
    )
}

export default ProgressBar;

const styles = ({
    cardInput:{
        ... StC.mb15,
        flex: 1,
    },
    borderPicker:{
        ... StC.centerPage,
        height: RFValue(30),
        flex: 1,
        backgroundColor: Colors.GREY,
        borderRadius: RFValue(10)
    },
    value:{
        ... Font.F12,
        ... Font.WHITE,
        fontWeight: 'bold',
    },
    progress:{
        height: RFValue(30),
        borderRadius: RFValue(10),
        position: 'absolute',
        left:0
    }
})
