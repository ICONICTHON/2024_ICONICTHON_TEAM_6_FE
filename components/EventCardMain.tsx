import {
  Text,
  type TextProps,
  StyleSheet,
  View,
  Image,
  ImageBackground,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { Border, Color, FontFamily, FontSize } from "@/constants/GlobalStyles";
import donggukImage from "../assets/pngs/rectangle-9805.png";

export type EventCardMainProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  leagueName: string;
  teams: string[];
  time: string;
  imgs: string[];
  location: string;
  //   logo: string[];
};

export function EventCardMain({
  style,
  lightColor,
  darkColor,
  leagueName,
  teams,
  time,
  imgs,
  location,
  ...rest
}: EventCardMainProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <View>
      <View style={styles.kusfShadowBox}>
        <Text style={styles.kusf}>{leagueName}</Text>
        <Text style={[styles.text37, styles.textTypo1]}>
          {time} {location}
        </Text>
        <View style={[styles.frameParent2, styles.frameFlexBox1]}>
          <View style={styles.frameParentLayout}>
            <View style={styles.frameChild2Layout}>
              <View style={[styles.frameChild2, styles.frameChild2Layout]} />
              <ImageBackground
                style={[styles.rectangleIcon, styles.frameChild4Layout]}
                resizeMode="cover"
                source={{
                  uri:
                    teams[0] == "동국대"
                      ? Image.resolveAssetSource(donggukImage).uri
                      : imgs[0],
                }}
              />
            </View>
            <Text style={[styles.text35, styles.textTypo4]}>{teams[0]}</Text>
          </View>
          <Text style={[styles.vs, styles.textTypo5]}>vs</Text>
          <View style={[styles.frameParent4, styles.frameParentLayout]}>
            <View style={styles.frameChild2Layout}>
              <View style={[styles.frameChild2, styles.frameChild2Layout]} />
              <Image
                style={[styles.frameChild4, styles.frameChild4Layout]}
                resizeMode="cover"
                source={{
                  uri:
                    teams[1] == "동국대"
                      ? Image.resolveAssetSource(donggukImage).uri
                      : imgs[1],
                }}
              />
            </View>
            <Text style={[styles.text35, styles.textTypo4]}>{teams[1]}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textTypo1: {
    top: 40,
    left: 15,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.pretendard,
    fontWeight: "500",
    letterSpacing: -0.1,
    position: "absolute",
  },
  text37: {
    color: Color.grayGray500,
  },
  frameParent2: {
    marginLeft: -130,
    top: 75,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  frameFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
  },
  kusf: {
    top: 10,
    fontSize: FontSize.size_lg,
    lineHeight: 25,
    left: 15,
    textAlign: "left",
    fontWeight: "700",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
    position: "absolute",
  },
  rectangleIcon: {
    top: 4,
    left: 5,
  },
  textTypo5: {
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
  },
  frameParent4: {
    marginLeft: 19,
  },
  vs: {
    fontSize: 36,
    lineHeight: 49,
    marginLeft: 19,
    textAlign: "left",
    fontWeight: "700",
    color: Color.grayGray800,
    letterSpacing: -0.1,
    fontFamily: FontFamily.pretendard,
  },
  frameParentLayout: {
    width: 91,
    alignItems: "center",
  },
  frameChild2: {
    display: "none",
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.grayWhite0,
    width: 88,
    borderRadius: Border.br_5xs,
  },
  frameChild2Layout: {
    height: 88,
    width: 88,
  },
  frameChild4Layout: {
    height: 79,
    width: 79,
    position: "absolute",
  },
  frameChild4: {
    marginTop: -39,
    marginLeft: -39.5,
    top: "50%",
    left: "50%",
  },
  kusfShadowBox: {
    marginHorizontal: 5,
    height: 200,
    width: 320,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.2)",
    backgroundColor: Color.main,
    // backgroundColor: Color.grayWhite0,
  },
  text35: {
    marginTop: 4,
    color: Color.grayGray800,
    alignSelf: "stretch",
  },
  textTypo4: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
  },
});
