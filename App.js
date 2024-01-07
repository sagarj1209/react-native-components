import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./src/screens/HomeScreen";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import AppText from "./src/components/AppText";
import AppButton from "./src/components/AppButton";
import Card from "./src/components/Card";
import AppTextInput from "./src/components/AppTextInput";
import AppSwitch from "./src/components/AppSwitch";
import AppPicker from "./src/components/AppPicker";
import LoginScreen from "./src/screens/LoginScreen";
import ImageInput from "./src/components/ImageInput";
import ImageInputList from "./src/components/ImageInputList";
import useLocation from "./src/hooks/useLocation";

const Categories = [
  { label: "Mobile", value: 1 },
  { label: "Tablet", value: 2 },
  { label: "Laptop", value: 3 },
];

const Tweets = ({ navigation }) => (
  <View>
    <Text>Tweets</Text>
    <AppButton
      title="View tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: "1" })}
    />
  </View>
);
const TweetDetails = ({ route }) => (
  <View>
    <Text>TweetDetails {route.params.id} </Text>
  </View>
);

const Account = () => (
  <View>
    <Text>Account</Text>
  </View>
);

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerStyle: { backgroundColor: "tomato" } }}
  >
    <Stack.Screen name="Tweets" component={Tweets} options={{}} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({
        title: route.params.id,
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
        // headerShown: false,
      })}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "tomato",
      tabBarActiveTintColor: "white",
      tabBarInactiveBackgroundColor: "grey",
      tabBarInactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  // const [category, setCategory] = useState(Categories[0]);
  const location = useLocation(); //custom hook

  const [imageUris, setImageUris] = useState([]);
  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <>
      {/* <LoginScreen /> */}
      {/* <AppButton title="Select Image" onPress={selectImage} /> */}
      {/* <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}
      {/* <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd} //(uri)=> handleAdd(uri)
        onRemoveImage={handleRemove} //(uri)=> handleRemove(uri)
      />
      <AppButton title="get location" onPress={() => console.log(location)} /> */}

      <NavigationContainer>
        {/* <StackNavigator /> */}
        <TabNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    resizeMode: "contain",
  },
});

//------------------------------------------------------------
{
  /* <View style={styles.container}> */
}
{
  /* <HomeScreen /> */
}
{
  /* <ListingDetailsScreen /> */
}
{
  /* <AppText>React Native</AppText>   */
}
{
  /* <Card
        title="Laptop for Sale"
        subTitle="50000 Rs"
        image={require("./src/assets/photo.jpg")}
      /> */
}
{
  /* <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={Categories}
        placeholder="Categories"
        icon="apps"
      />
      <AppTextInput placeholder="Email" icon="email" />
      <AppSwitch />
      <AppButton title="Login" onPress={() => console.log("Tapped")} /> */
}
{
  /* </View>; */
}
//---------------------------------------------------------------------
