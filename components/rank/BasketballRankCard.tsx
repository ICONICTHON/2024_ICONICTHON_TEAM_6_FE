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

type BasketballRankRecord = {
  ranking: string;
  nog: string;
  win_rate: string;
  wins: string;
  lose: string;
  score: string;
  as: string;
  rb: string;
  st: string;
  bl: string;
  two: string;
  three: string;
  ft: string;
};

export type BasketballRankCardProps = ViewProps & {
  data: BasketballRankRecord;
  isOpen: boolean;
  onPress: Function;
  univName: string;
};

export default function BasketballRankCard({
  data,
  univName,
  isOpen,
  onPress,
  style,
}: BasketballRankCardProps) {
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
        <Text style={[styles.text19, styles.textFlexBox]}>{data.ranking}</Text>
        <Text
          style={[styles.text20, styles.textTypo]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {univName}
        </Text>
        <Text style={[styles.text21, styles.textFlexBox]}>{data.nog}</Text>
        <Text style={[styles.text22, styles.textFlexBox]}>{data.win_rate}</Text>
        <Text style={[styles.text21, styles.textFlexBox]}>{data.wins}</Text>
        <Text style={[styles.text21, styles.textFlexBox]}>{data.lose}</Text>
        <Text style={[styles.text22, styles.textFlexBox]}>{data.score}</Text>
        <Text style={[styles.text22, styles.textFlexBox]}>{data.as}</Text>
      </View>
      {isOpen ? (
        <View style={styles.frameGroup}>
          <View style={styles.group}>
            <Text style={[styles.text7, styles.textTypo1]}>리바운드</Text>
            <Text style={styles.textTypo1}>{data.rb}</Text>
          </View>
          <View style={styles.group}>
            <Text style={[styles.text7, styles.textTypo1]}>스틸</Text>
            <Text style={styles.textTypo1}>{data.st}</Text>
          </View>
          <View style={styles.group}>
            <Text style={[styles.text7, styles.textTypo1]}>블록</Text>
            <Text style={styles.textTypo1}>{data.bl}</Text>
          </View>
          <View style={styles.group}>
            <Text style={[styles.text7, styles.textTypo1]}>2점슛</Text>
            <Text style={styles.textTypo1}>{data.two}</Text>
          </View>
          <View style={styles.group}>
            <Text style={[styles.text7, styles.textTypo1]}>3점슛</Text>
            <Text style={styles.textTypo1}>{data.three}</Text>
          </View>
          <View style={styles.group}>
            <Text style={[styles.text7, styles.textTypo1]}>자유투</Text>
            <Text style={styles.textTypo1}>{data.ft}</Text>
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
  textTypo1: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
  },
  text19: {
    width: 18,
    fontWeight: "500",
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
  },
  text20: {
    width: 72,
    justifyContent: "center",
    display: "flex",
    color: Color.grayGray800,
    textAlign: "center",
    alignItems: "center",
    fontWeight: "600",
  },
  text21: {
    width: 20,
    fontWeight: "500",
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
  },
  text22: {
    width: 44,
    fontWeight: "500",
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
  },
  view1: {
    marginTop: 8,
    width: 343,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.grayGray50,
  },
  frameGroup: {
    top: 40,
    paddingHorizontal: 30,
    paddingVertical: 0,
    justifyContent: "space-between",
    marginLeft: -171.5,
    flexDirection: "row",
    width: 343,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  group: {
    alignItems: "center",
  },
  text7: {
    fontWeight: "500",
  },
});
