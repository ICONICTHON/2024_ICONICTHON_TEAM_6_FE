import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "@/constants/GlobalStyles";
import { StyleSheet, Text, View, ViewProps } from "react-native";

export type SoccerStats = {
  nog: string;
  score: string;
  as: string;
  yellow: string;
  red: string;
};
export type SoccerStatsProps = ViewProps & {
  data: SoccerStats;
};

export default function SoccerStats({ data }: SoccerStatsProps) {
  return (
    <View style={styles.frameParent}>
      <View style={styles.groupShadowBox}>
        <Text style={[styles.text, styles.textPosition]}>{data.nog}</Text>
        <Text style={[styles.text1, styles.textPosition]}>경기수</Text>
      </View>
      <View style={styles.groupShadowBox}>
        <Text style={[styles.text, styles.textPosition]}>{data.score}</Text>
        <Text style={[styles.text1, styles.textPosition]}>득점</Text>
      </View>
      <View style={styles.parent1ShadowBox}>
        <Text style={[styles.text, styles.textPosition]}>{data.as}</Text>
        <Text style={[styles.text1, styles.textPosition]}>도움</Text>
      </View>
      <View style={styles.parent1ShadowBox}>
        <Text style={[styles.text, styles.textPosition]}>{data.yellow}</Text>
        <Text style={[styles.text1, styles.textPosition]}>경고</Text>
      </View>
      <View style={styles.parent1ShadowBox}>
        <Text style={[styles.text, styles.textPosition]}>{data.red}</Text>
        <Text style={[styles.text1, styles.textPosition]}>퇴장</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textPosition: {
    letterSpacing: 0,
    position: "absolute",
  },
  text: {
    right: 10,
    bottom: 5,
    fontSize: FontSize.size_5xl,
    lineHeight: 34,
    fontFamily: FontFamily.russoOneRegular,
    color: Color.colorDarkslateblue,
    textAlign: "right",
  },
  text1: {
    top: 10,
    left: 10,
    fontSize: FontSize.size_xs,
    lineHeight: 17,
    fontWeight: "600",
    fontFamily: FontFamily.pretendard,
    color: Color.grayGray300,
    textAlign: "left",
  },
  groupShadowBox: {
    height: 64,
    width: 140,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  parent1ShadowBox: {
    width: 86,
    height: 64,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  frameParent: {
    marginLeft: -149.5,
    top: 250,
    left: "50%",
    width: 300,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    gap: 20,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.backgroundBg50,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});
