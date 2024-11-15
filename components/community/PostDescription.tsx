import * as React from "react";
import { Image, Text, StyleSheet, View, ViewProps } from "react-native";

import {
  FontSize,
  FontFamily,
  Color,
  Padding,
} from "../../constants/GlobalStyles";

export type PostDescriptionProps = ViewProps & {
  description: string;
  likes: number;
  comments: number;
};

export default function PostDescription({
  description,
  likes,
  comments,
}: PostDescriptionProps) {
  return (
    <View style={styles.d3Parent}>
      <Text style={styles.d3}>{description}</Text>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.uheartAltParent, styles.parentFlexBox]}>
          <Image
            style={styles.uheartAltIcon}
            resizeMode="cover"
            source={require("../../assets/pages/community/postDetail/uheartalt.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>{likes}</Text>
        </View>
        <View style={[styles.uheartAltParent, styles.parentFlexBox]}>
          <Image
            style={styles.uheartAltIcon}
            resizeMode="cover"
            source={require("../../assets/pages/community/postDetail/ucommentalt.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>{comments}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentFlexBox: {
    gap: 2,
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
  },
  d3: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    color: Color.grayGray500,
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
    alignSelf: "stretch",
  },
  uheartAltIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text: {
    color: "#FF8598",
  },
  uheartAltParent: {
    justifyContent: "center",
  },
  text1: {
    color: "#3FA9F5",
  },
  frameParent: {
    justifyContent: "flex-end",
  },
  d3Parent: {
    borderStyle: "solid",
    borderColor: Color.grayGray50,
    borderBottomWidth: 1,
    // height: 211,
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    alignSelf: "stretch",
  },
});
