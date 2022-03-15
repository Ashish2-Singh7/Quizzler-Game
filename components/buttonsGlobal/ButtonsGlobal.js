import { Pressable, Text, View } from 'react-native'
import React from 'react';
import styles from './btn';
import { useState } from 'react';

const ButtonsGlobal = (props) => {
    const [ckPress, setCkPress] = useState(true)
    const [ckPress1, setCkPress1] = useState(false)

    const handlePlay = ()=>{
        props.navigation.navigate('quizPage')
        setCkPress(true)
        setCkPress1(false)
    }
    const handleAbout = ()=>{
        setCkPress1(true)
        setCkPress(false)
    }

    return (
        <View>
            <View style={styles.viewBtns}>
                <Pressable hitSlop={{top: 10, left: 10, right: 10, bottom: 10 }} android_ripple={{color: "#00f"}} onPress={handlePlay} style={[styles.btnHomeToPlay, {backgroundColor: `${!ckPress ? "transparent" : props.backgroundColor }`, borderColor: `${!ckPress ? props.backgroundColor :  props.backgroundColor }`,}]}><Text style={styles.btnTextPlay}>{props.contetnTop}</Text></Pressable>
                <Pressable hitSlop={{top: 10, left: 10, right: 10, bottom: 10 }} android_ripple={{color: "#00f"}} onPress={handleAbout} style={[styles.btnHomeToPlay, {backgroundColor: `${!ckPress1 ? "transparent" : props.backgroundColor }`, borderColor: `${!ckPress1 ? props.backgroundColor :  props.backgroundColor }`,}]}><Text style={styles.btnTextPlay}>{props.content}</Text></Pressable>
            </View>
        </View>
    )
}

export default ButtonsGlobal
