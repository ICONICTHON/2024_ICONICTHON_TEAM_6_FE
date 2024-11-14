import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native";

import PostCardInner from "./PostCardInner";
import {
  FontFamily,
  Color,
  FontSize,
  Border,
  Padding,
} from "../../constants/GlobalStyles";
import PostCardFull from "./PostCardFull";
import { apiGet } from "@/hooks/useApiGet";

const HotPostList = () => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([
    {
      _id: "",
      author: "",
      comment: [
        {
          author: "",
          ct: "2024-08-27T17:50:32.341730",
          description: "",
          mt: "2024-08-27T17:50:32.341752",
        },
      ],
      ct: "2024-08-27T17:47:35.770743",
      description: "",
      likes: 0,
      mt: "2024-08-27T17:47:35.770758",
      sports: 0,
      title: "",
    },
  ]);

  useEffect(() => {
    const fetch = async () => {
      let res = await apiGet(`/api/v1/post/hot`);
      setData(res.body.posts);
      setLoaded(true);
    };
    fetch();
  }, []);

  return (
    <View style={styles.view}>
      <View style={styles.child} />
      <View style={styles.frameParent}>
        {!loaded && <ActivityIndicator />}
        {data.map((v, i, a) => {
          return (
            <PostCardFull
              key={i}
              isFull={false}
              title={v.title}
              img=""
              postId={v._id}
              description={v.description}
              date={v.mt}
              likes={v.likes}
              comments={v.comment.length}
              sports_type={v.sports}
            />
          );
        })}
      </View>
      <View style={styles.inner}>
        <View style={[styles.ucommentAltParent, styles.frameParentFlexBox]}>
          <Image
            style={styles.ufireIcon}
            resizeMode="cover"
            source={require("../../assets/pages/community/postCard/ufire.png")}
          />
          <Image style={styles.frameItem} resizeMode="cover" />
          <Text style={styles.text10}>인기글</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 120,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  textTypo2: {
    width: 311,
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    overflow: "hidden",
    position: "absolute",
  },
  textPosition: {
    height: 40,
    color: Color.grayGray500,
    fontWeight: "500",
    top: 44,
    marginLeft: -155.5,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    left: "50%",
  },
  frameParentFlexBox: {
    gap: 8,
    flexDirection: "row",
  },
  textTypo1: {
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
  },
  textTypo: {
    width: 240,
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    overflow: "hidden",
    position: "absolute",
  },
  child: {
    marginLeft: -171.5,
    backgroundColor: Color.white,
    borderWidth: 1,
    height: 652,
    borderColor: Color.grayGray50,
    borderStyle: "solid",
    left: "50%",
    // top: 0,
    borderRadius: Border.br_5xs,
    width: 343,
    // position: "absolute",
  },
  text: {
    color: Color.grayGray800,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
    top: 16,
    left: 16,
  },
  text1: {
    width: 311,
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    overflow: "hidden",
    position: "absolute",
  },
  text2: {
    color: Color.grayGray300,
    top: 87,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    left: 16,
    position: "absolute",
  },
  uheartAltIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text3: {
    color: Color.color1,
  },
  uheartAltParent: {
    alignItems: "flex-end",
  },
  text4: {
    color: Color.color,
  },
  ucommentAltParent: {
    alignItems: "center",
  },
  frameGroup: {
    left: 133,
    justifyContent: "flex-end",
    gap: 8,
    alignItems: "center",
    top: 87,
    position: "absolute",
  },
  parent: {
    overflow: "hidden",
    borderBottomWidth: 1,
    height: 120,
    alignSelf: "stretch",
    borderColor: Color.grayGray50,
    borderStyle: "solid",
  },
  frameChild: {
    top: 28,
    left: 263,
    width: 64,
    height: 64,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  text5: {
    height: 40,
    color: Color.grayGray500,
    fontWeight: "500",
    top: 44,
    marginLeft: -155.5,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    left: "50%",
  },
  text7: {
    color: Color.grayGray800,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
    top: 16,
    left: 16,
  },
  frameContainer: {
    left: 134,
    justifyContent: "flex-end",
    gap: 8,
    alignItems: "center",
    top: 87,
    position: "absolute",
  },
  rectangleParent: {
    overflow: "hidden",
    height: 120,
    alignSelf: "stretch",
  },
  frameParent: {
    top: 52,
    left: 0,
    width: 343,
    position: "absolute",
  },
  ufireIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frameItem: {
    width: 18,
    height: 18,
    display: "none",
    overflow: "hidden",
  },
  text10: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    color: Color.grayGray800,
  },
  inner: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    left: 0,
    borderColor: Color.grayGray50,
    borderStyle: "solid",
    top: 0,
    width: 343,
    position: "absolute",
  },
  view: {
    // top: 51,
    // height: 282,
    width: 343,
    marginHorizontal: "auto",
    // left: 16,
    // position: "absolute",
  },
});

export default HotPostList;
