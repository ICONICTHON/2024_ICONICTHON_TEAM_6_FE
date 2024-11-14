import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border,
} from "@/constants/GlobalStyles";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export type YearLeagueRankOptionProps = ViewProps & {
  openYear: boolean;
  openLeague: boolean;
  valueYear: any;
  valueLeague: any;
  itemsYear: any[];
  itemsLeague: any[];
  setOpenYear: any;
  setOpenLeague: any;
  setValueYear: any;
  setValueLeague: any;
  setItemsYear: any;
  setItemsLeague: any;
};

export default function YearLeagueRankOption({
  style,
  openYear,
  openLeague,
  valueLeague,
  valueYear,
  itemsLeague,
  itemsYear,
  setOpenLeague,
  setOpenYear,
  setValueLeague,
  setValueYear,
  setItemsLeague,
  setItemsYear,
}: YearLeagueRankOptionProps) {
  return (
    <View
      style={[
        styles.frameContainer,
        styles.frameContainerFlexBox,
        { zIndex: 100 },
      ]}
    >
      <View style={styles.comboBoxParent}>
        <DropDownPicker
          zIndex={1000}
          open={openYear}
          value={valueYear}
          items={itemsYear}
          setOpen={setOpenYear}
          setValue={setValueYear}
          setItems={setItemsYear}
          placeholder={itemsYear[0].label}
          style={[
            styles.comboBox,
            styles.wrapperSpaceBlock1,
            { minHeight: 40 },
          ]}
          containerStyle={{ borderWidth: 0 }}
          textStyle={[styles.text115, styles.textClr]}
          labelStyle={[styles.text116, styles.textClr]}
          listItemContainerStyle={[styles.wrapperBorder]}
          dropDownContainerStyle={[
            styles.wrapper,
            { borderWidth: 1, borderColor: Color.grayGray50, width: 98 },
          ]}
        />
      </View>
      <View style={styles.comboBoxGroup}>
        <DropDownPicker
          zIndex={1000}
          open={openLeague}
          value={valueLeague}
          items={itemsLeague}
          setOpen={setOpenLeague}
          setValue={setValueLeague}
          setItems={setItemsLeague}
          placeholder={itemsLeague[0].label}
          style={[
            styles.comboBox,
            styles.wrapperSpaceBlock1,
            { minHeight: 40 },
          ]}
          containerStyle={{ borderWidth: 0 }}
          textStyle={[styles.text115, styles.textClr]}
          labelStyle={[styles.text116, styles.textClr]}
          labelProps={{
            numberOfLines: 1,
          }}
          listItemContainerStyle={[styles.wrapper, styles.wrapperBorder]}
          dropDownContainerStyle={{ borderWidth: 0 }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text115: {
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    overflow: "hidden",
  },
  comboBoxParent: {
    width: 98,
  },
  frameContainerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  kusf: {
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    overflow: "hidden",
    flex: 1,
  },

  comboBox: {
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    borderRadius: Border.br_5xs,
    borderColor: Color.grayGray50,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_smi,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.grayWhite0,
  },
  frame: {
    paddingHorizontal: Padding.p_smi,
    flexDirection: "row",
  },
  wrapperSpaceBlock1: {
    paddingHorizontal: Padding.p_smi,
    flexDirection: "row",
  },
  comboBoxGroup: {
    width: 230,
    marginLeft: 10,
  },
  wrapper: {
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    alignItems: "flex-end",
    // paddingHorizontal: Padding.p_smi,
    flexDirection: "row",
  },
  wrapperBorder: {
    // display: "none",
    alignItems: "flex-end",
    paddingVertical: Padding.p_5xs,
    borderBottomWidth: 1,
    borderColor: Color.grayGray50,
    borderStyle: "solid",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.grayWhite0,
  },
  wrapperPosition: {
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    display: "none",
    alignItems: "flex-end",
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.grayWhite0,
  },
  wrapper1: {
    paddingHorizontal: Padding.p_smi,
    flexDirection: "row",
  },
  frameContainer: {
    // top: 123,
    // left: 25,
    flexDirection: "row",
    marginLeft: 25,
    paddingTop: 15,
    // position: "absolute",
  },
  textClr: {
    color: Color.grayGray800,
    textAlign: "left",
  },
  text116: {
    fontFamily: FontFamily.pretendard,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
  },
});
