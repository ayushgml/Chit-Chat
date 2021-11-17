import { setStatusBarStyle } from 'expo-status-bar'
import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { Input } from 'react-native-elements/dist/input/Input'
import { auth } from '../firebase'

const RegisterScreen = ( { navigation } ) => {
    const [ name, setName ] = useState( "" );
    const [ email, setEmail ] = useState( "" ) ;
    const [ password, setPassword ] = useState( "" );
    const [ image, setImage ] = useState( "" );

    useLayoutEffect( () => {
        navigation.setOptions( {
            headerBackTitle: "Back to Login",
        })
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword( email, password )
        .then( authUser => {
            authUser.user.updateProfile( {
                displayName: name,
                photoURL: imageUrl || "https://cdn.business2community.com/wp-content/uploads/2014/08/My_profile-orange.png",
                
            })
        }).catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={ styles.container }>
            <StatusBar style="light"/>
            
            <View style={ styles.inputContainer }>
                <Text h3 style={{marginBottom: 50, marginLeft:20}}>
                    Create an account
                </Text>
                <Input
                    placeholder="Full Name"
                    autoFocus
                    type="text"
                    value={ name }
                    onChangeText={ text => setName( text ) }
                />

                <Input
                    placeholder="Email"
                    type="Email"
                    value={ email }
                    onChangeText={ text => setEmail( text ) }
                />

                <Input
                    placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={ password }
                    onChangeText={ text => setPassword( text ) }
                />

                <Input
                    placeholder="Profile picture URL (optional)"
                    type="text"
                    value={ image }
                    onChangeText={ text => setImage( text ) }
                    onSubmitEditing={register}
                />
            </View>

            <Button containerStyle={ styles.button } raised onPress={ register } title="Register" />
            <View style={ {height:100} }/>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
        marginBottom: 10
    },
    button: {
        width: 150,
    },
})
