import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { StC, Font } from "@styles";
import { currencyFloat, formatDate } from '@constants';

const CardTransaction = ({
    item,
}) => (
    <>
        <View style={styles.cardDate}>
            <Text style={[Font.label, {flex:1}]}>{formatDate(item.date)}</Text>
            <Text style={styles.amount}>{currencyFloat(item.total)}</Text>
        </View>
        {item.detail.map(val => (
            <View style={styles.cardTrans}>
                <View style={{flex:1}}>
                    <Text style={[Font.label]}>{val.name}</Text>
                    <Text style={[Font.desc]}>{val.note}</Text>
                </View>
                <Text style={styles.amount}>{currencyFloat(val.amount)}</Text>
            </View>
        ))}
    </>
    
);

export default CardTransaction;

const styles = StyleSheet.create({
    cardDate:{
        ... StC.flexR,
        ... StC.pv10_ph15,
        backgroundColor: '#F5F7F7'
    },
    cardTrans:{
        ... StC.flexR,
        ... StC.pv10_ph15,
    },
    amount:{
        ... Font.label, 
        ... Font.SECONDARY
    }
})
