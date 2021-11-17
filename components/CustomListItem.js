import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = ({id, chatName, enterChat }) => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={ {
                    uri: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/30-512.png",
                    
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: "800"}}>
                    Ayush
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    Yoooo!! Wassup? DA hogya?                     5:42
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
