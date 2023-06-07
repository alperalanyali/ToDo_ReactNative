import {Text, View} from 'react-native';

import React from 'react';
import styles from './Header-style'

const Header = ({todosLength})=>{
    return(
        <View style={styles.container}>
          <Text style={styles.title}>Yapılacaklar</Text>  
          <Text style={styles.title}>{todosLength}</Text>
        </View>
    )
};
export default Header;