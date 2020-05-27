import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, Link } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  AppStackParamList,
  PrimaryTabParamList,
  ProfileStackParamList,
  ContactStackParamList,
} from "./types";

const StackApp = createStackNavigator<AppStackParamList>();

function AppNavigator() {
  return (
    <StackApp.Navigator initialRouteName="Home" headerMode="none" mode="modal">
      <StackApp.Screen name="Home" component={PrimaryTabNavigator} />
      <StackApp.Screen name="QRScanner" component={QRScanner} />
    </StackApp.Navigator>
  );
}

const Tab = createBottomTabNavigator<PrimaryTabParamList>();

function PrimaryTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
      <Tab.Screen name="Contact" component={ContactNavigator} />
    </Tab.Navigator>
  );
}

const StackProfile = createStackNavigator<ProfileStackParamList>();

function ProfileNavigator() {
  return (
    <StackProfile.Navigator>
      <StackProfile.Screen name="Profile" component={Profile} />
    </StackProfile.Navigator>
  );
}
const StackContact = createStackNavigator<ContactStackParamList>();

function ContactNavigator() {
  return (
    <StackContact.Navigator>
      <StackContact.Screen name="Contact" component={Contact} />
    </StackContact.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer
      linking={{
        enabled: true,
        prefixes: [],
        config: {
          QRScanner: {
            path: "qr-scanner",
          },
          Home: {
            screens: {
              Home: "",
              Profile: {
                screens: {
                  Profile: "profile",
                },
              },
              Contact: {
                screens: {
                  Contact: "contact",
                },
              },
            },
          },
        },
      }}
    >
      <AppNavigator />
    </NavigationContainer>
  );
}

function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link to="/qr-scanner">Go to QRScanner</Link>
    </View>
  );
}

function QRScanner() {
  return (
    <View style={styles.container}>
      <Text>QRScranner</Text>
      <Link to="/profile">Go to Profile</Link>
    </View>
  );
}

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Link to="/qr-scanner">Go to QRScanner</Link>
    </View>
  );
}

function Contact() {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
      <Link to="/qr-scanner">Go to QRScanner</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
