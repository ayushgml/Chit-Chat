import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Image } from 'react-native-elements'
import { Input } from 'react-native-elements/dist/input/Input'


const LoginScreen = ({navigation}) => {
    const [ email, setEmail ] = useState( '' )
    const [ password, setPassword ] = useState( '' )
    const signIn = () => {
        
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light"/>
            <Image
                source={ {
                    uri: "https://www.freeiconspng.com/uploads/message-icon-png-17.png"
                } }
                style={ {
                    width:200, height:200
                }}
            />
            <View style={ styles.inputContainer }>
                {/* Input field */}
                <Input
                    placeholder="Email"
                    autoFocus
                    type="Email"
                    value={ email }
                    onChangeText={ ( text ) => setEmail( text ) }
                />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={ password }
                    onChangeText={ ( text ) => setPassword( text ) }
                />
            </View>

            <Button containerStyle={ styles.button } onPress={signIn} title="Login" />
            <Button onPress={() => navigation.navigate('Register')} containerStyle={ styles.button } type="outline" title="Register" />
            <View style={ {height:100} }/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create( {
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    }
})
