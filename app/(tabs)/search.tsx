import { Border, Color, FontFamily, FontSize } from "@/constants/GlobalStyles";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Player() {
  const [query, setQuery] = useState("");
  return (
    <View style={styles.view}>
      <Image
        style={[styles.child, styles.childPosition]}
        resizeMode="cover"
        source={require("../../assets/pages/search/group-560118402.png")}
      />
      <View>
        <TextInput
          style={[styles.parent, styles.childPosition]}
          onChangeText={(text) => setQuery(text)}
          value={query}
          numberOfLines={1}
          placeholder="찾으시는 선수명을 입력해주세요"
          returnKeyType="search"
          onSubmitEditing={(event) => {
            setQuery(event.nativeEvent.text);
            if (query == "") {
              return Alert.alert(
                "검색어 없음",
                "검색어를 작성하고 검색을 눌러주세요",
                [
                  {
                    text: "넵!",
                    onPress: () => {},
                  },
                ]
              );
            }
            router.push({
              pathname: "/pages/searchResult/[query]",
              params: {
                query: query,
              },
            });
          }}
        />
        {/* <Image
          style={styles.usearchIcon}
          resizeMode="cover"
          source={require("../../assets/pages/search/usearch.png")}
        /> */}
        {/* <View style={[styles.parent, styles.childPosition]}>
          <Text style={styles.text}>찾으시는 선수명을 입력해주세요</Text>
          <Image
            style={styles.usearchIcon}
            resizeMode="cover"
            source={require("../../assets/pages/search/usearch.png")}
          />
        </View> */}
      </View>
      <View style={[styles.item, styles.itemShadowBox]} />
      <View style={[styles.inner, styles.itemShadowBox]} />
      <TouchableOpacity
        onPress={() => {
          router.navigate("/pages/rank/rankBasketball");
        }}
        style={[styles.text1, styles.textTypo]}
      >
        <Text>순위 확인하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.navigate("/pages/player/playerList");
        }}
        style={[styles.textTypo]}
      >
        <Text style={[styles.text2]}>지도자 · 선수 찾기</Text>
      </TouchableOpacity>
      <View style={[styles.trophyWrapper, styles.frameIconLayout]}>
        <Image
          style={[styles.trophyIcon, styles.childPosition]}
          resizeMode="cover"
          source={require("../../assets/pages/search/trophy.png")}
        />
      </View>
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        resizeMode="cover"
        source={require("../../assets/pages/search/frame-1000004042.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  childPosition: {
    left: "50%",
    position: "absolute",
  },
  itemShadowBox: {
    height: 160,
    width: 140,
    backgroundColor: Color.colorYellowgreen,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    top: 405,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: -0.3,
    top: 531,
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frameIconLayout: {
    height: 88,
    width: 88,
    top: 429,
    position: "absolute",
    overflow: "hidden",
  },
  child: {
    marginTop: -237,
    marginLeft: -84.5,
    width: 168,
    height: 158,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  text: {
    letterSpacing: -0.1,
    lineHeight: 20,
    textAlign: "left",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_sm,
  },
  usearchIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  parent: {
    marginLeft: -147.5,
    top: 317,
    borderRadius: 99,
    borderStyle: "solid",
    borderColor: Color.colorYellowgreen,
    borderWidth: 1,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  item: {
    left: 40,
  },
  inner: {
    left: 200,
  },
  text1: {
    left: 73,
    textAlign: "left",
  },
  text2: {
    left: 223,
    textAlign: "center",
  },
  trophyIcon: {
    marginTop: -36,
    marginLeft: -38,
    width: 77,
    height: 72,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  trophyWrapper: {
    left: 66,
  },
  frameIcon: {
    left: 226,
  },
  view: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});
