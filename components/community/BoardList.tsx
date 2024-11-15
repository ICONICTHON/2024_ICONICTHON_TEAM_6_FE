import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../../constants/GlobalStyles";
import { router } from "expo-router";
import akoImage from "../../assets/pages/community/boardList/-designed-by--2.png";
import basketballImage from "../../assets/pages/community/boardList/frame-1000004119.png";
import soccerImage from "../../assets/pages/community/boardList/frame-1000004118.png";
import baseballImage from "../../assets/pages/community/boardList/frame-1000004120.png";

export default function BoardList() {
  const boards = [
    {
      postType: "free",
      img: akoImage,
      title: "자유 게시판",
    },
    {
      postType: "basketball",
      img: basketballImage,
      title: "농구 게시판",
    },
    {
      postType: "soccer",
      img: soccerImage,
      title: "축구 게시판",
    },
    {
      postType: "baseball",
      img: baseballImage,
      title: "야구 게시판",
    },
  ];
  return (
    <View style={[styles.view, styles.viewLayout]}>
      <View style={[styles.child, styles.childBorder]} />
      <View style={[styles.frameParent, styles.innerPosition]}>
        {boards.map((v, i, a) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                router.navigate({
                  pathname: "/pages/community/postList/[postType]",
                  params: { postType: v.postType },
                });
              }}
              style={[styles.designedBy2Parent, styles.parentFlexBox]}
            >
              <Image
                style={styles.designedBy2}
                resizeMode="cover"
                source={{ uri: Image.resolveAssetSource(v.img).uri }}
              />
              <Text style={[styles.text, styles.textTypo]}>{v.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={[styles.inner, styles.parentFlexBox]}>
        <View style={[styles.frameParent1, styles.parentFlexBox]}>
          <Image
            style={[styles.frameIcon, styles.frameLayout]}
            resizeMode="cover"
          />
          <Text style={[styles.text4, styles.textTypo]}>전체 게시판</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewLayout: {
    height: 240,
    width: 343,
    // position: "absolute",
  },
  childBorder: {
    borderColor: Color.grayGray50,
    borderStyle: "solid",
    top: 0,
  },
  innerPosition: {
    left: 0,
    width: 343,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  frameLayout: {
    overflow: "hidden",
    height: 18,
    width: 18,
  },
  child: {
    marginLeft: -171.5,
    left: "50%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    borderWidth: 1,
    height: 240,
    width: 343,
    // position: "absolute",
  },
  designedBy2: {
    width: 22,
    height: 22,
  },
  text: {
    color: Color.gray1,
  },
  designedBy2Parent: {
    alignSelf: "stretch",
    gap: 4,
  },
  frameParent: {
    top: 52,
    padding: Padding.p_xl,
    gap: 20,
  },
  frameIcon: {
    display: "none",
  },
  text4: {
    fontWeight: "700",
    color: Color.grayGray800,
  },
  frameParent1: {
    gap: 5,
  },
  inner: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    borderBottomWidth: 1,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    left: 0,
    width: 343,
    position: "absolute",
    borderColor: Color.grayGray50,
    borderStyle: "solid",
    top: 0,
  },
  view: {
    // top: 123,
    // left: 16,
    marginHorizontal: "auto",
  },
});
