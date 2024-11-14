import BasketballStats from "@/components/player/BasketballStats";
import HitterStats from "@/components/player/HitterStats";
import PitcherStats from "@/components/player/PitcherStats";
import PlayerProfile from "@/components/player/PlayerProfile";
import SoccerStats from "@/components/player/SoccerStats";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "@/constants/GlobalStyles";
import { apiGet, useApiGet } from "@/hooks/useApiGet";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Player() {
  const { playerId } = useLocalSearchParams<{ playerId: string }>();
  const [playerData, setPlayerData] = useState(null);
  const [playerPf, setPlayerPf] = useState(null);
  const [playerType, setPlayerType] = useState(0);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      let res = await apiGet(`/api/v1/player/record/${playerId}`);
      let res2 = await apiGet(`/api/v1/player/profile/${playerId}`);
      console.log(res.body);
      console.log(res2.body);

      setPlayerPf(res2.body);
      setPlayerData(res.body);

      // console.log(res.body);
    };
    fetch();
  }, []);

  useEffect(() => {
    console.log(playerData);
    if (playerPf == null) {
      setPlayerType(0);
    } else if (playerPf.sports_type == "baseball" && playerPf.tuta == 0) {
      setPlayerType(1);
    } else if (playerPf.sports_type == "baseball" && playerPf.tuta == 1) {
      setPlayerType(2);
    } else if (playerPf.sports_type == "basketball") {
      setPlayerType(3);
    } else if (playerPf.sports_type == "soccer") {
      setPlayerType(4);
    }
    console.log(playerType);
  }, [playerPf]);

  // let stats;
  // if (playerData == null) {
  // } else if (playerData.sports_type == "baseball" && playerData.tuta == 0) {
  //   stats = "()";
  // } else if (playerData.sports_type == "baseball" && playerData.tuta == 1) {
  //   stats = <PitcherStats data={playerData.league_pitcher_record[2024]} />;
  // } else if (playerData.sports_type == "basketball") {
  //   stats = <BasketballStats data={playerData.league_record[2024]} />;
  // } else if (playerData.sports_type == "soccer") {
  //   stats = <SoccerStats data={playerData.league_record[2024]} />;
  // }
  return (
    <View style={styles.view}>
      <Stack.Screen
        options={{
          title: "선수 정보",
          headerTintColor: "#000",
          headerStyle: {
            backgroundColor: Color.main,
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerRight: () => {
            return (
              <View>
                {favorite ? (
                  <TouchableOpacity
                    onPress={() => {
                      setFavorite(!favorite);
                    }}
                  >
                    <Ionicons
                      name="star"
                      size={24}
                      color={Color.colorDarkslateblue}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      setFavorite(!favorite);
                    }}
                  >
                    <Ionicons
                      name="star-outline"
                      size={24}
                      color={Color.colorDarkslateblue}
                    />
                  </TouchableOpacity>
                )}
              </View>
            );
          },
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        <PlayerProfile data={playerPf} />
        {playerType == null && (
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
        {playerType == 1 && (
          <View>
            <View style={{ height: 100 }}></View>
            <HitterStats data={playerData.league__hitter_record[2024]} />
          </View>
        )}
        {playerType == 2 && (
          <PitcherStats data={playerData.league_pitcher_record[2024]} />
        )}
        {playerType == 3 && (
          <BasketballStats data={playerData.league_record[2024]} />
        )}
        {playerType == 4 && (
          <SoccerStats data={playerData.league_record[2024]} />
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.backgroundBg50,
    flex: 1,
    width: "100%",
    // height: 851,
    overflow: "hidden",
  },
});
