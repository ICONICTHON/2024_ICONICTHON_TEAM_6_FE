import { Border, Color, FontFamily, FontSize } from "@/constants/GlobalStyles";
import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";

export type PostCardFullProps = ViewProps & {
  title: string;
  img: string;
  postId: string;
  description: string;
  date: string;
  likes: number;
  comments: number;
  sports_type: number;
  isFull: boolean;
};

export default function PostCardFull({
  title,
  img,
  postId,
  description,
  date,
  likes,
  comments,
  sports_type,
  isFull,
}: PostCardFullProps) {
  const dateD = new Date(date);
  let sportsS = "";
  switch (sports_type) {
    case 1:
      sportsS = "야구";
      break;
    case 2:
      sportsS = "농구";
      break;
    case 3:
      sportsS = "축구";
      break;
    default:
      sportsS = "자유";
      break;
  }

  return (
    <TouchableOpacity
      style={styles.rectangleParent}
      onPress={() => {
        router.navigate({
          pathname: "/pages/community/postDetail/[postId]",
          params: { postId: postId },
        });
      }}
    >
      {img != "" && (
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../../assets/pages/community/postCard/rectangle-1954124043.png")}
        />
      )}

      <Text
        style={[
          styles.text,
          styles.textLayout,
          { width: img == "" ? (isFull ? 340 : 320) : isFull ? 240 : 200 },
        ]}
        numberOfLines={2}
      >
        {description}
      </Text>
      <Text style={[styles.text1, styles.textPosition]}>
        {sportsS}게시판ㆍ 11월 15일
      </Text>
      <Text
        style={[
          styles.text2,
          styles.textPosition,
          { width: img == "" ? (isFull ? 340 : 320) : isFull ? 240 : 200 },
        ]}
        numberOfLines={1}
      >
        {title}
      </Text>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.uheartAltParent, styles.parentFlexBox]}>
          <Image
            style={styles.uheartAltIcon}
            resizeMode="cover"
            source={require("../../assets/pages/community/postCard/uheartalt.png")}
          />
          <Text style={[styles.text3, styles.textTypo]}>{likes}</Text>
        </View>
        <View style={[styles.ucommentAltParent, styles.parentFlexBox]}>
          <Image
            style={styles.uheartAltIcon}
            resizeMode="cover"
            source={require("../../assets/pages/community/postCard/ucommentalt.png")}
          />
          <Text style={[styles.text4, styles.textTypo]}>{comments}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textLayout: {
    width: 240,
    overflow: "hidden",
  },
  textPosition: {
    left: 16,
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    position: "absolute",
  },
  parentFlexBox: {
    gap: 2,
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
  },
  frameChild: {
    right: 16,
    borderRadius: Border.br_5xs,
    width: 88,
    height: 88,
    top: 16,
    position: "absolute",
  },
  text: {
    // marginLeft: -171.5,
    top: 44,
    // left: "50%",
    left: 16,
    color: Color.grayGray500,
    height: 40,
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    position: "absolute",
  },
  text1: {
    color: Color.grayGray300,
    top: 87,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    left: 8,
  },
  text2: {
    fontSize: FontSize.size_sm,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "600",
    color: Color.grayGray800,
    // width: 240,
    overflow: "hidden",
    top: 16,
  },
  uheartAltIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text3: {
    color: "#FF8598",
  },
  uheartAltParent: {
    alignItems: "flex-end",
    gap: 2,
    flexDirection: "row",
  },
  text4: {
    // color: Color.color,
    color: "#3FA9F5",
  },
  ucommentAltParent: {
    alignItems: "center",
    gap: 2,
    flexDirection: "row",
  },
  frameParent: {
    left: 134,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
    flexDirection: "row",
    top: 87,
    position: "absolute",
  },
  rectangleParent: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: Color.grayGray50,
    borderBottomWidth: 1,
    height: 120,

    overflow: "hidden",
  },
});
