import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";

import { Color, FontFamily, FontSize, Padding } from "@/constants/GlobalStyles";
import { Calendar, LocaleConfig } from "react-native-calendars";
import SportsSelectOption from "@/components/SportsSelectOption";
import EventCardSub from "@/components/EventCardSub";
import EventCardInCal from "@/components/EventCardInCal";
import { useEffect, useState } from "react";

import { apiGet } from "@/hooks/useApiGet";

LocaleConfig.locales["ko"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "오늘",
};

LocaleConfig.defaultLocale = "ko";

export default function Event() {
  const [pickedDate, setPickedDate] = useState(new Date(2024, 8, 5));
  const [pickedMonth, setPickedMonth] = useState(pickedDate.getMonth() + 1);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "전체", value: 0 },
    { label: "야구", value: 1 },
    { label: "농구", value: 2 },
    { label: "축구", value: 3 },
    // { label: "내 캘린더", value: 4 },
  ]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      let res = await apiGet(
        `/api/v1/event/month/${pickedDate.getFullYear()}/${
          pickedDate.getMonth() + 1
        }`
      );
      setEvents(res.body);
      // console.log(res.body);
    };
    fetch();
  }, [pickedMonth]);

  useEffect(() => {
    setPickedMonth(pickedDate.getMonth() + 1);
  }, [pickedDate]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.wrapperFlexBox}>
          <Text style={[styles.text12, styles.textTypo]}>경기 일정</Text>
        </View>
        <SportsSelectOption
          style={{ marginLeft: 16, marginTop: 30 }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />

        <Calendar
          style={{
            height: 560,
            // width: 380,
            marginHorizontal: 16,
            // borderWidth: 1,
            // borderColor: "#E9E9E9",
            // borderRadius: 20,
            backgroundColor: "#fafafa",
          }}
          current={"2024-06-08"}
          monthFormat={"yyyy년 MM월"}
          onDayPress={(day: any) => {
            console.log("selected day", day);
          }}
          onMonthChange={(month: any) => {
            // console.log(month);
            const date = new Date(month.dateString);
            setPickedDate(date);
          }}
          enableSwipeMonths={true}
          theme={{
            // todayTextColor: "black",
            // textDayHeaderFontSize: 14,
            // textDayHeaderFontWeight: 600,
            // textDayHeaderFontFamily: FontFamily.pretendard,
            // textMonthFontFamily: FontFamily.pretendard,
            // textMonthFontSize: 16,
            // textMonthFontWeight: 600,
            calendarBackground: "#fafafa",
            arrowColor: Color.grayGray800,
            weekVerticalMargin: 0,
            "stylesheet.calendar.header": {
              week: {
                marginTop: 5,
                flexDirection: "row",
                justifyContent: "space-around",
                // borderBottomWidth: 1,
                // borderBottomColor: Color.grayGray50,
              },
              dayHeader: {
                marginTop: 2,
                marginBottom: 7,
                width: 32,
                textAlign: "center",
                fontSize: 14,
                fontFamily: FontFamily.pretendard,
                fontWeight: 600,
                color: Color.grayGray800,
              },
              monthText: {
                fontSize: 16,
                fontFamily: FontFamily.pretendard,
                fontWeight: 600,
                color: Color.grayGray800,
                margin: 10,
                marginVertical: 30,
              },
              dayTextAtIndex0: {
                color: "red",
              },
              dayTextAtIndex6: {
                color: "#0060EF",
              },
            },
          }}
          dayComponent={({ date, state, marking }) => {
            const isSelected =
              pickedDate.getDate() == date.day &&
              pickedDate.getMonth() + 1 == date.month;
            return (
              <TouchableOpacity
                style={{
                  height: 84,
                  // width: 48,
                  // height: "100%",
                  width: "100%",
                  paddingTop: 5,
                  alignItems: "center",
                  // borderBottomWidth: 1,
                  // borderBottomColor: Color.grayGray50,
                  borderRadius: isSelected ? 3 : 0,
                  borderTopColor: Color.grayGray50,
                  borderTopWidth: 1,
                  backgroundColor: isSelected ? Color.grayGray50 : "#fafafa",
                  gap: 2,
                }}
                onPress={() => {
                  setPickedDate(new Date(date.dateString));
                }}
              >
                <Text
                  style={{
                    fontFamily: FontFamily.pretendard,
                    fontSize: 12,
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  {date.day}
                </Text>
                {events
                  .filter((v, i, a) => {
                    const vdate = new Date(v.event_time);
                    // console.log(vdate.toDateString(), date);

                    return (
                      vdate.getFullYear() == date.year &&
                      vdate.getMonth() + 1 == date.month &&
                      vdate.getDate() == date.day
                    );
                  })
                  .map((v, i, a) => {
                    return (
                      <EventCardInCal
                        key={i}
                        imgs={v.img}
                        sports_type={v.sports_type}
                      />
                    );
                  })}
              </TouchableOpacity>
            );
          }}
        />
        <View style={styles.wrapperFlexBox}>
          <Text
            style={[
              {
                fontSize: FontSize.size_lg,
                lineHeight: 34,
                fontWeight: "700",
                textAlign: "left",
              },
              styles.textTypo,
            ]}
          >{`${pickedDate.getFullYear()}년 ${
            pickedDate.getMonth() + 1
          }월 ${pickedDate.getDate()}일`}</Text>
        </View>
        <View style={{ alignItems: "center", gap: 20 }}>
          {events
            .filter((v) => {
              const vdate = new Date(v.event_time);

              return (
                vdate.getFullYear() == pickedDate.getFullYear() &&
                vdate.getMonth() == pickedDate.getMonth() &&
                vdate.getDate() == pickedDate.getDate()
              );
            })
            .map((v, i, a) => {
              const dateE = new Date(v.event_time);
              return (
                <EventCardSub
                  key={i}
                  leagueName={v.league}
                  teams={v.teams}
                  time={dateE.toLocaleTimeString(undefined, {
                    timeStyle: "short",
                  })}
                  imgs={v.img}
                  location={v.location}
                  score={v.score}
                  eventId={v._id}
                  sports_type={v.sports_type}
                />
              );
            })}
          <View style={{ height: 50 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fafafa",
    // height: "auto",
    overflow: "hidden",
    width: "100%",
    flexGrow: 1,
  },
  scrollView: {
    // backgroundColor: "pink",
    // marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },

  wrapperFlexBox: {
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
    textAlign: "left",
  },
  text12: {
    fontSize: FontSize.size_5xl,
    lineHeight: 34,
    fontWeight: "700",
    textAlign: "left",
  },
});
