import { Image, StyleSheet, Text, View, ViewProps } from "react-native";
import akoImage from "../../assets/pages/mypage/-designed-by--1.png";
import { Border, Color, FontFamily, FontSize } from "@/constants/GlobalStyles";
import { sportsTypeToKoKr } from "@/app/pages/coach/[coachId]";

export type CoachProfileSearchProps = ViewProps & { data: CoachProfile };

export type CoachProfile = {
  sports_type: string;
  img: string;
  position: string;
  name: string;
};
export default function CoachProfileSearch({ data }: CoachProfileSearchProps) {
  return (
    <View>
      <View style={styles.child} />
      {/* <View style={styles.item} /> */}
      <Image
        source={{
          uri:
            data.img == "" ? Image.resolveAssetSource(akoImage).uri : data.img,
        }}
        resizeMode="cover"
        style={[styles.item]}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textClr]}>
          #{sportsTypeToKoKr(data.sports_type)}
        </Text>
        <View style={styles.frameWrapper}>
          <View style={[styles.group, styles.groupFlexBox]}>
            <Text style={[styles.text1, styles.textTypo1]}>{data.name}</Text>
            <View style={[styles.wrapper, styles.groupFlexBox]}>
              <Text style={styles.text2}>{data.position}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  groupFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    borderRadius: 99,
    backgroundColor: Color.colorDarkslateblue,
    paddingHorizontal: 12,
    paddingVertical: 0,
  },
  textTypo1: {
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
  },
  group: {
    gap: 10,
  },
  frameWrapper: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  textClr: {
    color: Color.colorDarkslateblue,
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  text: {
    fontWeight: "700",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 10,
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
    alignSelf: "stretch",
  },
  item: {
    // top: 10,
    marginTop: 10,
    left: 185,
    borderRadius: Border.br_base,
    backgroundColor: "#a2a2a2",
    width: 150,
    height: 180,
    position: "absolute",
    overflow: "hidden",
  },
  parent: {
    marginTop: 50,
    width: 118,
    gap: 10,
    alignItems: "center",
    left: 40,
    position: "absolute",
  },
  child: {
    // marginLeft: -187.5,
    // top: 0,
    // left: "50%",

    backgroundColor: "#fff",
    width: "100%",
    height: 200,
    // position: "absolute",
  },
  text2: {
    color: Color.color,
    textAlign: "left",
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.pretendard,
  },
  text1: {
    fontSize: 24,
    lineHeight: 34,
    color: Color.grayGray800,
    textAlign: "right",
    fontWeight: "600",
  },
});
