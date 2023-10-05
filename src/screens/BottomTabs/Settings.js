import { Button, Text, View } from "react-native";
// import { signOut } from "firebase/auth";
// import { auth } from "../../firebaseConfig";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function () {
  return (
    <View>
      <Text>Settings</Text>
      <Button
        title="Sign Out"
        // onPress={async () => {
        //   await signOut(auth);
        //   await AsyncStorage.removeItem("@user");
        // }}
        onPress={() => {
          console.log("Settings");
        }}
      />
    </View>
  );
}
