import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
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
import StatsRadio from "@/components/event/StatsRadio";
import { LinearGradient } from "expo-linear-gradient";

export default function SoccerEvent() {
  const { eventId } = useLocalSearchParams<{ eventId: string }>();
  const [index, setIndex] = useState(0);
  const [recordData, setRecordData] = useState({
    team_record: [
      {
        as: "0",
        bl: "0",
        foul: "0",
        free: "0(0)",
        q1: "0",
        q2: "0",
        q3: "0",
        q4: "0",
        rb: "0",
        steal: "0",
        tree: "0(0)",
        two: "0(0)",
      },
      {
        as: "0",
        bl: "0",
        foul: "0",
        free: "0(0)",
        q1: "0",
        q2: "0",
        q3: "0",
        q4: "0",
        rb: "0",
        steal: "0",
        tree: "0(0)",
        two: "0(0)",
      },
    ],
  });

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
      <ScrollView>
        <LinearGradient
          style={[styles.child, styles.childPosition]}
          colors={[Color.main, "#fff"]}
        />
        <EventCardInDetail eventId={eventId} />
        <View style={{ marginTop: 30 }}>
          <StatsRadio
            index={index}
            setIndex={setIndex}
            style={{ marginBottom: 40 }}
          />
          {index == 0 && (
            <View>
              <CompareRecord
                stats={[
                  recordData.team_record[0].q1,
                  recordData.team_record[1].q1,
                ]}
                max={50}
                title="1쿼터"
              />
              <CompareRecord
                stats={[
                  recordData.team_record[0].q2,
                  recordData.team_record[1].q2,
                ]}
                max={50}
                title="2쿼터"
              />
              <CompareRecord
                stats={[
                  recordData.team_record[0].q3,
                  recordData.team_record[1].q3,
                ]}
                max={50}
                title="3쿼터"
              />
              <CompareRecord
                stats={[
                  recordData.team_record[0].q4,
                  recordData.team_record[1].q4,
                ]}
                max={50}
                title="4쿼터"
              />
            </View>
          )}
          {index == 1 && (
            <View>
              <CompareRecord
                stats={[
                  recordData.team_record[0].rb,
                  recordData.team_record[1].rb,
                ]}
                max={60}
                title="리바운드"
              />
              <CompareRecord
                stats={[
                  recordData.team_record[0].as,
                  recordData.team_record[1].as,
                ]}
                max={50}
                title="어시스트"
              />
              <CompareRecord
                stats={[
                  recordData.team_record[0].steal,
                  recordData.team_record[1].steal,
                ]}
                max={20}
                title="스틸"
              />
              <CompareRecord
                stats={[
                  recordData.team_record[0].bl,
                  recordData.team_record[1].bl,
                ]}
                max={10}
                title="블록슛"
              />
              <CompareRecord
                stats={[
                  recordData.team_record[0].foul,
                  recordData.team_record[1].foul,
                ]}
                max={50}
                title="파울"
              />
            </View>
          )}
          {index == 2 && (
            <View>
              <CompareRecord
                stats={[
                  recordData.team_record[0].two,
                  recordData.team_record[1].two,
                ]}
                max={50}
                title="2점슛(시도)"
              />
              <CompareRecord
                stats={[
                  recordData.team_record[0].tree,
                  recordData.team_record[1].tree,
                ]}
                max={15}
                title="3점슛(시도)"
              />
              <CompareRecord
                stats={[
                  recordData.team_record[0].free,
                  recordData.team_record[1].free,
                ]}
                max={20}
                title="자유투(시도)"
              />
            </View>
          )}
        </View>
      </ScrollView>
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
    width: "100%",
    height: 250,
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
