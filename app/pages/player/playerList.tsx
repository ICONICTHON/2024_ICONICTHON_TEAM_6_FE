import PlayerImg from "@/components/player/PlayerImg";
import { Color } from "@/constants/GlobalStyles";
import { apiGet } from "@/hooks/useApiGet";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";

export default function PlayerList() {
  const [playersData, setPlayersData] = useState([
    { name: "", no: "", img: "", _id: "" },
  ]);
  const [playerType, setPlayerType] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      let res = await apiGet(`/api/v1/player/list`);
      console.log(res.body);
      setPlayersData(res.body);

      // console.log(res.body);
    };
    fetch();
  }, []);
  return (
    <ScrollView style={{ backgroundColor: Color.white }}>
      <Stack.Screen
        options={{
          title: "선수 목록",
          headerTintColor: Color.colorDarkslateblue,
          headerStyle: {
            backgroundColor: Color.white,
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      <View style={{ margin: "auto" }}>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            padding: 5,
          }}
          columnWrapperStyle={{ gap: 21 }}
          data={playersData}
          renderItem={({ item }) => (
            <PlayerImg
              id={item._id}
              no={item.no}
              name={item.name}
              img={item.img}
            />
          )}
          numColumns={3}
        />
      </View>
    </ScrollView>
  );
}
