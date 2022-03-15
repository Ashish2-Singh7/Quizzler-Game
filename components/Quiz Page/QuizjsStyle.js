import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    quizPage:{
        flex: 1,
        backgroundColor: "#121212",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    textPoints:{
        fontSize: 20,
        color: "#FFF"
    },
    quesNo:{
        fontSize: 20,
        alignSelf: "flex-start",
        marginLeft: 20
    },
    ques:{
        fontSize: 30,
        alignSelf: "flex-start",
        marginLeft: 20,
        marginRight: 20,
    },
    opt:{
        fontSize: 25,
        alignSelf: "flex-start",
        paddingLeft: 10,
        color: "#fff"
    },
    buttonOpt:{
        // backgroundColor: "#30ebbd",
        backgroundColor: "transparent",
        marginVertical: 10,
        height: 70,
        justifyContent: "center",
        width: 350,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#3a61d4"
    },  
    ProgressBar:{
        marginVertical: 10
    },
    options:{
        marginVertical: 50,
    },
    playBtnText:{
        color: "#FFF",
        alignSelf: 'center',
        fontSize: 20
    },    
    playButtons:{
        backgroundColor: "#6945ff",
        margin: 10,
        alignSelf: "center",
        height: 70,
        width: 130,
        padding: 20,
        borderRadius: 10
    },
    playBtns:{
        width: "80%",
        height: "10%",
        position: 'relative',
        flexDirection: 'row-reverse',
        marginTop: 50
    },
    buttonCorrect:{
        borderWidth: 3,
        borderColor: "#02d436",
        backgroundColor: "#005c1a"
    },
    wrongOption:{
        borderWidth: 3,
        borderColor: "#d40202",
        backgroundColor: "#7d0000"
    },

    Warning_Modal: {
        width: 300,
        height: 300,
        position: "relative",
        backgroundColor: "#fff",
        justifyContent: "center",
        borderRadius: 23
    },
    centeres_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.7)",
    },
    Modal_Text: {
        alignSelf: 'center',
        fontSize: 25,
        padding: 10,
        color: "#121212"
    },
    Modal_Message:{
        position: 'absolute',
        top: 0,
        backgroundColor: "crimson",
        width: "100%",
        padding: "1rem",
        borderTopLeftRadius: 23,
        borderTopRightRadius: 23
    },
    Modal_Message_text:{
        alignSelf: 'center',
        fontSize: 18,
        color: "white"
    },
    Modal_Button:{
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        padding: 13,
        backgroundColor: "#03bafc",
        borderRadius: 7,
        width: "25%",
        textAlign: 'center'
    }
})

export default styles