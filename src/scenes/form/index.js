import React, { useEffect, useState, useRef } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { BaseContainer, AppBar, Tab, FormInput, FormPicker, FormCounter, ButtonFlex, ModalCategory, ModalSource, ProgressBar, ModalCalendar, ModalAlert } from '@components';
import { Icons } from '@assets';
import { StC } from "@styles";
import { Formik } from 'formik';
import * as yup from 'yup';
import sampleUtils from '@utils/SampleUtils';
import styles from "./styles";

function FormTransaction({ navigation }) {
    
    const [loading, setLoading]     = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [amount, setAmount]       = useState(0)
    const [category, setCategory]   = useState('')
    const [source, setSource]       = useState('')
    const refModalCategory          = useRef()
    const refModalSource            = useRef()
    const refModalCalendar          = useRef()
    const refModalAlert             = useRef()

    useEffect(() => {

    }, [])

    const validationSchema = yup.object().shape({
        merchant: yup
            .string()
            .required('Merchant tidak boleh kosong'),
    })

    const handleSave = async () => {
        refModalAlert.current.open()
    }

    return (
        <BaseContainer loading={loading}>
            <AppBar title={'Buat Transaksi'} navigation onBackCustom={()=> null}/>
            <Formik
                validationSchema={validationSchema}
                isValidating={true}
                initialValues={{ merchant: '' }}
                onSubmit={(value) => handleSave(value)}
            >
                {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
                    <>
                    <ScrollView>
                        <View style={StC.content}>
                            <Tab label={['Pengeluaran', 'Pemasukan']} isChecked={isChecked} onPress={()=> setIsChecked(!isChecked)}/>
                            <Image source={isChecked ? Icons.income : Icons.outcome} style={styles.wallet}/>
                            <FormPicker
                                label="Pilih Kategori"
                                placeholder="Pilih Kategori"
                                value={category}
                                onPress={()=> refModalCategory.current.open()}
                            />
                            <FormInput
                                label="Merchant"
                                placeholder="Ketik Merchant"
                                onChangeText={handleChange('merchant')}
                                value={values.merchant}
                                isError={errors.merchant && touched.merchant}
                                errorMessage={errors.merchant}
                                hide={isChecked}
                            />
                            <FormPicker
                                label={isChecked ? "Tujuan Pendapatan" : "Sumber Pengeluaran"}
                                placeholder={isChecked ? "Pilih Tujuan Pendapatan" : "Pilih Sumber Pengeluaran"}
                                value={source}
                                onPress={()=> refModalSource.current.open()}
                            />
                            <FormCounter
                                label={isChecked ? "Jumlah Pemasukan" : "Jumlah Pengeluaran"}
                                placeholder={'IDR 0'}
                                value={amount}
                                prefix="IDR "
                                separator="."
                                required
                                precision={0}
                                onChangeValue={(val)=> setAmount(val)}
                            />
                            <FormPicker
                                label="Tanggal"
                                placeholder="dd/mm/yy"
                                onPress={()=> refModalCalendar.current.open()}
                                date
                            />
                            <ProgressBar label={isChecked ? "Target Pendapatan Anda" : "Sisa Budget Food and Beverages"} value={[3250000, 4500000]} isChecked={isChecked}/>
                        </View>
                    </ScrollView>
                    <ButtonFlex title="Tambah" onPress={handleSubmit}/>
                    </>
                )}
            </Formik>
            <ModalCategory
                open={refModalCategory}
                isChecked={isChecked}
                value={category}
                onPress={(val)=> {refModalCategory.current.close(); setCategory(val)}}
            />
            <ModalSource
                open={refModalSource}
                value={source}
                onPress={(val)=> {refModalSource.current.close(); setSource(val)}}
            />
            <ModalCalendar
                open={refModalCalendar}
                onPress={()=> refModalCalendar.current.close()}
            />
            <ModalAlert
                open={refModalAlert}
                onPress={()=> {refModalAlert.current.close(); navigation.navigate('DetailTransaction')}}
            />
        </BaseContainer>
    )
}

export default FormTransaction;