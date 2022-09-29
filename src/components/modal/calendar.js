import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Font, StC, Colors } from '@styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { connect } from "react-redux";
import RBSheet from "react-native-raw-bottom-sheet";
    
function ModalCalendar ({ 
    open, 
    onPress, 
    data,
    isChecked
}) {

    return (
        <RBSheet
            ref={open}
            height={RFValue(250)}
            openDuration={250}
            customStyles={{
                container: {
                    ... StC.centerPage
                }
            }}
        >
            <View style={styles.modal}>
                <Text style={[Font.title, StC.mb15]}>Pilih Sumber Pengeluaran</Text>
                <FlatList
                    data={data.source}
                    renderItem={(({ item }) => (
                        <View style={styles.card}>
                            <Image source={item.icon} style={styles.icon}/>
                            <Text style={Font.label}>{item.name}</Text>
                        </View>
                    ))} 
                />
            </View>
        </RBSheet>
    )
}

const mapStateToProps = function (state) {
        const { data  } = state;
        return { data }
    }
  
export default connect(mapStateToProps)(ModalCalendar);

const styles = StyleSheet.create({
    modal:{
        ... StC.wh100,
        padding: RFValue(15),
    },
    card:{
        ... StC.flexR,
        alignItems:'center',
        borderBottomWidth: RFValue(1),
        borderColor: Colors.LINE,
        paddingVertical: RFValue(8),
    },
    icon:{
        width: RFValue(25),
        height: RFValue(25),
        marginRight: RFValue(10)
    }
})