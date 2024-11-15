import { StyleSheet, Image, TouchableOpacity } from "react-native";

import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "@/constants/GlobalStyles";

import { ThemedView } from "@/components/ThemedView";
import { Text, View } from "react-native";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import { login } from "@react-native-kakao/user";
import * as SecureStore from "expo-secure-store";

export default function Welcome() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const kakaologin = async () => {
    let res = await login();
    console.log(res);
    const Frisbee = require("frisbee");
    const api = new Frisbee({
      baseURI: process.env.EXPO_PUBLIC_API_HOST,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    let ores = await api.post("/api/v1/auth/login", {
      body: { accessToken: res.accessToken },
    });
    // [x] 이제 accessToken과 refreshToken을 안전히 저장해야함
    await SecureStore.setItemAsync("accessToken", ores.body.accessToken);
    await SecureStore.setItemAsync("refreshToken", ores.body.refreshToken);
    console.log(await SecureStore.getItemAsync("accessToken"));
    router.replace("/home");
  };

  return (
    <ThemedView
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        paddingVertical: 20,
        backgroundColor: "#093B7B",
      }}
    >
      <TouchableOpacity
        style={[styles.view1, styles.view1FlexBox]}
        onPress={kakaologin}
      >
        <Image
          style={styles.child}
          resizeMode="cover"
          source={require("../assets/welcome/frame-1000003797.png")}
        />
        <Text style={[styles.text, styles.textTypo1]}>카카오 로그인</Text>
      </TouchableOpacity>
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/welcome/name.png")}
      />
      <Text style={[styles.text1, styles.textClr]}>동국대의 모든 구기종목</Text>
      <Image
        style={[styles.item, styles.itemPosition]}
        resizeMode="cover"
        source={require("../assets/welcome/group-560118402.png")}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  view1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
  },
  iconPosition: {
    marginLeft: -84.5,
    position: "absolute",
  },
  textClr: {
    color: Color.colorWhite,
    fontWeight: "600",
  },
  itemPosition: {
    top: "50%",
    left: "50%",
  },
  leftFlexBox: {
    paddingVertical: Padding.p_xs,
    alignItems: "flex-end",
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  textTypo: {
    textAlign: "center",
    lineHeight: 14,
    letterSpacing: 0,
    fontFamily: FontFamily.pretendard,
    position: "absolute",
  },
  vectorIconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  child: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.1,
    lineHeight: 22,
    color: Color.colorGray,
    marginLeft: 10,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
  },
  view1: {
    marginLeft: -150.5,
    top: 587,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGold,
    width: 300,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_sm,
  },
  icon: {
    top: 416,
    width: 170,
    height: 60,
    left: "50%",
  },
  text1: {
    marginLeft: -79.5,
    top: 496,
    fontSize: 18,
    letterSpacing: -0.4,
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    left: "50%",
    position: "absolute",
    color: Color.colorWhite,
  },
  item: {
    marginTop: -188,
    width: 168,
    height: 158,
    marginLeft: -84.5,
    position: "absolute",
  },
  text2: {
    marginTop: -7,
    marginLeft: -16.5,
    fontSize: FontSize.size_mid,
    top: "50%",
    left: "50%",
    color: Color.colorWhite,
    fontWeight: "600",
    overflow: "hidden",
  },
  time: {
    width: 35,
    height: 14,
  },
  left: {
    paddingHorizontal: Padding.p_23xl,
  },

  text3: {
    left: 6,
    fontSize: FontSize.size_2xs,
    fontWeight: "700",
    color: Color.colorBlack,
    top: 0,
  },
  right: {
    paddingHorizontal: Padding.p_9xl,
  },
  view: {
    backgroundColor: Color.main,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});
