import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QuizPage from '../Quiz Page/QuizPage'
import styles from './PlaypageStyle'
import { useState } from 'react';

const PlayPage = ( { navigation }) => {
    return (
        <View style={styles.quizPage}>
            <View>
                <QuizPage navigation={navigation}/>
            </View>
        </View>
    )
}

export default PlayPage
