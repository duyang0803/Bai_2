import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';

export default function App() {
  const [users, setUsers] = useState([]);
  function Data(props) {
    // return props;
    return {
      id: props.id,
      name: props.name,
      email: props.email,
      gender: props.gender,
      status: props.status,
      n: props.gender == 'male' ? 'man' : 'woman',
      m: props.status == 'active' ? 'checksquareo' : 'closecircleo',
    };
  }
  var DATA = users.map(Data);

  useEffect(() => {
    fetch('https://gorest.co.in/public/v2/users')
      .then(res => res.json())
      .then(user => {
        // const User = res.json();
        setUsers(user);
      });
  }, []);

  function oneUser({item}) {
    return (
      <View style={styles.user}>
        <View style={styles.userContainer}>
          <Icons style={styles.icon} name="idcard" size={20} />
          <Text style={styles.text}>{item.id}</Text>
        </View>
        <View style={styles.userContainer}>
          <Icons style={styles.icon} name="user" size={20} />
          <Text style={styles.text}>{item.name}</Text>
        </View>
        <View style={styles.userContainer}>
          <Icons style={styles.icon} name="mail" size={20} />
          <Text style={styles.text}>{item.email}</Text>
        </View>

        <View style={styles.userContainer}>
          <Icons style={styles.icon} name={item.n} size={20} />
          <Text style={styles.text}>{item.gender}</Text>
        </View>
        <View style={styles.userContainer}>
          <Icons style={styles.icon} name={item.m} size={20} />
          <Text style={styles.text}>{item.status}</Text>
        </View>
      </View>
    );
  }
  const headerComponent = () => {
    return <Text style={styles.conten}>User</Text>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={headerComponent}
        data={DATA}
        renderItem={oneUser}
        ListEmptyComponent={<Text>Empty list</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000011',
    alignItems: 'center',
    justifyContent: 'center',
  },

  userContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  user: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    marginTop: 20,
  },
  text: {
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    color: '#d6ed05',
  },
  icon: {
    marginLeft: 10,
    marginVertical: 2,
    color: '#2fed05',
  },
  conten: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 10,
    color: '#ffa07a',
  },
});