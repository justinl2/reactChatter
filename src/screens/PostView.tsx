import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const PostView = () => {

    const navigation = useNavigation();

    const [message, setMessage] = useState("");

    const onSubmit = () => {
        console.warn(message);
        setMessage("");

        navigation.goBack();
    };

    return(
        <View style={styles.container}>
            <TextInput value={message} onChangeText={setMessage} placeholder='What is on your mind?' multiline/>
            <Button title="Post"  onPress={onSubmit}/>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingTop: 10,
        marginBottom: 10,
    },
})

export default PostView;