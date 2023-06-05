import React from 'react';
import { useState, useEffect } from 'react';
import posts from '../../assets/data/posts.json';
import { FlatList, Text, StyleSheet, Button, View } from 'react-native';
import FeedPost from '../components/FeedPost';
import { useNavigation } from '@react-navigation/native';


const MainView = () => {

  const navigation = useNavigation();

  const PostChatt = () => {
    navigation.navigate('PostViewScreen');
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chatter</Text>
        <View style={styles.postButton}>
          <Button title="Post" onPress={PostChatt} />
        </View>
      </View>

      <FlatList data={posts} renderItem={({ item }) => <FeedPost post={item} />} />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  postButton: {
    position: 'absolute',
    right: 10,
  },
});

export default MainView;
