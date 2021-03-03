import moment from 'moment';
import React from 'react'
import { Text, StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native'
import { ChatRoom } from '../../types';
import { useNavigation } from '@react-navigation/native'

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {

    const { chatRoom } = props;
    const user = chatRoom.users[1];

    const navigation = useNavigation();
    const onClick = () => {
        navigation.navigate('ChatRoom', {
            id: chatRoom.id,
            name: user.name,
        });
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>
                {/*<Text>{chatRoom.lastMessage.createdAt}</Text>*/}
                <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>

            </View>
        </TouchableWithoutFeedback>

    )
};

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 0.5,
    },
    leftContainer: {
        flexDirection: "row",
        flex: 1,
    },
    midContainer: {
        justifyContent: "space-around",

    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 10,
    },
    userName: {
        fontWeight: "bold",
        fontSize: 16,
    },
    lastMessage: {
        color: "gray",
        fontSize: 16,
    },
    time: {
        color: "gray",
        fontSize: 14,
    },
});

export default ChatListItem;