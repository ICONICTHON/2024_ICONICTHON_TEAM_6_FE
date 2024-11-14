import { Color, FontFamily, FontSize } from "@/constants/GlobalStyles";
import { Image, StyleSheet, Text, View, ViewProps } from "react-native";

export type HeaderBProps = ViewProps & {
  title: string;
  icon: String;
};

export default function HeaderB({ style, title, icon }: HeaderBProps) {
  return (
    <View style={[styles.parentPosition, style]}>
      {icon == "ucalendaralt" && (
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/pngs/ucalendaralt.png")}
        />
      )}

      {icon == "ufire" && (
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/pngs/ufire.png")}
        />
      )}

      <Text style={[styles.text43, styles.textTypo5]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textTypo5: {
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
  },
  text43: {
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    marginLeft: 4,
    textAlign: "left",
    fontWeight: "700",
    color: Color.grayGray800,
    letterSpacing: -0.1,
    fontFamily: FontFamily.pretendard,
  },
  iconLayout1: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  parentPosition: {
    marginLeft: 16,
    alignItems: "center",
    flexDirection: "row",
    // position: "absolute",
  },
});
