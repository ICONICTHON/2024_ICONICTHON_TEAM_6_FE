import { ViewProps } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "@/constants/GlobalStyles";
import donggukImage from "../../assets/pngs/rectangle-9805.png";
import akoImage from "../../assets/pages/mypage/-designed-by--1.png";
import { useEffect, useState } from "react";
import { apiGet } from "@/hooks/useApiGet";

export type EventCardInDetailProps = ViewProps & {
  eventId: string;
};

export default function EventCardInDetail({ eventId }: EventCardInDetailProps) {
  const [event, setEvent] = useState({
    img: [
      Image.resolveAssetSource(akoImage).uri,
      Image.resolveAssetSource(akoImage).uri,
    ],
    league: "...",
    location: "...",
    score: ["?", "?"],
    sports_type: "...",
    teams: ["...", "..."],
  });

  useEffect(() => {
    const fetch = async () => {
      let res = await apiGet(`/api/v1/event/simple/${eventId}`);
      setEvent(res.body);
      // console.log(res.body);
    };
    fetch();
  }, []);

  return (
    <View style={styles.kusfU26Parent}>
      <Text style={[styles.kusfU2, styles.text5Typo]} numberOfLines={1}>
        {event.league}
      </Text>
      <Text style={styles.text} numberOfLines={1}>
        {event.location}
      </Text>
      <Text style={[styles.text1, styles.textTypo]}>
        {event.score[0]} : {event.score[1]}
      </Text>
      <View style={[styles.frameParent, styles.framePosition]}>
        <View style={styles.frameChildLayout}>
          <Image
            style={[styles.image717Icon]}
            resizeMode="contain"
            source={{ uri: event.img[0] }}
          />
        </View>
        <Text style={styles.text2}>{event.teams[0]}</Text>
      </View>
      <View style={[styles.frameGroup, styles.framePosition]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="contain"
          source={{ uri: event.img[1] }}
        />
        <Text style={styles.text2}>{event.teams[1]}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginLeft: -25.5,
    top: 37,
    fontSize: 12,
    lineHeight: 17,
    color: Color.grayGray300,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.pretendard,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    marginLeft: -40,
    width: 80,
    top: 83,
    fontSize: 24,
    lineHeight: 34,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  frameParent: {
    left: 40,
  },
  image717Icon: {
    // marginTop: -34,
    // marginLeft: -26,
    // top: "50%",
    width: 72,
    height: 72,
  },
  frameChildLayout: {
    height: 72,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameChild: {
    maxWidth: "100%",
    width: "100%",
  },
  framePosition: {
    gap: 4,
    alignItems: "center",
    width: 72,
    top: 49,
    position: "absolute",
  },
  frameGroup: {
    left: 231,
  },

  text2: {
    color: Color.colorBlack,
    alignSelf: "stretch",
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.pretendard,
    lineHeight: 20,
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
  },
  textTypo: {
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.pretendard,
    fontWeight: "600",
    letterSpacing: -0.1,
  },
  text5Typo: {
    color: Color.grayGray800,
    textAlign: "center",
    fontFamily: FontFamily.pretendard,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
  },
  kusfU2: {
    marginLeft: -84.5,
    top: 17,
    textAlign: "center",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  kusfU26Parent: {
    marginLeft: -171.5,
    marginTop: 73,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: 16,
    height: 160,
    width: 343,
    left: "50%",
    // position: "absolute",
    backgroundColor: Color.color,
  },
});
