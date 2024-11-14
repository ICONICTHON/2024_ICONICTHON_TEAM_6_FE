import * as React from "react";
import { Text, StyleSheet, View, Image, ViewProps } from "react-native";

import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
} from "../constants/GlobalStyles";
import DropDownPicker from "react-native-dropdown-picker";

export type SportsSelectOptionProps = ViewProps & {
  open: boolean;
  value: any;
  items: any[];
  setOpen: any;
  setValue: any;
  setItems: any;
};

export default function SportsSelectOption({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  style,
}: SportsSelectOptionProps) {
  return (
    <View style={[style, { width: 110, zIndex: 100 }]}>
      <DropDownPicker
        zIndex={1000}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={items[0].label}
        style={[styles.comboBox, { borderWidth: 0, minHeight: 40 }]}
        containerStyle={{ borderWidth: 0 }}
        textStyle={[styles.text1, styles.textTypo]}
        labelStyle={[styles.text, styles.textTypo]}
        listItemContainerStyle={[styles.wrapper, styles.wrapperFlexBox]}
        dropDownContainerStyle={{ borderWidth: 0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
  },
  wrapperFlexBox: {
    alignItems: "flex-end",
    backgroundColor: Color.grayWhite0,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_smi,
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  text: {
    fontWeight: "600",
    display: "flex",
    width: 51,
    alignItems: "center",
    textAlign: "left",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    overflow: "hidden",
  },
  uangleLeftIcon: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  comboBox: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorYellowgreen,
    justifyContent: "space-between",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_smi,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  text1: {
    flex: 1,
  },
  wrapper: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    borderBottomWidth: 1,
    borderColor: Color.grayGray50,
    borderStyle: "solid",
    alignItems: "flex-end",
    backgroundColor: Color.grayWhite0,
  },
  container: {
    borderBottomWidth: 1,
    borderColor: Color.grayGray50,
    borderStyle: "solid",
    alignItems: "flex-end",
    backgroundColor: Color.grayWhite0,
  },
  frameView: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    alignItems: "flex-end",
    backgroundColor: Color.grayWhite0,
  },
});
