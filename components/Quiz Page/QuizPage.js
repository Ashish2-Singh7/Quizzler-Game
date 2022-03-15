import { Animated, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './QuizjsStyle';
import data from '../../assets/data/QuizData';

const QuizPage = (props) => {
  const [DataNO, setDataNO] = useState(0)
  const [Class, setClass] = useState(null)
  const [Attempt, setAttempt] = useState(null)
  const [Score, setScore] = useState(0)
  const [ShowModal, setShowModal] = useState(false)

  const handleNext = () => {
    if (DataNO > 3) {
      setShowModal(true)
    }
    else {
      setDataNO(DataNO + 1),
        setClass(null)
      setAttempt(null)
    }
  }

  const checkAnswer = (e) => {
    setAttempt(true)
    if (e.opt == data[DataNO].correct_option) {
      setScore(Score + 1)
    }
    setClass(data[DataNO].correct_option)
  }


  return (
    <View style={styles.quizPage}>
      <View style={styles.ProgressBar}>
        <Text style={styles.textPoints}>Your Ponts {Score}</Text>
      </View>
      <Text style={styles.quesNo}>{`${data[DataNO].id + "/" + data[4].id}`}</Text>
      <Text style={styles.ques}>{data[DataNO].question}</Text>
      <View style={styles.options}>
        {data[DataNO].options.map((element) => {
          return <Pressable disabled={Attempt == true ? true : false} onPress={() => { checkAnswer(element) }} key={element.id} android_ripple={{ color: "#f0f" }} style={[styles.buttonOpt, Class == element.opt ? styles.buttonCorrect : Class == null ? '' : Class !== element.opt ? styles.wrongOption : '']} ><Text style={styles.opt} >{element.opt}</Text></Pressable>
        })}

      </View>
      <View style={styles.playBtns}>
        <Pressable onPress={handleNext} android_ripple={{ color: "#f0f" }} style={styles.playButtons}><Text style={styles.playBtnText}>Next</Text></Pressable>
      </View>

      <Modal
        transparent
        visible={ShowModal}
        animationType="fade"
      >
        <View style={styles.centeres_view}>
          <View style={styles.Warning_Modal}>
            <Text style={styles.Modal_Text}>Your Score is {Score}</Text>
            <Text style={styles.Modal_Text}>{Score>= 2 ? "Good 😊" : "Poor Score 😢"}</Text>
        <Pressable onPress={()=>{props.navigation.navigate('Home')}} android_ripple={{ color: "#f0f" }} style={styles.playButtons}><Text style={styles.playBtnText}>Home</Text></Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default QuizPage
