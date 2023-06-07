import {Text, TextInput, TouchableOpacity, View} from 'react-native'

import React from 'react';
import styles from './SaveCard-style';

const SaveCard = ({text,handleAdd,handleOnChange})=>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} 
                        value={text}
                        onChangeText={handleOnChange}
                         placeholder='Yapılacaklar...'
                         placeholderTextColor="#747778"/>
            <TouchableOpacity style={styles.saveBtn_container} onPress={handleAdd}>
                <Text style={styles.saveBtnTitle}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SaveCard;