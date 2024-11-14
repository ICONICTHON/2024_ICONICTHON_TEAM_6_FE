import * as React from "react";
import { Image, ViewProps } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import {
  FontFamily,
  FontSize,
  Color,
  Padding,
} from "../../constants/GlobalStyles";

export type CommentCardProps = ViewProps & {
  author?: string;
  description?: string;
};

export default function CommentCard({ author, description }: CommentCardProps) {
  return (
    <View style={styles.frameParent}>
      <View style={styles.frameGroup}>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../../assets/pages/community/postDetail/ellipse-5761.png")}
          />
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../../assets/pages/community/postDetail/-designed-by--11.png")}
          />
        </View>
        <Text style={[styles.text, styles.textTypo]}>{author}</Text>
        <Text style={[styles.text1, styles.textTypo]}>삭제</Text>
      </View>
      <Text style={[styles.letsGo, styles.textTypo]}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    lineHeight: 20,
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
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
    width: 32,
    height: 32,
  },
  text: {
    flex: 1,
    fontWeight: "500",
    color: Color.grayGray800,
  },
  text1: {
    letterSpacing: 0,
    color: Color.grayGray300,
    fontFamily: FontFamily.pretendard,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  frameGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    gap: 2,
    alignSelf: "stretch",
  },
  letsGo: {
    color: Color.grayGray500,
    alignSelf: "stretch",
  },
  frameParent: {
    paddingBottom: Padding.p_3xs,
    alignSelf: "stretch",
  },
});
