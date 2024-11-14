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
import BaseballRankCard from "@/components/rank/BaseballRankCard";
import SportsSelectRankOption from "@/components/rank/SportsSelectRankOption";
import { apiGet } from "@/hooks/useApiGet";

export default function RankBaseball() {
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
      let res = await apiGet(`/api/v1/rank/league/baseball`);
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
        `api/v1/rank/rank/${valueYear}/${valueLeague}/baseball`
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
              <SportsSelectRankOption sports_type="야구" />
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
            <Text style={styles.text}>순위</Text>
            <Text style={[styles.text1, styles.textFlexBox]}>학교</Text>
            <Text style={[styles.text2, styles.textTypo2]}>경기수</Text>
            <Text style={[styles.text3, styles.textTypo2]}>승</Text>
            <Text style={[styles.text4, styles.textTypo2]}>무</Text>
            <Text style={[styles.text5, styles.textTypo2]}>패</Text>
            <Text style={[styles.text6, styles.textTypo2]}>승률</Text>
            {/* <Text style={[styles.text7, styles.textTypo2]}>게임차</Text> */}
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
                  <BaseballRankCard
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
  textFlexBox: {
    display: "flex",
    textAlign: "center",
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo2: {
    textAlign: "left",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
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
  textClr: {
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
  },
  wrapperBorder: {
    borderColor: Color.grayGray100,
    borderStyle: "solid",
  },
  wrapperFlexBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  text: {
    left: 30,
    textAlign: "center",
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
    top: 8,
    position: "absolute",
  },
  text1: {
    left: 68,
    width: 59,
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    top: 8,
    position: "absolute",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
    display: "flex",
  },
  text2: {
    // left: 144,
    left: 150,
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    top: 8,
    position: "absolute",
    fontWeight: "600",
    textAlign: "left",
  },
  text3: {
    // left: 190,
    left: 203,
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    top: 8,
    position: "absolute",
    fontWeight: "600",
    textAlign: "left",
  },
  text4: {
    // left: 220,
    left: 238,
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    top: 8,
    position: "absolute",
    fontWeight: "600",
    textAlign: "left",
  },
  text5: {
    // left: 248,
    left: 270,
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    top: 8,
    position: "absolute",
    fontWeight: "600",
    textAlign: "left",
  },
  text6: {
    // left: 271,   // 게임차 제거시 변경한 부분
    left: 310,
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    top: 8,
    position: "absolute",
    fontWeight: "600",
    textAlign: "left",
  },
  text7: {
    left: 309,
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    top: 8,
    position: "absolute",
    fontWeight: "600",
    textAlign: "left",
  },
  parent: {
    height: 40,
    alignSelf: "stretch",
  },
  text8: {
    width: 18,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.grayGray800,
    display: "flex",
    textAlign: "center",
    letterSpacing: -0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  text9: {
    fontSize: FontSize.size_base,
    letterSpacing: -0.4,
    width: 72,
    display: "flex",
    textAlign: "center",
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
  },
  text10: {
    width: 20,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.grayGray800,
    display: "flex",
    textAlign: "center",
    letterSpacing: -0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  text12: {
    width: 12,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.grayGray800,
    display: "flex",
    textAlign: "center",
    letterSpacing: -0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  text15: {
    width: 44,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.grayGray800,
    display: "flex",
    textAlign: "center",
    letterSpacing: -0.3,
    justifyContent: "center",
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
  group: {
    backgroundColor: Color.colorWhitesmoke_100,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "space-between",
    width: 343,
    borderRadius: Border.br_5xs,
  },
  text64: {
    textAlign: "left",
    letterSpacing: -0.3,
    fontSize: FontSize.size_xs,
  },
  wrapper: {
    borderRightWidth: 1,
    borderColor: Color.grayGray100,
    borderStyle: "solid",
  },
  frameGroup: {
    borderBottomWidth: 1,
    display: "none",
    flexDirection: "row",
    borderStyle: "solid",
    backgroundColor: Color.grayGray50,
    alignSelf: "stretch",
  },
  frameParent: {
    // top: 163,
    left: "50%",
    marginLeft: -187.5,

    width: 375,
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
  },
  view: {
    backgroundColor: "#fff",
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
});
