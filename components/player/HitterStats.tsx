import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "@/constants/GlobalStyles";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import * as Progress from "react-native-progress";

export type HitterStats = {
  nog: string;
  ba: string;
  appearance: string;
  hit: string;
  hit2: string;
  hit3: string;
  hr: string;
  score: string;
  steal: string;
  walks: string;
  k: string;
  obp: string;
  slg: string;
  ops: string;
};

export type HitterStatsProps = ViewProps & {
  data: HitterStats;
};

export default function HitterStats({ data }: HitterStatsProps) {
  return (
    <View>
      <View style={styles.frameGroup}>
        <View style={styles.parentShadowBox1}>
          <Text style={[styles.text10, styles.textTypo]}>{data.nog}</Text>
          <Text style={styles.text11}>경기수</Text>
        </View>
        <View style={styles.parentShadowBox1}>
          <Text style={[styles.text12, styles.textTypo]}>
            {data.hit}/{data.appearance}
          </Text>
          <Text style={styles.text11}>안타(타수)</Text>
        </View>
        <View style={styles.parentShadowBox1}>
          <Text style={[styles.text14, styles.textTypo]}>{data.hr}</Text>
          <Text style={styles.text11}>홈런</Text>
        </View>
        <View style={styles.parentShadowBox1}>
          <Text style={[styles.text16, styles.textTypo]}>
            {data.walks}/{data.k}
          </Text>
          <Text style={styles.text11}>볼넷/삼진</Text>
        </View>
        <View style={styles.parentShadowBox1}>
          <Text style={[styles.text18, styles.textTypo]}>{data.ops}</Text>
          <Text style={styles.text11}>OPS</Text>
        </View>
        <View style={styles.parentShadowBox1}>
          <Text style={[styles.text19, styles.textTypo]}>1/{data.score}</Text>
          <Text style={styles.text11}>타점 / 득점</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text21, styles.textTypo]}>{data.steal}</Text>
          <Text style={styles.text11}>도루</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text21, styles.textTypo]}>{data.hit2}</Text>
          <Text style={styles.text11}>2루타</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text21, styles.textTypo]}>{data.hit3}</Text>
          <Text style={styles.text11}>3루타</Text>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.containerFlexBox]}>
        <View style={styles.frameParent1}>
          <Progress.Circle
            progress={parseFloat(data.ba)}
            size={72}
            thickness={5}
            showsText={true}
            textStyle={styles.text27}
            direction="counter-clockwise"
            unfilledColor="#FAFAFA"
            color={Color.main}
            borderWidth={0}
            animated={false}
            formatText={(progress) => {
              console.log(progress);
              return `${progress.toPrecision(3)}`;
            }}
          />
          <Text style={[styles.text28, styles.textTypo1]}>타율</Text>
        </View>
        <View style={styles.frameParent1}>
          <Progress.Circle
            progress={parseFloat(data.obp)}
            size={72}
            thickness={5}
            showsText={true}
            textStyle={styles.text27}
            direction="counter-clockwise"
            unfilledColor="#FAFAFA"
            color={Color.main}
            borderWidth={0}
            animated={false}
            formatText={(progress) => {
              console.log(progress);
              return `${progress.toPrecision(3)}`;
            }}
          />
          <Text style={[styles.text28, styles.textTypo1]}>출루율</Text>
        </View>
        <View style={styles.frameParent1}>
          <Progress.Circle
            progress={parseFloat(data.slg)}
            size={72}
            thickness={5}
            showsText={true}
            textStyle={styles.text27}
            direction="counter-clockwise"
            unfilledColor="#FAFAFA"
            color={Color.main}
            borderWidth={0}
            animated={false}
            formatText={(progress) => {
              console.log(progress);
              return `${progress.toPrecision(3)}`;
            }}
          />
          <Text style={[styles.text28, styles.textTypo1]}>장타율</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  favoriteChildPosition: {
    left: 0,
    position: "absolute",
  },
  wrapperFlexBox: {
    borderRadius: Border.br_80xl,
    justifyContent: "center",
    alignItems: "center",
  },

  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.russoOneRegular,
    letterSpacing: 0,
    color: Color.colorDarkslateblue,
    lineHeight: 34,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },

  child: {
    marginLeft: -187.5,
    borderBottomRightRadius: Border.br_21xl,
    borderBottomLeftRadius: Border.br_21xl,
    backgroundColor: "#cff459",
    height: 300,
    width: 375,
    top: 0,
  },
  uangleLeftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  favoriteChild: {
    width: 18,
    height: 18,
    top: 0,
  },
  vectorIcon: {
    marginTop: -13.25,
    marginLeft: -14,
    top: "50%",
    width: 29,
    height: 27,
  },
  favorite: {
    width: 32,
    height: 32,
  },

  text: {
    textAlign: "left",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 34,
    letterSpacing: -0.1,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
  },
  text1: {
    color: Color.color,
    textAlign: "left",
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_xs,
  },
  wrapper: {
    backgroundColor: Color.colorDarkslateblue,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    flexDirection: "row",
    borderRadius: Border.br_80xl,
  },
  parent: {
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  text2: {
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
  },
  text3: {
    textAlign: "left",
    color: Color.grayGray800,
  },
  group: {
    alignSelf: "stretch",
    gap: 5,
  },
  container: {
    gap: 5,
  },
  frameParent: {
    top: 126,
    left: 40,
    gap: 5,
    position: "absolute",
  },

  text10: {
    right: 10,
    top: 25,
    textAlign: "right",
  },

  parentShadowBox1: {
    height: 64,
    width: 140,
    backgroundColor: Color.color,
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
  text12: {
    right: 10,
    top: 25,
    textAlign: "right",
  },
  text14: {
    right: 10,
    top: 25,
    textAlign: "right",
  },
  text16: {
    right: 10,
    top: 25,
    textAlign: "right",
  },
  text18: {
    right: 10,
    top: 25,
    textAlign: "right",
  },
  text19: {
    right: 10,
    top: 25,
    textAlign: "right",
  },
  text21: {
    right: 10,
    bottom: 5,
  },
  parentShadowBox: {
    // width: 86,
    width: 90,
    height: 64,
    backgroundColor: Color.color,
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

  frameChild: {
    marginLeft: -36,
    bottom: 0,
    zIndex: 1,
    left: "50%",
    position: "absolute",
  },

  text11: {
    top: 10,
    left: 10,
    color: Color.grayGray300,
    letterSpacing: 0,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    fontWeight: "600",
    position: "absolute",
  },
  containerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameContainer: {
    marginLeft: -137.5,
    top: 130,
    gap: 30,
    left: "50%",
    position: "absolute",
  },
  parent11: {
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_mini,
    borderRadius: Border.br_80xl,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  text27: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    zIndex: 0,
    fontFamily: FontFamily.russoOneRegular,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    letterSpacing: -0.1,
  },
  frameParent1: {
    width: 72,
    gap: 5,
    alignItems: "center",
  },
  parent11Layout: {
    height: 72,
    width: 72,
  },
  frameGroup: {
    top: 250,
    width: 300,
    flexWrap: "wrap",
    alignContent: "flex-start",
    gap: 10,
    marginLeft: -149.5,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  textTypo1: {
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.pretendard,
  },
  text28: {
    textAlign: "center",
    alignSelf: "stretch",
    color: Color.grayGray800,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_xs,
  },
});
