import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Colors, Font, StC } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { MyView } from "@components";

const Tab = ({ 
    label, 
    isChecked,
    onPress, 
    hide, 
}) => (
    <MyView hide={hide} style={styles.card}>
        <TouchableOpacity activeOpacity={0.5} style={[styles.flex, !isChecked && {backgroundColor: Colors.SECONDARY}]} onPress={onPress}>
            <Text style={[styles.label, !isChecked && Font.WHITE]}>{label[0]}</Text>
        </TouchableOpacity>
        <View style={StC.mh05}/>
        <TouchableOpacity activeOpacity={0.5} style={[styles.flex, isChecked && {backgroundColor: Colors.GREEN}]} onPress={onPress}>
            <Text style={[styles.label, isChecked && Font.WHITE]}>{label[1]}</Text>
        </TouchableOpacity>
    </MyView>
)

export default Tab;

const styles = ({
    card:{
        ... StC.flexR,
        marginBottom: RFValue(15)
    },
    flex:{
        ... StC.centerPage,
        flex:1,
        backgroundColor: Colors.GRAY,
        borderRadius: RFValue(10),
        padding: RFValue(8),
    },
    label:{
        ... Font.InterMedium, 
        ... Font.F14,
        ... Font.BLACK,
        fontWeight: 'bold'
    }
})
