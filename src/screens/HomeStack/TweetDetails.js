import React from "react";
import { useRoute } from "@react-navigation/native";
import { StatusBar, StyleSheet, View } from "react-native";

import { TweetContent } from "../../components";

export default () => {
  const {
    params: { tweet },
  } = useRoute();
  return (
    <View testID="TweetDetailScreen" style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <TweetContent tweet={tweet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
