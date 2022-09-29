import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Colors, Font, StC } from "@styles";
import { RFValue } from 'react-native-responsive-fontsize';
import { Icons } from '@assets';
import SearchInput from 'react-native-search-filter';


const Filter = ({
    placeholder,
    searchUpdated,
    onPress,
    isFilter
}) => {
    return (
        <View style={styles.cardSearch}>
            <View style={styles.search}>
                <SearchInput
                    onChangeText={(term) => searchUpdated(term)}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.GRAY_SOFT}
                    style={styles.searchContent}
                />
            </View>
            <TouchableOpacity style={[styles.filter, {marginRight: RFValue(10)}]} onPress={()=> onPress(0)} activeOpacity={0.9}>
                <Image source={Icons.sort} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filter} onPress={()=> onPress(1)} activeOpacity={0.9}>
                <Image source={Icons.filter} style={styles.icon}/>
            </TouchableOpacity>
        </View> 
    )
}

export default Filter

const styles = StyleSheet.create({
    cardSearch:{
        ... StC.flexR,
        margin: RFValue(15),
    },
    search:{
        flex: 1,
        height: RFValue(40),
        borderWidth: RFValue(1),
        borderRadius: RFValue(12),
        borderColor: Colors.LINE,
        marginRight: RFValue(10),
        paddingHorizontal: RFValue(10),
    },
    searchContent:{
        ... Font.F13,
        height: RFValue(40),
    },
    filter:{
        ... StC.centerPage,
        width: RFValue(40),
        height: RFValue(40),
        borderWidth: RFValue(1),
        borderRadius: RFValue(12),
        borderColor: Colors.LINE,
    },
    icon:{
        width: RFValue(20),
        height: RFValue(20)
    }
});
