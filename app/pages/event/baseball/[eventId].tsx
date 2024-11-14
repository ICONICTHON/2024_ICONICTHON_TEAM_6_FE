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
        error: "0",
        hit: "0",
        hit2: "0",
        hit3: "0",
        hr: "0",
        k: "0",
        obp: "0",
        score: "0",
        score_detail: {
          base_on_balls: "0",
          errors: "0",
          hits: "0",
          i1: "0",
          i2: "0",
          i3: "0",
          i4: "0",
          i5: "0",
          i6: "0",
          i7: "0",
          i8: "0",
          i9: "0",
          runs: "0",
        },
        slg: "0",
        steal: "0",
      },
      {
        error: "0",
        hit: "0",
        hit2: "0",
        hit3: "0",
        hr: "0",
        k: "0",
        obp: "0",
        score: "0",
        score_detail: {
          base_on_balls: "0",
          errors: "0",
          hits: "0",
          i1: "0",
          i2: "0",
          i3: "0",
          i4: "0",
          i5: "0",
          i6: "0",
          i7: "0",
          i8: "0",
          i9: "0",
          runs: "0",
        },
        slg: "0",
        steal: "0",
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
      <View style={{ marginTop: 30 }}>
        <View style={[styles.frameParent, styles.frameFlexBox]}>
          <View style={styles.frameGroup}>
            <View style={styles.homeWrapper}>
              <Text style={styles.home}>HOME</Text>
            </View>
            <View style={styles.homeWrapper}>
              <Text style={styles.home}>AWAY</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.frameView}>
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>1</Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[0].score_detail.i1}
                </Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[1].score_detail.i1}
                </Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>2</Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[0].score_detail.i2}
                </Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[1].score_detail.i2}
                </Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>3</Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[0].score_detail.i3}
                </Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[1].score_detail.i3}
                </Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>4</Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[0].score_detail.i4}
                </Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[1].score_detail.i4}
                </Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>5</Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[0].score_detail.i5}
                </Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[1].score_detail.i5}
                </Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>6</Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[0].score_detail.i6}
                </Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[1].score_detail.i6}
                </Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>7</Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[0].score_detail.i7}
                </Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[1].score_detail.i7}
                </Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>8</Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[0].score_detail.i8}
                </Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[1].score_detail.i8}
                </Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>9</Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[0].score_detail.i9}
                </Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[1].score_detail.i9}
                </Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>H</Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[0].score_detail.hits}
                </Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[1].score_detail.hits}
                </Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>E</Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[0].score_detail.errors}
                </Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[1].score_detail.errors}
                </Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>B</Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[0].score_detail.base_on_balls}
                </Text>
              </View>
              <View style={[styles.container, styles.wrapperFlexBox]}>
                <Text style={[styles.text1, styles.textTypo]}>
                  {recordData.team_record[1].score_detail.base_on_balls}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Image
            style={[styles.icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../../../../assets/pages/event/title.png")}
          />
          <Image
            style={[styles.childI, styles.iconPosition]}
            resizeMode="cover"
            source={require("../../../../assets/pages/event/group-560118402.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  childPosition: {
    left: "50%",
    position: "absolute",
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

  parent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: 343,
  },

  frameFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  wrapperFlexBox: {
    padding: Padding.p_11xs,
    alignItems: "center",
    borderRadius: Border.br_80xl,
    justifyContent: "center",
  },
  textTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
    textAlign: "center",
    fontFamily: FontFamily.pretendard,
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  home: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    fontWeight: "600",
    color: Color.color,
    textAlign: "center",
    fontFamily: FontFamily.pretendard,
  },
  homeWrapper: {
    backgroundColor: Color.colorDarkslateblue,
    width: 48,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    alignItems: "center",
    height: 20,
    borderRadius: Border.br_80xl,
    justifyContent: "center",
    flexDirection: "row",
  },
  frameGroup: {
    gap: 10,
  },
  text: {
    fontWeight: "700",
    color: Color.colorDarkslateblue,
  },
  wrapper: {
    height: 18,
    alignSelf: "stretch",
    padding: Padding.p_11xs,
  },
  text1: {
    fontWeight: "500",
    color: Color.grayGray800,
  },
  container: {
    backgroundColor: Color.grayGray50,
    width: 20,
    height: 20,
  },
  frameView: {
    width: 20,
    alignItems: "center",
    gap: 10,
  },
  frameContainer: {
    gap: 4,
  },
  frameParent: {
    marginLeft: -171.5,
    // top: 333,
    gap: 11,
    left: "50%",
    position: "absolute",
  },
  icon: {
    marginLeft: -64.5,
    top: 134,
    width: 130,
    height: 46,
  },
  childI: {
    marginTop: 165,
    marginLeft: -63.5,
    top: "50%",
    width: 128,
    height: 120,
  },

  view: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.color,
  },
});
