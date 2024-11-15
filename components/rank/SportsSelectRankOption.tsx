import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "@/constants/GlobalStyles";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ViewProps,
  Platform,
} from "react-native";
import { HeaderButtons } from "react-navigation-header-buttons";
import { MenuView } from "@react-native-menu/menu";
import { router, Stack, useNavigation } from "expo-router";

export type SportsSelectRankOptionProps = ViewProps & {
  sports_type: string;
};

export default function SportsSelectRankOption({
  sports_type,
}: SportsSelectRankOptionProps) {
  return (
    <MenuView
      onPressAction={({ nativeEvent: { event } }) => {
        console.log(event);
        switch (event) {
          case "baseball":
            router.replace("/pages/rank/rankBaseball");
            break;
          case "basketball":
            router.replace("/pages/rank/rankBasketball");
            break;
          case "soccer":
            router.replace("/pages/rank/rankSoccer");
            break;
          default:
            break;
        }
      }}
      actions={[
        {
          id: "basketball",
          title: "농구 순위",
          titleColor: "#2367A2",
          image: Platform.select({
            ios: "chevron.right.circle",
            android: "ic_menu_add",
          }),
          imageColor: "#2367A2",
        },
        {
          id: "baseball",
          title: "야구 순위",
          titleColor: "#2367A2",
          image: Platform.select({
            ios: "chevron.right.circle",
            android: "ic_menu_add",
          }),
          imageColor: "#2367A2",
        },
        {
          id: "soccer",
          title: "축구 순위",
          titleColor: "#2367A2",
          image: Platform.select({
            ios: "chevron.right.circle",
            android: "ic_menu_add",
          }),
          imageColor: "#2367A2",
        },
      ]}
    >
      <View style={[styles.comboBox2, styles.wrapperSpaceBlock]}>
        <Text style={[styles.text120, styles.textTypo]} numberOfLines={1}>
          {sports_type}
        </Text>
        <Image
          style={styles.uangleLeftIcon2}
          resizeMode="cover"
          source={require("../../assets/pages/rank/uangleleft2.png")}
        />
      </View>
    </MenuView>
  );
}

const styles = StyleSheet.create({
  uangleLeftIcon2: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  text120: {
    textAlign: "left",
    color: Color.pOINT,
    fontWeight: "600",
    overflow: "hidden",
  },
  wrapperSpaceBlock: {
    // paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  comboBox2: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.grayWhite0,
  },
  comboBoxContainer: {
    top: 11,
    left: 277,
    zIndex: 1,
    width: 88,
    position: "absolute",
  },
  textTypo: {
    letterSpacing: -0.4,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
  },
  wrapper2: {
    display: "none",
    alignItems: "flex-end",
    paddingVertical: Padding.p_5xs,
    borderBottomWidth: 1,
    borderColor: Color.grayGray50,
    borderStyle: "solid",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.grayWhite0,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
  },
  text121: {
    fontWeight: "700",
    color: Color.grayGray800,
    textAlign: "left",
  },
  wrapper3: {
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    display: "none",
    alignItems: "flex-end",
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.grayWhite0,
  },
});
