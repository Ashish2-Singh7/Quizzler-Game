import { Image, ImageBackground, Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from './IndexStyle'
import ButtonsGlobal from '../buttonsGlobal/ButtonsGlobal'

const Index = ({ navigation }) => {
    return (
        <View style={styles.appBack}>
            <View style={styles.containerHome}>
                <ImageBackground source={require('../Images/DottedBG.png')} style={styles.polka} />
                <Image source={require('../Images/brainstorm.png')} style={styles.imageHome} />
                <Text style={styles.appName}>Quizzles</Text>
                <Text style={styles.playText}>Let's Play</Text>
                <Text style={styles.textPlayBottom}>Rate or send feedback at Whatsapp  ❤ </Text>
                <ButtonsGlobal content="About" contetnTop="Play Now" backgroundColor="#6949fc" navigation={navigation}/>
            </View>
        </View>
    )
}

export default Index
