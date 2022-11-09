import * as React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AuthContext = React.createContext();
const Tab = createMaterialBottomTabNavigator;

function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.input}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
      </View>    
    </SafeAreaView>
  );
}

function SignUpScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [state, setState] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.container}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.text}>Your password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder="123 Street Rd"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput style={styles.input}
          placeholder="Victoria"
          value={state}
          onChangeText={setState}
          secureTextEntry
        />
        <TextInput style={styles.input}
          placeholder="0912345678"
          value={phone}
          onChangeText={setPhone}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
        <Button title="Register" onPress={() => signIn({ email, password, address, state, phone })} 
        />
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
}

function LogoutScreen() {
  const { signOut } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Logout"
            onPress={() => signOut()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>HOME PAGE</Text>
    </SafeAreaView>
  );
}

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//       <Icons name="idcard" size={20} ></Icons>
//     </View>
//   );
// }

// function NVG (){
//   const [users, setUsers] = useState([]);
//   function Data(props) {
//     // return props;
//     return {
//       id: props.id,
//       name: props.name,
//       email: props.email,
//       gender: props.gender,
//       status: props.status,
//       n: props.gender == 'male' ? 'man' : 'woman',
//       m: props.status == 'active' ? 'checksquareo' : 'closecircleo',
//     };
//   }
//   var DATA = users.map(Data);

//   useEffect(() => {
//     fetch('https://gorest.co.in/public/v2/users')
//       .then(res => res.json())
//       .then(user => {
//         // const User = res.json();
//         setUsers(user);
//       });
//   }, []);

  // function oneUser({item}) {
  //   return (
  //     <View style={styles.user}>
  //       <View style={styles.userContainer}>
  //         <Icons style={styles.icon} name="idcard" size={20} />
  //         <Text style={styles.text}>{item.id}</Text>
  //       </View>
  //       <View style={styles.userContainer}>
  //         <Icons style={styles.icon} name="user" size={20} />
  //         <Text style={styles.text}>{item.name}</Text>
  //       </View>
  //       <View style={styles.userContainer}>
  //         <Icons style={styles.icon} name="mail" size={20} />
  //         <Text style={styles.text}>{item.email}</Text>
  //       </View>

  //       <View style={styles.userContainer}>
  //         <Icons style={styles.icon} name={item.n} size={20} />
  //         <Text style={styles.text}>{item.gender}</Text>
  //       </View>
  //       <View style={styles.userContainer}>
  //         <Icons style={styles.icon} name={item.m} size={20} />
  //         <Text style={styles.text}>{item.status}</Text>
  //       </View>
  //     </View>
  //   );
  // }
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         // ListHeaderComponent={headerComponent}
//         data={DATA}
//         renderItem={oneUser}
//         ListEmptyComponent={<Text>Empty list</Text>}
//       />
//     </SafeAreaView>
//   );
// }


export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <NavigationContainer >
      <AuthContext.Provider value={authContext}>
        <Tab.Navigator initialRouteName="Feed">
          {state.userToken == null ? (
            <>
              <Tab.Screen name="Sign In" component={SignInScreen} options={{
                headerTitle: 'Sign In',
                tabBarOptions: {
                  showIcon: false
                },
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#fa0000',
                }, headerTitleStyle: {
                  color: 'white',
                },
                tabBarIcon: ({ color, size }) => (

                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),

              }} />
              <Tab.Screen name="Sign Up" component={SignUpScreen} options={{
                headerTitle: 'Sign Up',
                tabBarOptions: {
                  showIcon: false
                },
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#fa0000',
                }, headerTitleStyle: {
                  color: 'white',
                },
                tabBarIcon: ({ color, size }) => (

                  <IconOcticons name="person-add" color={color} size={26} />
                ),
              }} />
            </>
          ) : (
            <>
            <Tab.Screen 
              name="Home" component={HomeScreen} 
              options={{
                tabBarLabel: 'home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
              />
            <Tab.Screen 
              name="Logout" component={LogoutScreen} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="logout" color={color} size={26} />
                ),
              }}
            />
            </>
          )}
        </Tab.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
   
  );
}

// export default function App() {
//   const headerComponent = () => {
//     return <Text style={styles.conten}>User</Text>;
//   };
//   return (
//     // <SafeAreaView style={styles.container}>
//     //   <FlatList
//     //     ListHeaderComponent={headerComponent}
//     //     data={DATA}
//     //     renderItem={oneUser}
//     //     ListEmptyComponent={<Text>Empty list</Text>}
//     //   />
//     // </SafeAreaView>
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={NVG} />
//         {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
//         <Tab.Screen name="Sigin" component={SignIn} />
//         <Tab.Screen name="Signup" component={SignUp} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
