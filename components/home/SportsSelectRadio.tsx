import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "@/constants/GlobalStyles";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";

export type SportsSelectRadioProps = ViewProps & {
  sportsIndex: number;
  setSportsIndex: Function;
};

const sports_name = ["전체", "야구", "농구", "축구"];

export default function SportsSelectRadio({
  sportsIndex,
  setSportsIndex,
  style,
}: SportsSelectRadioProps) {
  return (
    <View style={[styles.parentPosition, style]}>
      {sports_name.map((value, index, array) => {
        return (
          <TouchableOpacity
            onPress={() => {
              setSportsIndex(index);
            }}
            style={
              index == sportsIndex
                ? [styles.wrapper, styles.frameLayout]
                : [styles.frame, styles.frameFlexBox]
            }
            key={index}
          >
            <Text
              style={[
                index == sportsIndex ? styles.text14 : styles.text15,
                styles.textTypo4,
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        );
      })}
      {/* <View style={[styles.wrapper, styles.frameLayout]}>
        <Text style={[styles.text14, styles.textTypo4]}>전체</Text>
      </View>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.text15, styles.textTypo4]}>야구</Text>
      </View>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.text15, styles.textTypo4]}>농구</Text>
      </View>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.text15, styles.textTypo4]}>축구</Text>
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  frameFlexBox: {
    borderStyle: "solid",
    backgroundColor: Color.grayWhite0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text15: {
    color: Color.grayGray800,
  },
  frame: {
    borderColor: Color.grayGray100,
    borderWidth: 1,
    marginLeft: 8,
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_3xs,
    height: 30,
    width: 48,
    borderRadius: Border.br_5xs,
  },
  textTypo4: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
  },
  text14: {
    color: Color.grayWhite0,
  },
  frameLayout: {
    marginLeft: 8,
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_3xs,
    height: 30,
    width: 48,
    borderRadius: Border.br_5xs,
  },
  wrapper: {
    backgroundColor: "#093b7b",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  parentPosition: {
    marginLeft: 16,
    alignItems: "center",
    flexDirection: "row",
    // position: "absolute",
  },
});
