import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import { Input } from 'react-native-elements/dist/input/Input'


const LoginScreen = () => {
    return (
        <View>
            <StatusBar style="light"/>
            <Image
                source={ {
                    uri: "https://www.freeiconspng.com/uploads/message-icon-png-17.png"
                } }
                style={ {
                    width:200, height:200
                }}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="Email" />
                <Input placeholder="Password" secureTextEntry type="password"/>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create( {
    inputContainer: {

    }
})
