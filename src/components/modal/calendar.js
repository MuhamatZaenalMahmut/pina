import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { ButtonFlex } from '@components';
import { Font, StC } from '@styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { connect } from "react-redux";
import { Calendar } from '@breeffy/react-native-calendar';
import RBSheet from "react-native-raw-bottom-sheet";

function ModalCalendar ({ 
    open, 
    onPress, 
}) {

    return (
        <RBSheet
            ref={open}
            height={RFValue(480)}
            openDuration={250}
            customStyles={{
                container: {
                    ... StC.modal
                }
            }}
        >
            <View style={styles.modal}>
                <Text style={[Font.title,{ padding: RFValue(15)}]}>Pilih Tanggal</Text>
                <Calendar
                    selectionMode="singleDay"
                    scrollMode="oneMonth"
                    monthsBefore={12}
                    monthsAfter={24}
                    onChange={()=> alert('7890')}
                />
                <View style={StC.mt10}/>
                <ButtonFlex title="Pilih" onPress={onPress}/>
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
    },
})