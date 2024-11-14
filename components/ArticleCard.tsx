import {
  Text,
  type TextProps,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { Border, Color, FontFamily, FontSize } from "@/constants/GlobalStyles";
import * as WebBrowser from "expo-web-browser";

export type ArticleCardProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  title: string;
  description: string;
  date: string;
  commentNum: number;
  likeNum: number;
  url: string;
  img: string;
  onPress: Function;
};

export function ArticleCard({
  style,
  lightColor,
  darkColor,
  title,
  description,
  date,
  commentNum,
  likeNum,
  url,
  img,
  onPress,
  ...rest
}: ArticleCardProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <TouchableOpacity
      style={styles.rectangleParent}
      onPress={onPress}
      // onPress={async () => {
      //   return await WebBrowser.openBrowserAsync(url);
      // }}
    >
      <Image
        source={{ uri: img }}
        style={[styles.frameChild, styles.frameChildPosition]}
      />
      <View style={styles.parent4}>
        <Text style={styles.text18} numberOfLines={1}>
          {title}
        </Text>
        <Text style={[styles.text19, styles.textTypo3]}>{date}</Text>
      </View>
      <Text style={[styles.text20, styles.textTypo3]} numberOfLines={3}>
        {description}
      </Text>
      <Image
        style={[styles.frameItem, styles.frameItemLayout]}
        resizeMode="cover"
        source={require("../assets/pngs/frame-1000003967.png")}
      />
      <View style={[styles.view1, styles.viewParentFlexBox]}>
        <Image
          style={styles.ucommentAltIcon}
          resizeMode="cover"
          source={require("../assets/pngs/ucommentalt.png")}
        />
        <Text style={[styles.text21, styles.textTypo2]}>{commentNum}</Text>
      </View>
      <View style={[styles.view2, styles.viewParentFlexBox]}>
        <Image
          style={styles.ucommentAltIcon}
          resizeMode="cover"
          source={require("../assets/pngs/uheartalt.png")}
        />
        <Text style={[styles.text21, styles.textTypo2]}>{likeNum}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text20: {
    top: 30,
    width: 189,
    height: 63,
    left: 140,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    color: Color.grayGray800,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo3: {
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
  },
  text19: {
    marginLeft: 4,
    color: Color.grayGray300,
  },
  text18: {
    textAlign: "left",
    fontWeight: "600",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 22,
    letterSpacing: -0.1,
    fontSize: FontSize.size_base,
  },
  parent4: {
    alignItems: "flex-end",
    left: 140,
    top: 0,
    flexDirection: "row",
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.grayGray100,
    width: 120,
    height: 120,
    borderRadius: Border.br_5xs,
  },
  rectangleParent: {
    height: 120,
    alignSelf: "stretch",
  },
  frameChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameItemLayout: {
    width: 14,
    height: 14,
  },
  frameItem: {
    top: 6,
    left: 329,
    height: 14,
    position: "absolute",
  },
  view1: {
    bottom: 11,
    left: 288,
    position: "absolute",
  },
  viewParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  view2: {
    top: 93,
    left: 242,
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.pretendard,
  },
  ucommentAltIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text21: {
    marginLeft: 2,
    color: Color.grayGray300,
    textAlign: "left",
  },
});
