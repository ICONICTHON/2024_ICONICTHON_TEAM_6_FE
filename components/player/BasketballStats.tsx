import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "@/constants/GlobalStyles";
import { StyleSheet, Text, View, ViewProps } from "react-native";
export type BasketballStats = {
  nog: string;
  score: string;
  min: string;
  two: string;
  three: string;
  ft: string;
  rb: string;
  as: string;
  st: string;
  bl: string;
  foul: string;
};
import * as Progress from "react-native-progress";

export type BasketballStatsProps = ViewProps & {
  data: BasketballStats;
};

export default function BasketballStats({ data }: BasketballStatsProps) {
  return (
    <View>
      <View style={styles.frameParent}>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text, styles.textTypo1]}>{data.nog}</Text>
          <Text style={[styles.text1, styles.textTypo]}>경기수</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text2, styles.textTypo1]}>{data.score}</Text>
          <Text style={[styles.text1, styles.textTypo]}>득점</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text4, styles.textTypo1]}>{data.min}</Text>
          <Text style={[styles.text1, styles.textTypo]}>출전 시간</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text6, styles.textTypo1]}>{data.rb}</Text>
          <Text style={[styles.text1, styles.textTypo]}>리바운드</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text8, styles.textTypo1]}>{data.as}</Text>
          <Text style={[styles.text1, styles.textTypo]}>어시스트</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text10, styles.textTypo1]}>{data.st}</Text>
          <Text style={[styles.text1, styles.textTypo]}>스틸</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text12, styles.textTypo1]}>{data.bl}</Text>
          <Text style={[styles.text1, styles.textTypo]}>블록슛</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.text14, styles.textTypo1]}>{data.foul}</Text>
          <Text style={[styles.text1, styles.textTypo]}>파울</Text>
        </View>
      </View>
      <View style={styles.frameGroup}>
        <View style={[styles.frameContainer, styles.parent5FlexBox]}>
          <View style={[styles.parent5, styles.parent5Layout]}>
            <Progress.Circle
              progress={
                parseFloat(data.two.split("/")[0]) /
                parseFloat(data.two.split("/")[1])
              }
              size={72}
              thickness={5}
              showsText={true}
              textStyle={styles.text16}
              direction="counter-clockwise"
              unfilledColor="#FAFAFA"
              color={Color.main}
              borderWidth={0}
              animated={false}
              formatText={(progress) => {
                return (
                  <Text style={styles.text16}>
                    <Text style={styles.text17}>{data.two.split("/")[0]}</Text>
                    <Text style={styles.text18}>/{data.two.split("/")[1]}</Text>
                  </Text>
                );
              }}
            />
          </View>
          <Text style={[styles.text19, styles.textTypo]}>2점슛(시도)</Text>
        </View>
        <View style={[styles.frameContainer, styles.parent5FlexBox]}>
          <View style={[styles.parent5, styles.parent5Layout]}>
            <Progress.Circle
              progress={
                parseFloat(data.three.split("/")[0]) /
                parseFloat(data.three.split("/")[1])
              }
              size={72}
              thickness={5}
              showsText={true}
              textStyle={styles.text16}
              direction="counter-clockwise"
              unfilledColor="#FAFAFA"
              color={Color.main}
              borderWidth={0}
              animated={false}
              formatText={(progress) => {
                return (
                  <Text style={styles.text16}>
                    <Text style={styles.text17}>
                      {data.three.split("/")[0]}
                    </Text>
                    <Text style={styles.text18}>
                      /{data.three.split("/")[1]}
                    </Text>
                  </Text>
                );
              }}
            />
          </View>
          <Text style={[styles.text19, styles.textTypo]}>3점슛(시도)</Text>
        </View>
        <View style={[styles.frameContainer, styles.parent5FlexBox]}>
          <View style={[styles.parent5, styles.parent5Layout]}>
            <Progress.Circle
              progress={
                parseFloat(data.ft.split("/")[0]) /
                parseFloat(data.ft.split("/")[1])
              }
              size={72}
              thickness={5}
              showsText={true}
              textStyle={styles.text16}
              direction="counter-clockwise"
              unfilledColor="#FAFAFA"
              color={Color.main}
              borderWidth={0}
              animated={false}
              formatText={(progress) => {
                return (
                  <Text style={styles.text16}>
                    <Text style={styles.text17}>{data.ft.split("/")[0]}</Text>
                    <Text style={styles.text18}>/{data.ft.split("/")[1]}</Text>
                  </Text>
                );
              }}
            />
          </View>
          <Text style={[styles.text19, styles.textTypo]}>자유투(시도)</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textTypo1: {
    textAlign: "right",
    lineHeight: 34,
    fontSize: FontSize.size_5xl,
    top: 25,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.russoOneRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.pretendard,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_xs,
  },
  parent5FlexBox: {
    gap: 5,
    alignItems: "center",
  },
  parent5Layout: {
    height: 72,
    width: 72,
  },
  text: {
    left: 104,
  },
  text1: {
    top: 10,
    left: 10,
    color: Color.grayGray300,
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.pretendard,
    fontWeight: "600",
    lineHeight: 17,
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
  text6: {
    right: 10,
  },
  text8: {
    right: 10,
  },
  text10: {
    right: 10,
  },
  text12: {
    right: 10,
  },
  text14: {
    right: 10,
  },
  frameParent: {
    marginLeft: -149.5,
    top: 354,
    width: 300,
    flexWrap: "wrap",
    alignContent: "flex-start",
    gap: 10,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  text17: {
    fontSize: FontSize.size_xl,
  },
  text18: {
    fontSize: FontSize.size_xs,
  },
  text16: {
    zIndex: 0,
    textAlign: "left",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.russoOneRegular,
  },
  frameChild: {
    marginLeft: -36,
    bottom: 0,
    zIndex: 1,
    left: "50%",
    position: "absolute",
    height: 72,
  },
  parent5: {
    borderRadius: Border.br_80xl,
    justifyContent: "center",
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_mini,
    gap: 5,
    alignItems: "center",
  },
  text19: {
    alignSelf: "stretch",
    color: Color.grayGray800,
    textAlign: "center",
  },
  frameContainer: {
    width: 72,
    gap: 5,
  },
  frameGroup: {
    marginLeft: -137.5,
    top: 230,
    gap: 30,
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  view: {
    backgroundColor: Color.backgroundBg50,
    flex: 1,
    width: "100%",
    height: 851,
    overflow: "hidden",
  },
});
