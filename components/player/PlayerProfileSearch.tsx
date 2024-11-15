import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "@/constants/GlobalStyles";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from "react-native";

export type PlayerProfileSearchProps = ViewProps & { data: PlayerProfile };

export type PlayerProfile = {
  no: number;
  birthday: string;
  physical_info: any;
  grade: string;
  highschool: string;
  img: string;
  position: string;
  name: string;
};

export default function PlayerProfileSearch({
  data,
  style,
}: PlayerProfileSearchProps) {
  if (data == null) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          // flexDirection: "row",
          padding: 10,
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={style}>
      <View style={[styles.child, styles.childFramePosition]} />
      <View style={[styles.uangleLeftParent, styles.containerFlexBox]}>
        <View style={styles.favorite}>
          <View style={[styles.favoriteChild, styles.favoriteChildPosition]} />
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.parent}>
          <Text style={styles.text}>{data.name}</Text>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.textTypo1]}>
              {data.position}
            </Text>
          </View>
        </View>
        <View style={[styles.group, styles.containerFlexBox]}>
          <Text style={styles.text2}>출생</Text>
          <Text style={[styles.text3, styles.textTypo1]}>{data.birthday}</Text>
        </View>
        <View style={[styles.container, styles.containerFlexBox]}>
          <Text style={styles.text2}>체격</Text>
          <Text style={[styles.text3, styles.textTypo1]}>
            {data.physical_info.height || ""} /{" "}
            {data.physical_info.weight || ""}
          </Text>
        </View>
        <View style={[styles.container, styles.containerFlexBox]}>
          <Text style={styles.text2}>학년</Text>
          <Text style={[styles.text3, styles.textTypo1]}>{data.grade}</Text>
        </View>
        <View style={[styles.container, styles.containerFlexBox]}>
          <Text style={styles.text2}>출신</Text>
          <Text style={[styles.text3, styles.textTypo1]}>
            {data.highschool}
          </Text>
        </View>
      </View>
      <Text style={styles.text9}>#{data.no}</Text>
      <View style={styles.item}>
        <Image
          source={{ uri: data.img }}
          resizeMode="cover"
          width={150}
          height={180}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    top: 10,
    left: 185,
    borderRadius: Border.br_base,
    // backgroundColor: "#a2a2a2",
    width: 150,
    height: 180,
    position: "absolute",
    overflow: "hidden",
  },
  wrapper: {
    backgroundColor: Color.colorDarkslateblue,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    flexDirection: "row",
    borderRadius: Border.br_80xl,
  },
  text: {
    textAlign: "left",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 34,
    letterSpacing: -0.1,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
  },
  text1: {
    color: Color.color,
    textAlign: "left",
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_xs,
  },
  group: {
    alignSelf: "stretch",
    gap: 5,
  },
  wrapperFlexBox: {
    borderRadius: Border.br_80xl,
    justifyContent: "center",
    alignItems: "center",
  },
  parent: {
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    gap: 5,
  },
  textTypo1: {
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.pretendard,
  },
  text2: {
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
  },
  text3: {
    textAlign: "left",
    color: Color.grayGray800,
  },
  frameParent: {
    // top: 126,
    top: 26,
    left: 40,
    gap: 5,
    position: "absolute",
  },
  favoriteChild: {
    width: 18,
    height: 18,
    top: 0,
  },
  favorite: {
    width: 32,
    height: 32,
  },
  uangleLeftParent: {
    top: 47,
    height: 56,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: Padding.p_xs,
    left: 0,
    position: "absolute",
    width: 375,
  },
  containerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  childFramePosition: {
    left: "50%",
    // position: "absolute",
  },
  child: {
    marginLeft: "-50%",

    // borderRadius: Border.br_21xl,
    // borderWidth: 1,
    backgroundColor: "#fff",
    height: 200,
    width: "100%",
    top: 0,
  },
  text9: {
    top: 6,
    fontWeight: "700",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 10,
    color: Color.colorDarkslateblue,
    marginLeft: -149.5,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
    left: "50%",
    position: "absolute",
  },
  favoriteChildPosition: {
    left: 0,
    position: "absolute",
  },
});
