import { Color, FontFamily } from "@/constants/GlobalStyles";
import { Image, StyleSheet, Text, View, ViewProps } from "react-native";

export type HeaderAProps = ViewProps & {
  title: string;
};

export default function HeaderA({ style, title }: HeaderAProps) {
  return (
    <View style={[styles.parent7, styles.parentPosition, style]}>
      <Text style={[styles.text33, styles.textTypo5]}>{title}</Text>
      <Image
        style={[styles.uangleLeftIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/pngs/uangleleft.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconLayout1: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  parent7: {
    //   top: 87,
  },
  parentPosition: {
    marginLeft: 16,
    alignItems: "center",
    flexDirection: "row",
    // position: "absolute",
  },
  text33: {
    fontSize: 24,
    lineHeight: 34,
    textAlign: "left",
    fontWeight: "700",
    color: Color.grayGray800,
    letterSpacing: -0.1,
    fontFamily: FontFamily.pretendard,
  },
  textTypo5: {
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
  },
  uangleLeftIcon: {
    marginLeft: 4,
  },
});
