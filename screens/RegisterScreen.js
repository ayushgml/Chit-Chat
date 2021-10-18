import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'

const RegisterScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Text>Register here!</Text>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    }
})
