import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Font, StC, Colors } from '@styles';
import { Icon } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { connect } from "react-redux";
import RBSheet from "react-native-raw-bottom-sheet";
import Entypo from 'react-native-vector-icons/Entypo';

function ModalSource ({ 
    open, 
    onPress, 
    data,
    value
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
                        <TouchableOpacity style={styles.card} activeOpacity={0.5} onPress={()=> onPress(item.name)}>
                            <Image source={item.icon} style={styles.icon}/>
                            <Text style={[Font.label, {flex:1}]}>{item.name}</Text>
                            {item.name == value ? <Icon as={Entypo} name={'check'} color={Colors.GREEN} size={RFValue(5)}/> : null}
                        </TouchableOpacity>
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
  
export default connect(mapStateToProps)(ModalSource);

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