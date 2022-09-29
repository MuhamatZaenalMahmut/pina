import React, { useEffect, useState } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { BaseContainer, AppBar, CardHeader, Filter, CardTransaction } from '@components';
import { connect } from "react-redux";
import styles from "./styles";

function DetailTransaction({ data, navigation }) {
    
    const [loading, setLoading]     = useState(false)

    useEffect(() => {

    }, [])

    return (
        <BaseContainer loading={loading}>
            <AppBar title={'Detail Transaksi'} navigation={navigation}/>
            <ScrollView style={{backgroundColor:'#F3F6F6'}}>
                <CardHeader/>
                <View style={styles.history}>
                    <Filter onPress={()=> null} searchUpdated={()=> alert('search')}/>
                    <FlatList
                        data={data.detail.history}
                        renderItem={(({ item }) => (
                            <CardTransaction item={item}/>
                        ))}
                    />
                </View> 
            </ScrollView>
        </BaseContainer>
    )
}

const mapStateToProps = function (state) {
    const { data } = state;
    return { data }
}
  
export default connect(mapStateToProps)(DetailTransaction);