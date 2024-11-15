import {
  Image,
  StyleSheet,
  Platform,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import BoardList from "@/components/community/BoardList";
import { Color, FontFamily, FontSize, Padding } from "@/constants/GlobalStyles";
import { router } from "expo-router";
import HotPostList from "@/components/community/HotPostList";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ backgroundColor: "#FAFAFA", height: 800, flexGrow: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.wrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.text12, styles.textTypo]}>게시판</Text>
        </View>
        <BoardList />

        <View style={{ height: 20 }} />
        <HotPostList />
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          router.navigate("/pages/community/postEditor/new");
        }}
        style={styles.upenWrapper}
      >
        <Image
          style={styles.upenIcon}
          resizeMode="cover"
          source={require("../../assets/pages/community/boardList/upen.png")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  upenIcon: {
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  upenWrapper: {
    position: "absolute",
    bottom: 50,
    right: 25,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: 99,
    backgroundColor: Color.main,
    width: 56,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },
  textTypo: {
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
    textAlign: "left",
  },
  wrapperFlexBox: {
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  text12: {
    fontSize: FontSize.size_5xl,
    lineHeight: 34,
    fontWeight: "700",
    textAlign: "left",
  },
  wrapper: {
    paddingVertical: 12,
    height: 56,
    width: 375,
    // top: 47,
    left: 0,
    // position: "absolute",
  },
});
