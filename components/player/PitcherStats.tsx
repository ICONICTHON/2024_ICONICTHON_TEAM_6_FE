import { Border, Color, FontFamily, FontSize } from "@/constants/GlobalStyles";
import { StyleSheet, Text, View, ViewProps } from "react-native";

export type PitcherStats = {
  nog: string;
  era: string;
  inning: string;
  wins: string;
  lose: string;
  k: string;
  hits: string;
  hr: string;
  er: string;
  walks: string;
  dead: string;
  whip: string;
};

export type PitcherStatsProps = ViewProps & {
  data: PitcherStats;
};
export default function PitcherStats({ data }: PitcherStatsProps) {
  return (
    <View>
      <View style={styles.frameParent}>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text, styles.textTypo]}>{data.era}</Text>
          <Text style={styles.text1}>평균자책</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text2, styles.textTypo]}>
            {data.inning}/{data.nog}
          </Text>
          <Text style={styles.text1}>이닝 / 경기수</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text4, styles.textTypo]}>{data.wins}</Text>
          <Text style={styles.text1}>승</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text4, styles.textTypo]}>{data.lose}</Text>
          <Text style={styles.text1}>패</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text4, styles.textTypo]}>{data.k}</Text>
          <Text style={styles.text1}>삼진</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text4, styles.textTypo]}>{data.er}</Text>
          <Text style={styles.text1}>자책점</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text12, styles.textTypo]}>{data.hits}</Text>
          <Text style={styles.text1}>피안타</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text4, styles.textTypo]}>0</Text>
          <Text style={styles.text1}>피홈런</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text16, styles.textTypo]}>
            {data.walks}/{data.dead}
          </Text>
          <Text style={styles.text1}>볼넷 / 사구</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text12, styles.textTypo]}>{data.whip}</Text>
          <Text style={styles.text1}>WHIP</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textTypo: {
    textAlign: "right",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.russoOneRegular,
    lineHeight: 34,
    fontSize: FontSize.size_5xl,
    top: 25,
    letterSpacing: 0,
    position: "absolute",
  },
  text: {
    left: 77,
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
    letterSpacing: 0,
    position: "absolute",
  },
  parentShadowBox: {
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
  text2: {
    right: 10,
  },
  text4: {
    right: 10,
  },
  text12: {
    right: 10,
  },
  text16: {
    right: 10,
  },
  frameParent: {
    marginLeft: -149.5,
    top: 230,
    left: "50%",
    width: 300,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    gap: 10,
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
