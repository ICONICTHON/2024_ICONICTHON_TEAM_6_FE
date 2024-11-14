import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
} from "../../../constants/GlobalStyles";
import { Stack, useLocalSearchParams } from "expo-router";
import { apiGet } from "@/hooks/useApiGet";
import akoImage from "../../../assets/pages/mypage/-designed-by--1.png";

export function sportsTypeToKoKr(sports_type: string): string {
  const dict = {
    baseball: "야구",
    basketball: "농구",
    soccer: "축구",
  };
  return dict[sports_type];
}

export default function Coach() {
  const { coachId } = useLocalSearchParams<{ coachId: string }>();
  const [coachData, setCoachrData] = useState({
    careers: {
      선수경력: [["", "", ""]],
      지도자경력: [["", "", ""]],
    },
    img: "",
    name: "",
    position: "",
    sports_type: "",
  });
  useEffect(() => {
    const fetch = async () => {
      let res = await apiGet(`/api/v1/coach/coach/${coachId}`);
      console.log(res.body);
      setCoachrData(res.body);

      // console.log(res.body);
    };
    fetch();
  }, []);

  return (
    <View style={styles.view}>
      <Stack.Screen
        options={{
          title: "지도자 정보",
          headerTintColor: "#000",
          headerStyle: {
            backgroundColor: Color.main,
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      <View style={styles.child} />
      {/* <View style={styles.item} /> */}
      <Image
        source={{
          uri:
            coachData.img == ""
              ? Image.resolveAssetSource(akoImage).uri
              : coachData.img,
        }}
        resizeMode="cover"
        style={[styles.item]}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textClr]}>
          #{sportsTypeToKoKr(coachData.sports_type)}
        </Text>
        <View style={styles.frameWrapper}>
          <View style={[styles.group, styles.groupFlexBox]}>
            <Text style={[styles.text1, styles.textTypo1]}>
              {coachData.name}
            </Text>
            <View style={[styles.wrapper, styles.groupFlexBox]}>
              <Text style={styles.text2}>{coachData.position}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.container}>
          <Text style={[styles.text3, styles.textTypo]}>| 선수 경력</Text>
          {coachData.careers.선수경력 &&
            coachData.careers.선수경력.map((v, i, a) => {
              return (
                <Text style={[styles.text4, styles.textTypo]} key={i}>
                  {v[0]} ~ {v[1]} : {v[2]}
                </Text>
              );
            })}
        </View>
        <View style={styles.container}>
          <Text style={[styles.text3, styles.textTypo]}>| 지도자 경력</Text>
          <View style={styles.skKiaLgParent}>
            {coachData.careers.지도자경력 &&
              coachData.careers.지도자경력.map((v, i, a) => {
                return (
                  <Text style={[styles.text4, styles.textTypo]} key={i}>
                    {v[0]} ~ {v[1]} : {v[2]}
                  </Text>
                );
              })}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textClr: {
    color: Color.colorDarkslateblue,
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  groupFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo1: {
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
  },
  textTypo: {
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
  },
  child: {
    // marginLeft: -187.5,
    top: 0,
    // left: "50%",
    borderBottomRightRadius: Border.br_21xl,
    borderBottomLeftRadius: Border.br_21xl,
    backgroundColor: "#cff459",
    width: "100%",
    height: 250,
    position: "absolute",
  },
  item: {
    top: 70,
    left: 185,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    backgroundColor: "#a2a2a2",
    width: 150,
    height: 180,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    fontWeight: "700",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 10,
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
    alignSelf: "stretch",
  },
  text1: {
    fontSize: 24,
    lineHeight: 34,
    color: Color.grayGray800,
    textAlign: "right",
    fontWeight: "600",
  },
  text2: {
    color: Color.color,
    textAlign: "left",
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.pretendard,
  },
  wrapper: {
    borderRadius: 99,
    backgroundColor: Color.colorDarkslateblue,
    paddingHorizontal: 12,
    paddingVertical: 0,
  },
  group: {
    gap: 10,
  },
  frameWrapper: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  parent: {
    top: 109,
    width: 118,
    gap: 10,
    alignItems: "center",
    left: 40,
    position: "absolute",
  },
  text3: {
    fontWeight: "600",
    color: Color.colorDarkslateblue,
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  text4: {
    color: Color.grayGray500,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  container: {
    alignSelf: "stretch",
    gap: 10,
  },
  skKiaLgParent: {
    gap: 8,
    alignSelf: "stretch",
  },
  frameParent: {
    top: 290,
    width: 295,
    gap: 40,
    left: 40,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.backgroundBg50,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});
