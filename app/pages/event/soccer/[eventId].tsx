import { Image, StyleSheet, Text, View } from "react-native";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "@/constants/GlobalStyles";
import * as Progress from "react-native-progress";

import { Stack, useLocalSearchParams } from "expo-router";
import EventCardInDetail from "@/components/event/EventCardInDetail";
import CompareRecord from "@/components/event/CompareRecord";
import { apiGet, useApiGet } from "@/hooks/useApiGet";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function SoccerEvent() {
  const { eventId } = useLocalSearchParams<{ eventId: string }>();
  const [recordData, setRecordData] = useState({
    team_record: [
      {
        as: "0",
        first: "0",
        red: "0",
        second: "0",
        yellow: "0",
      },
      {
        as: "0",
        first: "0",
        red: "0",
        second: "0",
        yellow: "0",
      },
    ],
  });

  //   const { body: recordData } = useApiGet(`/api/v1/event/detail/${eventId}`);

  useEffect(() => {
    const fetch = async () => {
      let res = await apiGet(`/api/v1/event/detail/${eventId}`);

      setRecordData(res.body);
      //   console.log(res.body);
    };
    fetch();
  }, []);

  return (
    <View style={styles.view}>
      <Stack.Screen
        options={{
          title: "경기 정보",
          headerTintColor: Color.colorDarkslateblue,
          headerStyle: {
            backgroundColor: Color.main,
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      <LinearGradient
        colors={[Color.main, "#fff"]}
        style={[styles.child, styles.childPosition]}
      />
      <EventCardInDetail eventId={eventId} />
      <View style={{ marginTop: 45 }}>
        <CompareRecord
          stats={[
            recordData.team_record[0].first,
            recordData.team_record[1].first,
          ]}
          max={7}
          title="전반"
        />
        <CompareRecord
          stats={[
            recordData.team_record[0].second,
            recordData.team_record[1].second,
          ]}
          max={7}
          title="후반"
        />
        <CompareRecord
          stats={[recordData.team_record[0].as, recordData.team_record[1].as]}
          max={7}
          title="도움"
        />
        <CompareRecord
          stats={[
            recordData.team_record[0].yellow,
            recordData.team_record[1].yellow,
          ]}
          max={7}
          title="경고"
        />
        <CompareRecord
          stats={[recordData.team_record[0].red, recordData.team_record[1].red]}
          max={7}
          title="퇴장"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  childPosition: {
    left: "50%",
    position: "absolute",
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
  textTypo: {
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.pretendard,
    fontWeight: "600",
    letterSpacing: -0.1,
  },

  frameParentFlexBox: {
    gap: 7,
    alignContent: "flex-end",
    flexWrap: "wrap",
    left: 16,
    alignItems: "flex-end",
    flexDirection: "row",
    width: "100%",
    position: "absolute",
  },
  frameLayout: {
    height: 8,
    borderRadius: Border.br_80xl,
  },
  child: {
    marginLeft: "-50%",
    top: 0,
    borderBottomRightRadius: Border.br_21xl,
    borderBottomLeftRadius: Border.br_21xl,
    backgroundColor: "#cff459",
    // backgroundColor: "linear-gradient(180deg, #CFF459 0%, #FFF 100%)",
    width: "100%",
    height: 300,
  },

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

  frameParent: {
    left: 40,
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
  text5: {
    textAlign: "center",
    flex: 1,
  },
  text6: {
    textAlign: "right",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    color: Color.main,
    flex: 1,
  },
  parent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: 343,
  },
  frameItem: {
    backgroundColor: Color.pOINT,
    width: 66,
    height: 8,
    borderRadius: Border.br_80xl,
  },
  rectangleWrapper: {
    width: 170,
    backgroundColor: Color.colorGainsboro,
    height: 8,
    borderRadius: Border.br_80xl,
    alignItems: "flex-end",
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
  frameContainer: {
    top: 393,
  },
  frameView: {
    top: 458,
  },
  frameParent1: {
    top: 523,
  },
  frameParent2: {
    top: 588,
  },
  frameParent3: {
    top: 328,
  },
  view: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.color,
  },
});
