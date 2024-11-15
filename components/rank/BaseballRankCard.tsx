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

type BaseballRankRecord = {
  ranking: string;
  nog: string;
  win_point: string;
  wins: string;
  draw: string;
  lose: string;
  win_rate: string;
  oba: string;
  sa: string;
};
export type BaseballRankCardProps = ViewProps & {
  data: BaseballRankRecord;
  isOpen: boolean;
  onPress: Function;
  univName: string;
};
export default function BaseballRankCard({
  style,
  isOpen,
  onPress,
  data,
  univName,
}: BaseballRankCardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.view1,
          styles.view1FlexBox,
          {
            backgroundColor: isOpen ? Color.colorYellowgreen : Color.grayGray50,
          },
        ]}
      >
        <Text style={[styles.text, styles.textFlexBox]}>{data.ranking}</Text>
        <Text
          style={[styles.text1, styles.textFlexBox]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {univName}
        </Text>
        <Text style={[styles.text2, styles.textFlexBox]}>{data.nog}</Text>
        <Text style={[styles.text2, styles.textFlexBox]}>{data.wins}</Text>
        <Text style={[styles.text4, styles.textFlexBox]}>{data.draw}</Text>
        <Text style={[styles.text4, styles.textFlexBox]}>{data.lose}</Text>
        <Text style={[styles.text7, styles.textFlexBox]}>{data.win_rate}</Text>
        {/* <Text style={[styles.text4, styles.textFlexBox]}>2</Text> */}
      </View>
      {isOpen ? (
        <View style={[styles.frameGroup, styles.wrapperBorder]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text64, styles.textClr]}>출루율</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text64, styles.textClr]}>{data.oba}</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text64, styles.textClr]}>장타율</Text>
          </View>
          <View style={styles.wrapperFlexBox}>
            <Text style={[styles.text64, styles.textClr]}>{data.sa}</Text>
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textClr: {
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
  },
  text64: {
    fontWeight: "500",
    color: Color.grayGray800,
    textAlign: "center",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
    width: "100%",
  },
  wrapperFlexBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  wrapper: {
    borderWidth: 0,
    borderColor: Color.grayGray100,
    borderStyle: "solid",
  },
  wrapperBorder: {
    borderColor: Color.grayGray100,
    borderStyle: "solid",
    borderWidth: 0,
  },
  frameGroup: {
    borderWidth: 0,
    // display: "none",
    flexDirection: "row",
    borderStyle: "solid",
    backgroundColor: Color.grayGray50,
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
  },
  view1FlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "space-between",
    width: 343,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  view1: {
    backgroundColor: Color.grayGray50,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "space-between",
    width: 343,
    borderRadius: Border.br_5xs,
  },
  textFlexBox: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    alignItems: "center",
  },
  text: {
    width: 18,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
  },
  text1: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.4,
    fontWeight: "600",
    width: 72,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
  },
  text2: {
    width: 20,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
  },
  text4: {
    width: 12,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
  },
  text7: {
    width: 44,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
  },
  view: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 343,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
  },
});
