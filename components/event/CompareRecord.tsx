import { Image, StyleSheet, Text, View, ViewProps } from "react-native";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "@/constants/GlobalStyles";
import * as Progress from "react-native-progress";

export type CompareRecordProps = ViewProps & {
  stats: string[];
  max: number;
  title: string;
};

export default function CompareRecord({
  style,
  stats,
  max,
  title,
}: CompareRecordProps) {
  return (
    <View style={[styles.frameContainer, styles.frameParentFlexBox, style]}>
      <View style={styles.parent}>
        <Text style={styles.text4}>{stats[0]}</Text>
        <Text style={[styles.text5, styles.text5Typo]}>{title}</Text>
        <Text style={[styles.text6, styles.textTypo]}>{stats[1]}</Text>
      </View>
      {/* <View style={[styles.rectangleWrapper, styles.frameLayout]}>
        <View style={[styles.frameItem, styles.frameLayout]} />
      </View> */}
      <Progress.Bar
        progress={1 - parseFloat(stats[0]) / max}
        width={170}
        borderWidth={0}
        unfilledColor={Color.pOINT}
        height={8}
        color={Color.colorGainsboro}
      />
      <Progress.Bar
        progress={parseFloat(stats[1]) / max}
        width={170}
        borderWidth={0}
        unfilledColor={Color.colorGainsboro}
        height={8}
        color={Color.colorDarkslateblue}
      />
      {/* <View style={[styles.rectangleContainer, styles.frameLayout]}>
        <View style={[styles.frameInner, styles.frameLayout]} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  text5Typo: {
    color: Color.grayGray800,
    textAlign: "center",
    fontFamily: FontFamily.pretendard,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
  },
  text5: {
    textAlign: "center",
    flex: 1,
  },
  text4: {
    color: Color.pOINT,
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    fontWeight: "600",
    letterSpacing: -0.1,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    flex: 1,
  },
  parent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: 343,
  },
  frameParentFlexBox: {
    gap: 7,
    alignContent: "flex-end",
    flexWrap: "wrap",
    left: 22,
    alignItems: "flex-end",
    flexDirection: "row",
    width: "100%",

    marginBottom: 30,
    // position: "absolute",
  },
  frameContainer: {
    // top: 393,
  },
  textTypo: {
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.pretendard,
    fontWeight: "600",
    letterSpacing: -0.1,
  },
  text6: {
    textAlign: "right",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    color: Color.main,
    flex: 1,
  },
  rectangleWrapper: {
    width: 170,
    backgroundColor: Color.colorGainsboro,
    height: 8,
    borderRadius: Border.br_80xl,
    alignItems: "flex-end",
  },
  frameItem: {
    backgroundColor: Color.pOINT,
    width: 66,
    height: 8,
    borderRadius: Border.br_80xl,
  },
  frameLayout: {
    height: 8,
    borderRadius: Border.br_80xl,
  },
  frameInner: {
    backgroundColor: Color.main,
    width: 56,
    height: 8,
    borderRadius: Border.br_80xl,
  },
  rectangleContainer: {
    width: 170,
    backgroundColor: Color.colorGainsboro,
    height: 8,
    borderRadius: Border.br_80xl,
  },
});
