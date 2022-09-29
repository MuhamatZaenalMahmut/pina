import { StyleSheet } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import { StC } from "@styles";

export default StyleSheet.create({
    wallet:{
        ... StC.mt10,
        ... StC.mb10,
        width: RFValue(60),
        height: RFValue(60)
    }
})
