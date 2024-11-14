import { FontFamily } from "@/constants/GlobalStyles";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View, ViewProps } from "react-native";
export type PlayerImgProps = ViewProps & {
  id: string;
  no: string;
  name: string;
  img: string;
};
export default function PlayerImg({ id, no, name, img }: PlayerImgProps) {
  return (
    <View
      style={{
        height: 150,
        width: 100,
        borderRadius: 8,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          router.navigate({
            pathname: "/pages/player/[playerId]",
            params: { playerId: id },
          });
        }}
      >
        <Image
          source={{ uri: img }}
          resizeMode="cover"
          width={100}
          height={120}
          style={{
            borderRadius: 8,
            position: "absolute",
            boxShadow: "0px 1px 10px 0px rgba(0,0,0,0.2)",
          }}
        />
        <Image
          source={require("../../assets/pages/player/ta.png")}
          resizeMode="cover"
          width={40}
          height={40}
          style={{ top: 80, right: 0, position: "absolute" }}
        />{" "}
        <Text
          style={{
            top: 100,
            right: 5,
            position: "absolute",
            fontFamily: FontFamily.russoOneRegular,
          }}
        >
          {no}
        </Text>
        <Text style={{ position: "absolute", top: 130, left: 30 }}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}
