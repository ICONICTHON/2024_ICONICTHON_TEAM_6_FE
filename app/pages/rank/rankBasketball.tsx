import { Key, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Button,
  Platform,
  ActivityIndicator,
} from "react-native";

import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border,
} from "../../../constants/GlobalStyles";
import { HeaderButtons } from "react-navigation-header-buttons";
import { MenuView } from "@react-native-menu/menu";
import { router, Stack, useNavigation } from "expo-router";
import BasketballRankCard from "@/components/rank/BasketballRankCard";
import SportsSelectRankOption from "@/components/rank/SportsSelectRankOption";
import YearLeagueRankOption from "@/components/rank/YearLeagueRankOption";
import { Ionicons } from "@expo/vector-icons";
import { apiGet } from "@/hooks/useApiGet";

export default function RankBasketball() {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [leagueData, setLeagueData] = useState(null);

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
      let res = await apiGet(`/api/v1/rank/league/basketball`);
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
        `api/v1/rank/rank/${valueYear}/${valueLeague}/basketball`
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
    <View style={[styles.view, styles.viewFlexBox]}>
      <Stack.Screen
        options={{
          animation: "none",
          headerRight: () => (
            <HeaderButtons>
              <SportsSelectRankOption sports_type="농구" />
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
        {/* <View style={[styles.frameParent1, styles.wrapperSpaceBlock]}>
          <View style={[styles.uangleLeftParent, styles.frameContainerFlexBox]}>
            <Image
            style={styles.uangleLeftIcon2}
            resizeMode="cover"
            source={require("../assets/uangleleft1.png")}
          />
            <Text style={[styles.text119, styles.textClr]}>순위</Text>
          </View>
          <SportsSelectRankOption />
        </View> */}

        <View style={[styles.frameParent, styles.frameParentLayout]}>
          <View style={styles.parent}>
            <Text style={styles.text}>순위</Text>
            <Text style={[styles.text1, styles.textTypo2]}>학교</Text>
            <Text style={[styles.text2, styles.textTypo2]}>경기수</Text>
            <Text style={[styles.text3, styles.textTypo2]}>승률</Text>
            <Text style={[styles.text4, styles.textTypo2]}>승</Text>
            <Text style={[styles.text5, styles.textTypo2]}>패</Text>
            <Text style={[styles.text6, styles.textTypo2]}>득점</Text>
            <Text style={[styles.as, styles.textTypo2]}>AS</Text>
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
              (value: any, index: number, keys: any) => {
                //   setIsOpens([]);
                // console.log(value);
                return (
                  <BasketballRankCard
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
  comboBox2: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.grayWhite0,
  },
  textClr: {
    color: Color.grayGray800,
    textAlign: "left",
  },
  viewFlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  frameParentLayout: {
    width: 375,
    alignItems: "center",
    // position: "absolute",
  },
  textTypo2: {
    textAlign: "left",
    color: Color.pOINT,
    fontWeight: "600",
  },
  textTypo1: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
  },
  viewSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
  },
  textFlexBox: {
    justifyContent: "center",
    display: "flex",
    color: Color.grayGray800,
    textAlign: "center",
    alignItems: "center",
  },
  textTypo: {
    letterSpacing: -0.4,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
  },
  frameContainerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  wrapperSpaceBlock: {
    // paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
    color: Color.pOINT,
    fontFamily: FontFamily.pretendard,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    left: 25,
    top: 8,
    position: "absolute",
  },
  text1: {
    left: 77,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    top: 8,
    textAlign: "left",
    position: "absolute",
  },
  text2: {
    left: 122,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    top: 8,
    textAlign: "left",
    position: "absolute",
  },
  text3: {
    left: 166,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    top: 8,
    textAlign: "left",
    position: "absolute",
  },
  text4: {
    left: 206,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    top: 8,
    textAlign: "left",
    position: "absolute",
  },
  text5: {
    left: 232,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    top: 8,
    textAlign: "left",
    position: "absolute",
  },
  text6: {
    left: 261,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    top: 8,
    textAlign: "left",
    position: "absolute",
  },
  as: {
    left: 313,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    top: 8,
    textAlign: "left",
    position: "absolute",
  },
  parent: {
    height: 40,
    alignSelf: "stretch",
  },
  text7: {
    fontWeight: "500",
  },
  group: {
    alignItems: "center",
  },
  text19: {
    width: 18,
    fontWeight: "500",
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
  },
  text20: {
    width: 72,
    justifyContent: "center",
    display: "flex",
    color: Color.grayGray800,
    textAlign: "center",
    alignItems: "center",
    fontWeight: "600",
  },
  text21: {
    width: 20,
    fontWeight: "500",
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
  },
  text22: {
    width: 44,
    fontWeight: "500",
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
  },

  view1: {
    height: 88,
    marginTop: 8,
    width: 343,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.grayGray50,
  },
  view3: {
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    width: 343,
    marginTop: 8,
    alignItems: "center",
  },
  view4: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    width: 343,
    marginTop: 8,
    backgroundColor: Color.grayGray50,
    alignItems: "center",
  },
  frameParent: {
    marginLeft: -187.5,
    // top: 173,
    alignItems: "center",
    left: "50%",
    marginBottom: 100,
    width: 375,
  },

  uangleLeftIcon: {
    height: 18,
    width: 18,
    overflow: "hidden",
  },

  wrapper: {
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_smi,
    flexDirection: "row",
  },
  frame: {
    paddingHorizontal: Padding.p_smi,
    flexDirection: "row",
  },

  frameContainer: {
    // top: 123,
    // left: 25,
    flexDirection: "row",
    marginLeft: 25,
    // position: "absolute",
  },

  text119: {
    fontSize: 18,
    letterSpacing: -0.1,
    lineHeight: 25,
    marginLeft: 10,
    fontFamily: FontFamily.pretendard,
    fontWeight: "600",
  },
  uangleLeftParent: {
    zIndex: 0,
  },
  text120: {
    textAlign: "left",
    color: Color.pOINT,
    fontWeight: "600",
    overflow: "hidden",
  },

  frameParent1: {
    // top: 47,
    // left: 0,
    height: 56,
    paddingVertical: 12,
    alignItems: "center",
    width: 375,
    // position: "absolute",
  },
  view: {
    width: "100%",
    height: 941,
    overflow: "hidden",
    backgroundColor: Color.grayWhite0,
  },
});
