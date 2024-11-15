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

type SoccerRankRecord = {
  ranking: string;
  nog: string;
  win_point: string;
  wins: string;
  draw: string;
  lose: string;
  score: string;
  loss: string;
  margin: string;
  as: string;
  yellow: string;
  red: string;
};

export type SoccerRankCardProps = ViewProps & {
  data: SoccerRankRecord;
  isOpen: boolean;
  onPress: Function;
  univName: string;
};

export default function SoccerRankCard({
  data,
  univName,
  isOpen,
  onPress,
  style,
}: SoccerRankCardProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={[styles.view1, style, { height: isOpen ? 88 : 40 }]}
    >
      <View
        style={[
          styles.view2,
          styles.viewSpaceBlock,
          {
            backgroundColor: isOpen
              ? Color.colorYellowgreen
              : Color.colorWhitesmoke_100,
          },
        ]}
      >
        <Text style={[styles.text8, styles.textClr]}>{data.ranking}</Text>
        <Text
          style={[styles.text9, styles.textClr]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {univName}
        </Text>
        <Text style={[styles.text8, styles.textClr]}>{data.nog}</Text>
        <Text style={[styles.text8, styles.textClr]}>{data.win_point}</Text>
        <Text style={[styles.text8, styles.textClr]}>{data.wins}</Text>
        <Text style={[styles.text8, styles.textClr]}>{data.draw}</Text>
        <Text style={[styles.text8, styles.textClr]}>{data.lose}</Text>
        <Text style={[styles.text8, styles.textClr]}>{data.score}</Text>
      </View>
      {isOpen ? (
        <View style={[styles.frameContainer, styles.wrapperSpaceBlock]}>
          <View style={styles.container}>
            <Text style={[styles.text16, styles.textClr]}>실점</Text>
            <Text style={[styles.text17, styles.textClr]}>{data.loss}</Text>
          </View>
          <View style={styles.container}>
            <Text style={[styles.text16, styles.textClr]}>득실</Text>
            <Text style={[styles.text17, styles.textClr]}>{data.margin}</Text>
          </View>
          <View style={styles.container}>
            <Text style={[styles.text16, styles.textClr]}>도움</Text>
            <Text style={[styles.text17, styles.textClr]}>{data.as}</Text>
          </View>
          <View style={styles.container}>
            <Text style={[styles.text16, styles.textClr]}>경고</Text>
            <Text style={[styles.text23, styles.textClr]}>{data.yellow}</Text>
          </View>
          <View style={styles.container}>
            <Text style={[styles.text16, styles.textClr]}>퇴장</Text>
            <Text style={[styles.text23, styles.textClr]}>{data.red}</Text>
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text9: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.4,
    width: 72,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "600",
    color: Color.grayGray800,
  },
  wrapperSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameContainer: {
    marginLeft: -171.5,
    top: 40,
    left: "50%",
    flexDirection: "row",
    paddingHorizontal: Padding.p_11xl,
    width: 343,
    position: "absolute",
  },
  text23: {
    textAlign: "center",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
  },
  text17: {
    textAlign: "center",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  text16: {
    fontWeight: "500",
    color: Color.grayGray800,
    textAlign: "center",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  container: {
    width: 21,
    alignItems: "center",
  },
  textClr: {
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
  },
  text8: {
    fontSize: FontSize.size_sm,
    width: 20,
    fontWeight: "500",
    color: Color.grayGray800,
    textAlign: "center",
    letterSpacing: -0.3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    letterSpacing: -0.4,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
  },
  textFlexBox: {
    justifyContent: "center",
    display: "flex",
    color: Color.grayGray800,
    textAlign: "center",
    alignItems: "center",
  },
  viewSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
  },
  view2: {
    top: 0,
    // backgroundColor: Color.colorYellowgreen,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    width: 343,
    borderBottomWidth: 1,
    borderColor: Color.grayGray50,
    borderStyle: "solid",
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },

  view1: {
    marginTop: 8,
    width: 343,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.grayGray50,
  },
});
