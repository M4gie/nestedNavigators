import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp, CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

/* APP */

export type AppStackParamList = {
  Home: { screen: keyof PrimaryTabParamList };
  QRScanner: { uuid: string } | undefined;
};

export type AppRouteProp<T extends keyof AppStackParamList> = RouteProp<
  AppStackParamList,
  T
>;

export type AppNavigationProp<
  T extends keyof AppStackParamList
> = StackNavigationProp<AppStackParamList, T>;

export type AppProps<T extends keyof AppStackParamList> = {
  route: AppRouteProp<T>;
  navigation: AppNavigationProp<T>;
};

/* TAB */

export type PrimaryTabParamList = {
  Home: undefined;
  Profile: undefined;
  Contact: undefined;
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

/* PROFILE */

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

export type ContactStackParamList = {
  Contact: undefined;
};

/* CONTACT */

export type ContactRouteProp = RouteProp<ContactStackParamList, "Contact">;

export type ContactNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ContactStackParamList, "Contact">,
  PrimaryTabNavigationProp<"Contact">
>;

export type ContactProps = {
  route: ContactRouteProp;
  navigation: ContactNavigationProp;
};
