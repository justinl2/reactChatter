import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const FeedPost = ({ post }) => {

    return (
    <SafeAreaView style={styles.container}>


        <View style={styles.header}>

        <Text style={styles.user}> {post.user} </Text>
        <Text style={styles.time}> {post.time} </Text>

        </View>

        <Text style={styles.message}> {post.message} </Text>


        <StatusBar/>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    width: '100%',

  },
  header: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  user: {
   marginRight: 'auto',
  },
  time: {
    marginLeft: 'auto',
  },
  message: {
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },

});

export default FeedPost;


