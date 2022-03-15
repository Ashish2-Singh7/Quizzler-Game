import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    TextLogo:{
       color:  "#66f0ea",
       fontSize: 40,
    },
    appName:{
       color:  "#66f0ea",
       fontSize: 40,
       fontFamily:'BlackOpsOne-Regular',
       marginVertical: 20,
       alignSelf: 'center'
    },
    playText:{
        fontSize: 30,
        fontFamily: "Poppins-MediumItalic",
        alignSelf:'center',
        color: "#fff"
    },  
    imageHome:{
        width: 400,
        height: 400,
        resizeMode: 'contain',
        alignSelf: 'flex-start',
        marginTop: 0
    },
    textPlayBottom:{
        alignSelf: "center",
        fontSize: 15,
        color: "#FFF"
    },
    polka:{
        position: 'absolute',
        height: "70%",
        width: "100%",
        resizeMode: 'contain'
    },
    appBack:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#1f1246"
    }
})


export default styles