import * as React from "react";

import { StyleSheet, View, Text, Image, ViewProps } from "react-native";
import {
  FontFamily,
  FontSize,
  Color,
  Padding,
} from "../../constants/GlobalStyles";

export type PostHeaderProps = ViewProps & {
  author: string;
};

export default function PostHeader({ author }: PostHeaderProps) {
  return (
    <View style={[styles.frameParent, styles.parentFlexBox]}>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../../assets/pages/community/postDetail/ellipse-576.png")}
        />
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../../assets/pages/community/postDetail/-designed-by--1.png")}
        />
      </View>
      <Text style={[styles.text, styles.textTypo]}>{author}</Text>
      <View style={styles.parentFlexBox}>
        <Text style={[styles.text1, styles.textTypo]}>수정</Text>
        <Text style={[styles.text1, styles.textTypo]}>|</Text>
        <Text style={[styles.text1, styles.textTypo]}>삭제</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentFlexBox: {
    gap: 8,
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
  },
  frameChild: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ellipseParent: {
    width: 40,
    height: 40,
  },
  text: {
    flex: 1,
    fontSize: FontSize.size_base,
    letterSpacing: -0.1,
    lineHeight: 22,
    fontWeight: "500",
    color: Color.grayGray800,
  },
  text1: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 20,
    color: Color.grayGray300,
  },
  frameParent: {
    alignSelf: "stretch",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
  },
});
