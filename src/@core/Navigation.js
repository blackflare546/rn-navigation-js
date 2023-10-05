import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed, Notificaiton, Settings } from "../screens/BottomTabs";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "ios-settings-sharp";
          } else if (route.name === "Notification") {
            iconName = focused ? "ios-notifications" : "notifications-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <BottomTab.Screen name="Feed" component={Feed} />
      <BottomTab.Screen name="Notification" component={Notificaiton} />
      <BottomTab.Screen name="Settings" component={Settings} />
    </BottomTab.Navigator>
  );
}

export default Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
