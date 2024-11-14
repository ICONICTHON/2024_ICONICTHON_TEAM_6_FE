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

export type WeekStripProps = ViewProps & {
  date: Date;
  setDate: Function;
};

export default function WeekStrip({ date, setDate, style }: WeekStripProps) {
  const getNextDay = (currentDate = new Date(), daysToAdd = 1) => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + daysToAdd);
    return nextDate;
  };
  const dayNamesShort = ["일", "월", "화", "수", "목", "금", "토"];
  const dateGapList = [-3, -2, -1, 0, 1, 2, 3];

  return (
    <View style={[styles.frameParent, styles.frameSpaceBlock, style]}>
      {dateGapList.map((value, index, array) => {
        return (
          <TouchableOpacity
            key={index}
            style={[
              value == 0 ? styles.frameView : styles.parent,
              styles.parentSpaceBlock,
            ]}
            onPress={() => {
              setDate(getNextDay(date, value));
            }}
          >
            <Text style={[styles.text, styles.textTypo5]}>
              {dayNamesShort[getNextDay(date, value).getDay()]}
            </Text>
            <Text style={[styles.text1, styles.textSpaceBlock]}>
              {getNextDay(date, value).getDate()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  frameView: {
    borderRadius: 99,
    backgroundColor: Color.main,
    overflow: "hidden",
  },
  textTypo5: {
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
  },
  text: {
    opacity: 0.6,
    textAlign: "center",
    color: Color.grayGray800,
    fontWeight: "500",
    fontFamily: FontFamily.pretendard,
    lineHeight: 22,
    letterSpacing: -0.1,
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
  },
  text1: {
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
    lineHeight: 22,
    fontSize: FontSize.size_base,
    marginTop: 4,
  },
  frameParent: {
    // top: 141,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  frameSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    // width: 375,
    // left: "50%",
    // marginLeft: -187.5,
    // position: "absolute",
  },
  parent: {
    borderRadius: Border.br_xl,
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: 0,
    width: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  textSpaceBlock: {
    marginTop: 4,
    color: Color.grayGray800,
    alignSelf: "stretch",
  },
});
