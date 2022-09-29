import { StyleSheet } from "react-native";
import { Colors, StC } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({

    Bold:{
        fontFamily:'Poppins-Bold.ttf'
    },
    BoldItalic:{
        fontFamily:'Poppins-BoldItalic.ttf'
    },
    ExtraLight:{
        fontFamily:'Poppins-ExtraLight.ttf'
    },
    Light:{
        fontFamily:'Poppins-Light.ttf'
    },
    Medium:{
        fontFamily:'Poppins-Medium.ttf'
    },
    Regular:{
        fontFamily:'Poppins-Regular.ttf'
    },
    SemiBold:{
        fontFamily:'Poppins-SemiBold.ttf'
    },

    F7:{
        fontSize: RFValue(7),
    },
    F8:{
        fontSize: RFValue(8),
    },
    F9:{
        fontSize: RFValue(9),
    },
    F10:{
        fontSize: RFValue(10),
    },
    F11:{
        fontSize: RFValue(11),
    },
    F12:{
        fontSize: RFValue(12),
    },
    F13:{
        fontSize: RFValue(13),
    },
    F14:{
        fontSize: RFValue(14),
    },
    F15:{
        fontSize: RFValue(15),
    },
    F16:{
        fontSize: RFValue(16),
    },
    F17:{
        fontSize: RFValue(17),
    },
    F18:{
        fontSize: RFValue(18),
    },
    F19:{
        fontSize: RFValue(19),
    },
    F20:{
        fontSize: RFValue(20),
    },
    F24:{
        fontSize: RFValue(24),
    },
    F25:{
        fontSize: RFValue(25),
    },
    F30:{
        fontSize: RFValue(30),
    },
    F35:{
        fontSize: RFValue(35),
    },
    F40:{
        fontSize: RFValue(40),
    },
    F50:{
        fontSize: RFValue(50),
    },

    WHITE:{
        color: Colors.WHITE
    },
    PRIMARY:{
        color: Colors.PRIMARY
    },
    SECONDARY:{
        color: Colors.SECONDARY
    },
    BLACK:{
        color: Colors.BLACK
    },
    GRAY:{
        color: Colors.GRAY
    },
    GREY:{
        color: Colors.GREY
    },
    GREEN:{
        color: Colors.GREEN
    },

    title:{
        fontFamily:'GothamRoundedBold_21016.ttf',
        fontSize: RFValue(16),
        color: Colors.BLACK,
        fontWeight: 'bold'
    },
    label:{
        marginBottom: RFValue(8),
        fontFamily:'GothamRoundedBold_21016.ttf',
        fontSize: RFValue(14),
        color: Colors.BLACK,
        fontWeight: 'bold'
    },
    value:{
        fontFamily:'GothamRoundedBold_21016.ttf',
        fontSize: RFValue(14),
        color: Colors.GREY,
        fontWeight: 'bold',
    },
    desc:{
        fontFamily:'GothamRoundedBold_21016.ttf',
        fontSize: RFValue(12),
        color: '#9E9E9E',
        fontWeight: 'bold',
    },
})
