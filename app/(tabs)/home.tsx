import { ArticleCard } from "@/components/home/ArticleCard";
import { EventCardMain } from "@/components/home/EventCardMain";
import HeaderA from "@/components/HeaderA";
import HeaderB from "@/components/HeaderB";

import SportsSelectRadio from "@/components/home/SportsSelectRadio";
import WeekStrip from "@/components/home/WeekStrip";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "@/constants/GlobalStyles";
import { apiGet } from "@/hooks/useApiGet";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as WebBrowser from "expo-web-browser";

export default function Home() {
  const [pickedDate, setPickedDate] = useState(new Date(2024, 8, 3));
  const [modalVis, setModalVis] = useState(false);
  const [modalData, setModalData] = useState({
    date: "",
    summary: "",
    title: "",
    url: "",
    img: "",
  });
  const [sports, setSports] = useState(0);
  const [events, setEvents] = useState([]);
  const sportsName = ["all", "baseball", "basketball", "soccer"];
  const [articles, setArticles] = useState([
    {
      date: "",
      summary: "",
      title: "",
      url: "",
      img: "",
    },
  ]);

  useEffect(() => {
    const fetch = async () => {
      let res = await apiGet(
        `/api/v1/event/day/${pickedDate.getFullYear()}/${
          pickedDate.getMonth() + 1
        }/${pickedDate.getDate()}`
      );
      setEvents(res.body);
      // console.log(res.body);
    };
    fetch();
  }, [pickedDate]);

  useEffect(() => {
    const fetch = async () => {
      let res = await apiGet(`/api/v1/article/recent`);
      setArticles(res.body);
      // console.log(res.body);
    };
    fetch();
  }, []);

  return (
    <SafeAreaView
      style={styles.view}
      // style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <HeaderA
          title={`${pickedDate.getFullYear()}년 ${pickedDate.getMonth() + 1}월`}
          style={{ marginBottom: 20 }}
        />
        <WeekStrip date={pickedDate} setDate={setPickedDate} />
        <HeaderB
          title="경기 일정"
          icon="ucalendaralt"
          style={{ marginTop: 30 }}
        />
        <SportsSelectRadio
          style={{ marginTop: 15, marginBottom: 15 }}
          sportsIndex={sports}
          setSportsIndex={setSports}
        />
        <View>
          <View style={styles.frameParent1}>
            <FlatList
              horizontal
              data={events.filter((v, i, a) => {
                if (sports == 0) return v;
                else if (v.sports_type == sportsName[sports]) return v;
              })}
              style={{ width: "100%" }}
              snapToAlignment="center"
              contentInsetAdjustmentBehavior="never"
              decelerationRate="fast"
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={1}
              contentContainerStyle={{
                paddingVertical: 30,
              }}
              snapToInterval={330}
              contentInset={{ left: 30, right: 20 }}
              contentOffset={{ x: 30 * -1, y: 0 }}
              renderItem={({ item, index }) => {
                const date = new Date(item.event_time);
                return (
                  <EventCardMain
                    key={`eventcardflatlist ${index}`}
                    leagueName={item.league}
                    teams={item.teams}
                    location={item.location}
                    time={date.toLocaleTimeString(undefined, {
                      timeStyle: "short",
                    })}
                    imgs={item.img}
                  />
                );
              }}
            />
            {/* {events
              .filter((v, i, a) => {
                if (sports == 0) return v;
                else if (v.sports_type == sportsName[sports]) return v;
              })
              .map((v, i, a) => {
                const date = new Date(v.event_time);
                return (
                  <View>
                    <EventCardMain
                      key={`eventcard ${i}`}
                      leagueName={v.league}
                      teams={v.teams}
                      location={v.location}
                      time={date.toLocaleTimeString(undefined, {
                        timeStyle: "short",
                      })}
                      imgs={v.img}
                    />
                    <Text></Text>
                  </View>
                );
              })} */}
            {events.length == 0 && (
              <Text style={{ marginBottom: 30 }}>경기가 없습니다. </Text>
            )}
          </View>
        </View>
        <HeaderB
          title="경기 하이라이트"
          icon="ufire"
          style={{ marginTop: 40, marginBottom: 15 }}
        />
        <View style={[styles.frameContainer, styles.frameFlexBox1]}>
          {articles.map((v, i, a) => {
            return (
              <ArticleCard
                key={`articlecard ${i}`}
                title="다르마"
                date={v.date}
                description={v.summary}
                url={v.url}
                img={v.img}
                commentNum={0}
                likeNum={0}
                onPress={() => {
                  setModalData(v);
                  setModalVis(true);
                }}
              />
            );
          })}
        </View>
      </ScrollView>
      <Modal
        presentationStyle="pageSheet"
        visible={modalVis}
        // transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVis(false)}
        style={{}}
      >
        <View style={{}}>
          <ScrollView>
            <TouchableOpacity onPress={() => setModalVis(false)} style={{}}>
              <Text
                style={{
                  textAlign: "center",
                  left: 16,
                  top: 16,
                  color: Color.colorDarkslateblue,
                  fontWeight: "400",
                  fontFamily: FontFamily.pretendard,
                  fontSize: FontSize.size_base,
                  alignSelf: "stretch",
                  position: "absolute",
                }}
              >
                닫기
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                marginTop: 60,
                paddingHorizontal: 50,
                textAlign: "center",
                color: Color.grayGray800,
                fontWeight: "600",
                fontFamily: FontFamily.pretendard,
                lineHeight: 25,
                letterSpacing: -0.1,
                fontSize: FontSize.size_lg,
                alignSelf: "stretch",
              }}
            >
              {modalData.title}
            </Text>
            <Text
              style={{
                paddingHorizontal: 30,
                paddingVertical: 10,
                textAlign: "right",
                color: Color.grayGray800,
                fontWeight: "400",
                fontFamily: FontFamily.pretendard,
                lineHeight: 22,
                letterSpacing: -0.1,
                fontSize: FontSize.size_sm,
                alignSelf: "stretch",
              }}
            >
              {modalData.date}
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                marginHorizontal: 20,
                borderBottomColor: Color.grayGray50,
              }}
            />
            <Image
              source={{ uri: modalData.img }}
              width={320}
              height={210}
              style={{ marginHorizontal: "auto", marginTop: 10 }}
            />
            <Text
              style={{
                textAlign: "center",
                color: Color.grayGray500,
                fontWeight: "400",
                fontFamily: FontFamily.pretendard,
                lineHeight: 25,
                letterSpacing: -0.1,
                fontSize: FontSize.size_2xs,
                // alignSelf: "auto",
              }}
            >
              출처: 동국대학교 스포츠매거진 다르마
            </Text>
            <Text
              style={{
                paddingHorizontal: 30,
                paddingVertical: 10,
                textAlign: "justify",
                color: Color.grayGray800,
                fontWeight: "400",
                fontFamily: FontFamily.pretendard,
                lineHeight: 25,
                letterSpacing: -0.1,
                fontSize: FontSize.size_base,
                // alignSelf: "auto",
              }}
            >
              {modalData.summary}
              {"\n\n"}
              출처: 동국대학교 스포츠매거진 다르마
            </Text>
            <View style={{ marginTop: 100 }} />
          </ScrollView>
          <TouchableOpacity
            onPress={async () => {
              return await WebBrowser.openBrowserAsync(modalData.url);
            }}
            style={{
              width: 340,
              height: 50,
              bottom: 30,
              backgroundColor: Color.main,
              borderRadius: Border.br_base,
              justifyContent: "center",
              marginHorizontal: "auto",
              position: "absolute",
              marginLeft: -170,
              left: "50%",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: FontSize.size_base,
                color: Color.colorDarkslateblue,
                fontWeight: "500",
                fontFamily: FontFamily.pretendard,
              }}
            >
              원문 기사 보기
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  frameFlexBox: {
    borderStyle: "solid",
    backgroundColor: Color.grayWhite0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  text: {
    opacity: 0.6,
    textAlign: "center",
    color: Color.grayGray800,
    fontWeight: "500",
    fontFamily: FontFamily.pretendard,
    lineHeight: 22,
    letterSpacing: -0.1,
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
  },
  text1: {
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
    lineHeight: 22,
    fontSize: FontSize.size_base,
    marginTop: 4,
  },
  parent: {
    borderRadius: Border.br_xl,
  },
  frameView: {
    borderRadius: 99,
    backgroundColor: Color.main,
    overflow: "hidden",
  },
  frameParent: {
    top: 141,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  text14: {
    color: Color.grayWhite0,
  },
  wrapper: {
    backgroundColor: "#093b7b",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text15: {
    color: Color.grayGray800,
  },
  frame: {
    borderColor: Color.grayGray100,
    borderWidth: 1,
    marginLeft: 8,
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_3xs,
    height: 30,
    width: 48,
    borderRadius: Border.br_5xs,
  },
  frameGroup: {
    top: 270,
  },
  frameChild: {
    backgroundColor: Color.grayGray100,
    width: 120,
    height: 120,
    borderRadius: Border.br_5xs,
  },
  text18: {
    textAlign: "left",
    fontWeight: "600",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 22,
    letterSpacing: -0.1,
    fontSize: FontSize.size_base,
  },
  text19: {
    marginLeft: 4,
    color: Color.grayGray300,
  },
  parent4: {
    alignItems: "flex-end",
    left: 140,
    top: 0,
    flexDirection: "row",
    position: "absolute",
  },
  text20: {
    top: 30,
    width: 189,
    height: 63,
    left: 140,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    color: Color.grayGray800,
    position: "absolute",
    overflow: "hidden",
  },
  frameItem: {
    top: 6,
    left: 329,
    height: 14,
    position: "absolute",
  },
  ucommentAltIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text21: {
    marginLeft: 2,
    color: Color.grayGray300,
    textAlign: "left",
  },
  view1: {
    bottom: 11,
    left: 288,
    position: "absolute",
  },
  view2: {
    top: 93,
    left: 242,
    position: "absolute",
  },
  rectangleParent: {
    height: 120,
    alignSelf: "stretch",
  },
  rectangleGroup: {
    marginTop: 10,
    height: 120,
    alignSelf: "stretch",
  },
  frameContainer: {
    // top: 651,
    paddingBottom: 30,
    paddingHorizontal: Padding.p_base,
    width: 375,
    // left: "50%",
    // marginLeft: -187.5,
    // position: "absolute",
  },
  text33: {
    fontSize: 24,
    lineHeight: 34,
    textAlign: "left",
    fontWeight: "700",
    color: Color.grayGray800,
    letterSpacing: -0.1,
    fontFamily: FontFamily.pretendard,
  },
  uangleLeftIcon: {
    marginLeft: 4,
  },

  text34: {
    color: Color.grayGray300,
  },
  frameChild2: {
    display: "none",
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.grayWhite0,
    width: 88,
    borderRadius: Border.br_5xs,
  },

  text35: {
    marginTop: 4,
    color: Color.grayGray800,
    alignSelf: "stretch",
  },
  frameChild4: {
    marginTop: -39,
    marginLeft: -39.5,
    top: "50%",
    left: "50%",
  },
  frameParent4: {
    marginLeft: 19,
  },
  frameParent2: {
    marginLeft: -130,
    top: 75,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  kusfUParent: {
    opacity: 0.5,
    height: 200,
    width: 320,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.2)",
    backgroundColor: Color.main,
  },
  text37: {
    color: Color.grayGray500,
  },

  frameParent1: {
    // marginLeft: -170,
    // top: 315,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // left: "50%",
    // position: "absolute",
  },
  text43: {
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    marginLeft: 4,
    textAlign: "left",
    fontWeight: "700",
    color: Color.grayGray800,
    letterSpacing: -0.1,
    fontFamily: FontFamily.pretendard,
  },

  frameChild13: {
    marginLeft: 8,
  },
  ellipseParent: {
    top: 541,
    left: 168,
    position: "absolute",
  },
  ucalendarAltParent: {
    top: 227,
  },
  text45: {
    lineHeight: 14,
    marginTop: 8,
    textAlign: "center",
    color: Color.grayGray800,
    alignSelf: "stretch",
  },
  component6: {
    padding: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.main,
  },
  component7: {
    marginLeft: 16,
  },

  view: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fafafa",
    // height: "auto",
    overflow: "hidden",
    width: "100%",
    flexGrow: 1,
  },
});
