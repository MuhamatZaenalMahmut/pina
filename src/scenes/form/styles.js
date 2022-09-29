import { StyleSheet } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import { StC, Font, Colors } from "@styles";

export default StyleSheet.create({
    wallet:{
        ... StC.mb20,
        width: RFValue(60),
        height: RFValue(60)
    }
})
