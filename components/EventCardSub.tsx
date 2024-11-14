import { Border, Color, FontFamily, FontSize } from "@/constants/GlobalStyles";
import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";

export type EventCardSubProps = ViewProps & {
  leagueName: string;
  teams: string[];
  time: string;
  imgs: string[];
  location: string;
  score: string[];
  eventId: string;
  sports_type: string;
};

export default function EventCardSub({
  style,
  leagueName,
  teams,
  time,
  imgs,
  location,
  score,
  eventId,
  sports_type,
}: EventCardSubProps) {
  return (
    <TouchableOpacity
      style={[styles.view, style]}
      onPress={() => {
        router.push({
          pathname: `/pages/event/${sports_type}/[eventId]`,
          params: { eventId: eventId },
        });
      }}
    >
      <Image
        style={[styles.child, styles.itemLayout]}
        resizeMode="cover"
        source={{ uri: imgs[0] }}
      />
      <Image
        style={[styles.item, styles.itemLayout]}
        resizeMode="cover"
        source={{ uri: imgs[1] }}
      />
      <Text style={[styles.kusfU, styles.textTypo1]}>{leagueName}</Text>
      <Text style={[styles.text, styles.textTypo1]}>
        {time} {location}
      </Text>
      <View style={styles.frameParent}>
        <View style={styles.groupFlexBox}>
          <Text style={styles.text1}>{score[0]}</Text>
          <Text style={[styles.text2, styles.textTypo]}>:</Text>
          <Text style={[styles.text3, styles.textTypo]}>{score[1]}</Text>
        </View>
        <View style={[styles.group, styles.groupFlexBox]}>
          <Text style={[styles.text4, styles.textLayout]}>{teams[0]}</Text>
          <Text style={[styles.vs, styles.vsTypo]}>vs</Text>
          <Text style={[styles.text5, styles.vsTypo]}>{teams[1]}</Text>
        </View>
      </View>
      <Image
        style={styles.uplusCircleIcon}
        resizeMode="cover"
        source={require("../assets/pages/calendar/upluscircle1.png")}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  itemLayout: {
    opacity: 0.1,
    height: 160,
    width: 160,
    top: -26,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    left: 10,
    position: "absolute",
  },
  textTypo: {
    marginLeft: 8,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 32,
    letterSpacing: -0.1,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.pretendard,
  },
  groupFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  textLayout: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  vsTypo: {
    marginLeft: 4,
    fontWeight: "600",
    letterSpacing: -0.1,
    textAlign: "left",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
  },
  child: {
    left: -16,
  },
  item: {
    left: 199,
  },
  kusfU: {
    top: 10,
    fontWeight: "700",
    color: Color.grayGray800,
  },
  text: {
    top: 30,
    fontWeight: "500",
    color: Color.grayGray500,
  },
  text1: {
    textAlign: "center",
    lineHeight: 32,
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    letterSpacing: -0.1,
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
  },
  text2: {
    color: Color.grayGray800,
  },
  text3: {
    color: Color.colorBlack,
  },
  text4: {
    fontWeight: "600",
    letterSpacing: -0.1,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
  },
  vs: {
    fontSize: FontSize.size_lg,
  },
  text5: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  group: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    marginTop: -15.5,
    marginLeft: -51.5,
    top: "50%",
    left: "50%",
    width: 102,
    alignItems: "center",
    position: "absolute",
  },
  uplusCircleIcon: {
    top: 5,
    right: 5,
    width: 36,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  view: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.grayWhite0,
    borderStyle: "solid",
    borderColor: Color.grayGray100,
    borderWidth: 1,
    width: 343,
    height: 108,
    overflow: "hidden",
  },
});
