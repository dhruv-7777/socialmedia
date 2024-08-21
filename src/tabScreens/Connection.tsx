import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

type FriendRequest = {
  id: string;
  name: string;
  mutualFriends: number;
  profileImage: string;
  requestTime: string;
  status: 'pending' | 'sent';
};

const initialFriendRequests: FriendRequest[] = [
  {
    id: '1',
    name: 'Lorie',
    mutualFriends: 80,
    profileImage: 'https://example.com/lorie.jpg',
    requestTime: '35w',
    status: 'pending',
  },
  {
    id: '2',
    name: 'Thel',
    mutualFriends: 0,
    profileImage: 'https://example.com/thel.jpg',
    requestTime: '1y',
    status: 'pending',
  },
  {
    id: '3',
    name: 'Abeguil',
    mutualFriends: 20,
    profileImage: 'https://example.com/abeguil.jpg',
    requestTime: '2y',
    status: 'pending',
  },
  {
    id: '4',
    name: 'Kthrift',
    mutualFriends: 2,
    profileImage: 'https://example.com/kthrift.jpg',
    requestTime: '5w',
    status: 'pending',
  },
  {
    id: '5',
    name: 'Ramesh',
    mutualFriends: 2,
    profileImage: 'https://example.com/kthrift.jpg',
    requestTime: '5w',
    status: 'pending',
  },
];

const Connection = () => {
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>(initialFriendRequests);

  const handleConnect = (id: string) => {
    setFriendRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === id ? { ...request, status: 'sent' } : request
      )
    );
  };

  const handleDelete = (id: string) => {
    setFriendRequests(prevRequests => prevRequests.filter(request => request.id !== id));
  };
  
  const handleRevert = (id: string) => {
    setFriendRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === id ? { ...request, status: 'pending' } : request
      )
    );
  };

  const renderFriendRequest = ({ item }: { item: FriendRequest }) => (
    <View style={styles.friendRequestContainer}>
      <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
      <View style={styles.requestDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.mutualFriends}>{item.mutualFriends} mutual friends</Text>
        {/* <Text style={styles.requestTime}>{item.requestTime}</Text> */}
      </View>
      <View style={styles.actions}>
      {item.status === 'pending' ? (
          <>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => handleConnect(item.id)}
            >
              <Text style={styles.confirmText}>Connect</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity onPress={() => handleRevert(item.id)}>
            <Text style={styles.sentRequestText}>Sent Request</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerText}>Suggestions</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={friendRequests}
        renderItem={renderFriendRequest}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
  },
  friendRequestsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  friendRequestsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#007bff',
  },
  friendRequestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  requestDetails: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  mutualFriends: {
    color: '#666',
  },
  requestTime: {
    color: '#999',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#007bff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  confirmText: {
    color: '#fff',
  },
  deleteButton: {
    backgroundColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteText: {
    color: '#333',
  },
  sentRequestText: {
    color: '#007bff',
    fontWeight: '600',
  },
});

export default Connection;
