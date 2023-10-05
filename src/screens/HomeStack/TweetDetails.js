import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar, StyleSheet, View } from "react-native";

import { TweetContent } from "../../components";

export default function () {
  const navigation = useNavigation();

  const {
    params: { tweet },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: tweet.author.name,
    });
  }, []);

  return (
    <View testID="TweetDetailScreen" style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <TweetContent tweet={tweet} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
