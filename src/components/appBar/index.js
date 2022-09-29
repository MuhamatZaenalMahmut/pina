import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from "native-base";
import { StC, Font, Colors } from "@styles";
import { RFValue } from "react-native-responsive-fontsize";
import Feather from 'react-native-vector-icons/Feather';

const AppBar = ({
    title,
    navigation
}) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.5} style={styles.btnBack}>
                <Icon as={Feather} name={'chevron-left'} color={Colors.BLACK} size={RFValue(5)}/>
            </TouchableOpacity>
            <View style={[StC.centerPage, {flex:1, height:'100%'}]}>
                <Text style={Font.title} numberOfLines={1}>{title}</Text>
            </View>
            <View style={styles.btnBack}/>
        </View>
    )
}

export default AppBar;

const styles = ({
    header:{
        ... StC.flexR,
        ... StC.centerPage,
        height: RFValue(45),
    },
    btnBack:{
        ... StC.centerPage,
        width: RFValue(40)
    }
})