import React, { useState } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './ToDoCard-styles'

const ToDoCard = ({todo})=>{
    
    const [doneFlag,setDoneFlag] = useState(true);
    function updateDoneFlag(){
        setDoneFlag(!doneFlag);
    }
    return(
        <TouchableOpacity style={styles.container} onPress={updateDoneFlag}>
            <Text style={doneFlag ? styles.title : styles.title2}>{todo}</Text>
        </TouchableOpacity>
    )
}

export default ToDoCard;