import {
  Text,
  StyleSheet,
  View,
  ViewProps,
  TouchableOpacity,
} from "react-native";
import {
  Padding,
  Border,
  FontFamily,
  FontSize,
  Color,
} from "../../constants/GlobalStyles";

export type StatsRadioProps = ViewProps & {
  index: number;
  setIndex: Function;
};

export default function StatsRadio({
  index,
  setIndex,
  style,
}: StatsRadioProps) {
  return (
    <View style={[styles.view, style]}>
      <View style={styles.frameParent}>
        {["쿼터", "기록", "슛 기록"].map((v, i, a) => {
          return (
            <TouchableOpacity
              style={[
                index == i ? styles.wrapper : styles.container,
                styles.wrapperFlexBox,
              ]}
              onPress={() => {
                setIndex(i);
              }}
            >
              <Text
                style={[
                  index == i ? styles.text : styles.text1,
                  styles.textTypo,
                ]}
              >
                {v}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    width: 88,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.pretendard,
    lineHeight: 20,
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
  },
  text: {
    fontWeight: "600",
    color: Color.colorDarkslateblue,
  },
  wrapper: {
    backgroundColor: Color.main,
  },
  text1: {
    fontWeight: "500",
    color: Color.grayGray500,
  },
  container: {
    backgroundColor: Color.grayGray50,
  },
  frameParent: {
    // position: "absolute",
    marginHorizontal: "auto",
    // top: 0,
    width: 304,
    // left: "50%",
    gap: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  view: {
    backgroundColor: Color.color,
    flex: 1,
    width: "100%",

    overflow: "hidden",
  },
});
