import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import TweetContent from "./TweetContent";

export default ({ tweet }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigate("TweetDetails", { tweet });
      }}
    >
      <TweetContent tweet={tweet} />
    </Pressable>
  );
};
