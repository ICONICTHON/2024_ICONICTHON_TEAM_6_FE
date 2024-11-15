import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Platform,
  ActivityIndicator,
} from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
} from "../../../constants/GlobalStyles";
import { HeaderButtons } from "react-navigation-header-buttons";
import { MenuView } from "@react-native-menu/menu";
import SoccerRankCard from "@/components/rank/SoccerRankCard";
import { router, Stack, useNavigation } from "expo-router";
import YearLeagueRankOption from "@/components/rank/YearLeagueRankOption";
import SportsSelectRankOption from "@/components/rank/SportsSelectRankOption";
import { apiGet } from "@/hooks/useApiGet";

export default function RankSoccer() {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [leagueData, setLeagueData] = useState(null);
  // const initArr = new Array(Object.keys(data).length).fill(false);
  const [isOpens, setIsOpens] = useState([]);
  const [openYear, setOpenYear] = useState(false);
  const [valueYear, setValueYear] = useState(null);
  const [itemsYear, setItemsYear] = useState([
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
    { label: "2020", value: "2020" },
  ]);
  const [openLeague, setOpenLeague] = useState(false);
  const [valueLeague, setValueLeague] = useState(null);
  const [itemsLeague, setItemsLeague] = useState([
    { label: "KUSF 대학농구 (남) U-리그", value: "KUSF 대학농구 (남) U-리그" },
    {
      label: "KUSF 대학축구 U리그2 6권역",
      value: "KUSF 대학축구 U리그2 6권역",
    },
    { label: "KUSF 대학야구 U-리그 A조", value: "KUSF 대학야구 U-리그 A조" },
  ]);
  useEffect(() => {
    const fetch = async () => {
      let res = await apiGet(`/api/v1/rank/league/soccer`);
      console.log(res.body);
      setLeagueData(res.body);
    };
    fetch();
  }, []);

  useEffect(() => {
    if (leagueData != null) {
      const ys = Object.keys(leagueData)
        .sort((a, b) => {
          if (a < b) return 1;
          if (a > b) return -1;
          if (a === b) return 0;
          return 0;
        })
        .map((v, i, a) => {
          return { label: v, value: v };
        });
      setItemsYear(ys);
      if (valueYear == null) {
        setValueYear(itemsYear[0].value);
        // console.log(valueLeague);
      }
    }
  }, [leagueData]);

  useEffect(() => {
    if (leagueData != null && leagueData != undefined) {
      const ls = leagueData[valueYear].map((v: any, i: any, a: any) => {
        return { label: v, value: v };
      });
      setValueLeague(leagueData[valueYear][0]);
      setItemsLeague(ls);
    }
  }, [valueYear]);

  useEffect(() => {
    const fetch = async () => {
      let res = await apiGet(
        `api/v1/rank/rank/${valueYear}/${valueLeague}/soccer`
      );
      console.log(res.body);
      setData(res.body);
    };
    fetch();
  }, [valueLeague, valueYear]);

  useEffect(() => {
    if (data != null) {
      const initArr = new Array(data.sorted_league_record.length).fill(false);
      setIsOpens(initArr);
    }
  }, [data]);

  useEffect(() => {
    navigation.setOptions({ headerShown: true, title: "순위" });
  }, [navigation]);
  return (
    <View style={styles.view}>
      <Stack.Screen
        options={{
          animation: "none",
          headerRight: () => (
            <HeaderButtons>
              <SportsSelectRankOption sports_type="축구" />
            </HeaderButtons>
          ),
        }}
      />
      <YearLeagueRankOption
        openYear={openYear}
        openLeague={openLeague}
        valueYear={valueYear}
        valueLeague={valueLeague}
        itemsYear={itemsYear}
        itemsLeague={itemsLeague}
        setOpenYear={setOpenYear}
        setOpenLeague={setOpenLeague}
        setValueYear={setValueYear}
        setValueLeague={setValueLeague}
        setItemsYear={setItemsYear}
        setItemsLeague={setItemsLeague}
      />
      <ScrollView>
        <View style={styles.frameParent}>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo2]}>순위</Text>
            <Text style={[styles.text1, styles.textFlexBox]}>학교</Text>
            <Text style={[styles.text2, styles.textTypo1]}>경기수</Text>
            <Text style={[styles.text3, styles.textTypo1]}>승</Text>
            <Text style={[styles.text4, styles.textTypo1]}>무</Text>
            <Text style={[styles.text5, styles.textTypo1]}>패</Text>
            <Text style={[styles.text6, styles.textTypo1]}>승점</Text>
            <Text style={[styles.text7, styles.textTypo1]}>득점</Text>
          </View>
          {data == null && (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                padding: 10,
              }}
            >
              <ActivityIndicator />
            </View>
          )}
          {data != null &&
            data.sorted_league_record.map(
              (value: any, index: any, keys: any) => {
                //   setIsOpens([]);
                return (
                  <SoccerRankCard
                    key={index}
                    isOpen={isOpens[index]}
                    onPress={() => {
                      const newOne = isOpens.map((v, i, a) => {
                        if (i == index) return !v;
                        else return v; // 이 부분이 있으면 여러개 확장 가능, 없으면 하나만 확장 가능
                      });
                      setIsOpens(newOne);
                    }}
                    univName={value[0]}
                    data={value[1]}
                  />
                );
              }
            )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textTypo2: {
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    top: 8,
    fontWeight: "600",
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo1: {
    textAlign: "left",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
  },
  parentFrameBg: {
    backgroundColor: Color.grayGray50,
    marginTop: 4,
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 343,
    borderRadius: Border.br_5xs,
  },
  textClr: {
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
  },
  wrapperSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapperBorder: {
    borderColor: Color.grayGray100,
    flexDirection: "row",
    borderStyle: "solid",
  },
  text: {
    left: 30,
    textAlign: "center",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
  },
  text1: {
    left: 69,
    width: 59,
    textAlign: "center",
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    top: 8,
    fontWeight: "600",
    position: "absolute",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
  },
  text2: {
    left: 144,
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    top: 8,
    fontWeight: "600",
    position: "absolute",
  },
  text3: {
    left: 225,
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    top: 8,
    fontWeight: "600",
    position: "absolute",
  },
  text4: {
    left: 259,
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    top: 8,
    fontWeight: "600",
    position: "absolute",
  },
  text5: {
    left: 295,
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    top: 8,
    fontWeight: "600",
    position: "absolute",
  },
  text6: {
    left: 186,
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    top: 8,
    fontWeight: "600",
    position: "absolute",
  },
  text7: {
    left: 324,
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    top: 8,
    fontWeight: "600",
    position: "absolute",
  },
  parent: {
    height: 40,
    alignSelf: "stretch",
  },
  text8: {
    fontSize: FontSize.size_sm,
    width: 20,
    fontWeight: "500",
    color: Color.grayGray800,
    textAlign: "center",
    letterSpacing: -0.3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text9: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.4,
    width: 72,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "600",
    color: Color.grayGray800,
  },

  text16: {
    fontWeight: "500",
    color: Color.grayGray800,
    textAlign: "center",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  text17: {
    textAlign: "center",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  container: {
    width: 21,
    alignItems: "center",
  },
  text22: {
    fontWeight: "500",
    color: Color.grayGray800,
    textAlign: "center",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
  },
  text23: {
    textAlign: "center",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
  },

  parent4: {
    backgroundColor: Color.colorWhitesmoke_100,
    marginTop: 4,
    alignItems: "center",
  },
  parent5: {
    marginTop: 4,
    backgroundColor: Color.grayGray50,
    alignItems: "center",
  },
  text74: {
    textAlign: "left",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
  },
  wrapper: {
    borderRightWidth: 1,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  wrapper2: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_11xl,
    flex: 1,
  },
  frameParent1: {
    display: "none",
    borderBottomWidth: 1,
    marginTop: 4,
    backgroundColor: Color.grayGray50,
    alignSelf: "stretch",
  },
  frameParent: {
    // top: 163,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    justifyContent: "center",
    // left: 0,
    alignItems: "center",
    // position: "absolute",
    marginBottom: 100,
  },
  view: {
    backgroundColor: "#fff",
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
});
