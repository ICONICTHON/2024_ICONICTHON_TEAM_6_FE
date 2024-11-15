import { ThemedView } from "@/components/ThemedView";
import { Text, View } from "react-native";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";

export default function Welcome() {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <ThemedView
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: 20,
        backgroundColor: "#FFFFFF",
      }}
    ></ThemedView>
  );
}
