import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import {
  RouteProp,
  CompositeNavigationProp,
  NavigationContainer,
} from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

type AppStackParamList = {
  Home: undefined;
  QRScanner: { uuid: string } | undefined;
};

type AppRouteProp<T extends keyof AppStackParamList> = RouteProp<
  AppStackParamList,
  T
>;

type AppNavigationProp<T extends keyof AppStackParamList> = StackNavigationProp<
  AppStackParamList,
  T
>;

type AppProps<T extends keyof AppStackParamList> = {
  route: AppRouteProp<T>;
  navigation: AppNavigationProp<T>;
};

const StackApp = createStackNavigator<AppStackParamList>();

function AppNavigator() {
  return (
    <StackApp.Navigator initialRouteName="Home" headerMode="none" mode="modal">
      <StackApp.Screen name="Home" component={PrimaryTabNavigator} />
      <StackApp.Screen name="QRScanner" component={QRScanner} />
    </StackApp.Navigator>
  );
}

export type PrimaryTabParamList = {
  Home: undefined;
  Profile: undefined;
};

export type PrimaryTabRouteProp<
  T extends keyof PrimaryTabParamList
> = RouteProp<PrimaryTabParamList, T>;

export type PrimaryTabNavigationProp<
  T extends keyof PrimaryTabParamList
> = CompositeNavigationProp<
  BottomTabNavigationProp<PrimaryTabParamList, T>,
  StackNavigationProp<AppStackParamList>
>;

export type PrimaryTabProps<T extends keyof PrimaryTabParamList> = {
  route: PrimaryTabRouteProp<T>;
  navigation: PrimaryTabNavigationProp<T>;
};

const Tab = createBottomTabNavigator<PrimaryTabParamList>();

function PrimaryTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}

export type ProfileStackParamList = {
  Profile: undefined;
};

export type ProfileRouteProp = RouteProp<ProfileStackParamList, "Profile">;

export type ProfileNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ProfileStackParamList, "Profile">,
  PrimaryTabNavigationProp<"Profile">
>;

export type ProfileProps = {
  route: ProfileRouteProp;
  navigation: ProfileNavigationProp;
};

const StackProfile = createStackNavigator<ProfileStackParamList>();

function ProfileNavigator() {
  return (
    <StackProfile.Navigator>
      <StackProfile.Screen name="Profile" component={Profile} />
    </StackProfile.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

function Home(props: PrimaryTabProps<"Home">) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="QRScanner"
        onPress={() => props.navigation.navigate("QRScanner")}
      />
    </View>
  );
}

function QRScanner(props: AppProps<"QRScanner">) {
  return (
    <View style={styles.container}>
      <Text>QRScranner</Text>
      <Button
        title="Profile"
        onPress={() => props.navigation.navigate("Profile")}
      />
    </View>
  );
}

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
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
