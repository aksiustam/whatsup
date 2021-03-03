import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { Fontisto, MaterialCommunityIcons, Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';



const InputBox = () => {

    const [message, setMessage] = useState('');


    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />

                <TextInput placeholder={"Input here!"} style={styles.textInput} multiline value={message} onChangeText={setMessage} />
                <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
                {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} />}
            </View>
            <TouchableOpacity>
                <View style={styles.buttonContainer}>
                    {!message
                        ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
                        : <MaterialIcons name="send" size={28} color="white" />
                    }
                </View>
            </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
    },
    mainContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 25,
        marginRight: 10,
        flex: 1,
        alignItems: "center",
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
    },
    icon: {
        marginHorizontal: 6,
    },
    5: {

    }
})

export default InputBox;