import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "@/constants/GlobalStyles";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "홈",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={
                focused ? styles.propertyStatusfocus : styles.propertyPosition
              }
            >
              <Image
                style={{ width: 24, height: 24, overflow: "hidden" }}
                resizeMode="cover"
                source={require("../../assets/pages/tab/u_home-alt.png")}
              />
              <Text style={styles.text}>홈</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: "게시판",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={
                focused ? styles.propertyStatusfocus : styles.propertyPosition
              }
            >
              <Image
                style={{ width: 24, height: 24, overflow: "hidden" }}
                resizeMode="cover"
                source={require("../../assets/pages/tab/u_comment.png")}
              />
              <Text style={styles.text}>게시판</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "경기일정",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={
                focused ? styles.propertyStatusfocus : styles.propertyPosition
              }
            >
              <Image
                style={{ width: 24, height: 24, overflow: "hidden" }}
                resizeMode="cover"
                source={require("../../assets/pages/tab/u_calendar-alt.png")}
              />
              <Text style={styles.text}>경기일정</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "선수정보",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={
                focused ? styles.propertyStatusfocus : styles.propertyPosition
              }
            >
              <Image
                style={{ width: 24, height: 24, overflow: "hidden" }}
                resizeMode="cover"
                source={require("../../assets/pages/tab/u_credit-card-search.png")}
              />
              <Text style={styles.text}>선수정보</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  propertyStatusfocus: {
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    // left: 20,
    position: "absolute",
    padding: Padding.p_9xs,
    backgroundColor: Color.main,
    borderRadius: Border.br_5xs,
    // top: 77,
  },
  propertyPosition: {
    // left: 92,
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    position: "absolute",
  },
  text: {
    alignSelf: "stretch",
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    fontFamily: FontFamily.pretendard,
    color: Color.grayGray800,
    textAlign: "center",
    marginTop: 2,
  },
});
