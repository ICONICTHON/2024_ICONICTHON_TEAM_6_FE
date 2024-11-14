import { Border, Color, Padding } from "@/constants/GlobalStyles";
import { Image, StyleSheet, View, ViewProps } from "react-native";

export type EventCardInCalProps = ViewProps & {
  imgs: string[];
  sports_type: string;
};
export default function EventCardInCal({
  imgs,
  sports_type,
}: EventCardInCalProps) {
  let color = Color.colorYellowgreen;

  switch (sports_type) {
    case "baseball":
      break;
    case "basketball":
      color = Color.color1;
      break;
    case "soccer":
      color = "#FF8598";
    default:
      break;
  }
  return (
    <View
      style={[
        styles.type,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Image
        style={styles.iconLayout}
        resizeMode="cover"
        source={{ uri: imgs[0] }}
      />
      <Image
        style={styles.unionIcon}
        resizeMode="cover"
        source={require("../assets/pages/calendar/union.png")}
      />
      <Image
        style={[styles.icon141, styles.iconLayout]}
        resizeMode="cover"
        source={{ uri: imgs[1] }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  iconLayout: {
    height: 14,
    width: 14,
  },
  unionIcon: {
    width: 1,
    height: 4,
    marginLeft: 5,
  },
  icon141: {
    marginLeft: 5,
  },
  type: {
    borderRadius: Border.br_11xs,

    width: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_12xs,
  },
});
