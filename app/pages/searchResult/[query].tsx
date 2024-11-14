import CoachProfileSearch from "@/components/coach/CoachProfileSearch";
import PlayerProfileSearch from "@/components/player/PlayerProfileSearch";
import { Color } from "@/constants/GlobalStyles";
import { apiGet } from "@/hooks/useApiGet";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";

export default function SearchResult() {
  const { query } = useLocalSearchParams<{ query: string }>();

  const [queryNow, setQueryNow] = useState(query);
  const [searchResult, setSearchResult] = useState([]);
  const [searchResultCoach, setSearchResultCoach] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      let res = await apiGet(`/api/v1/player/search/${queryNow}`);
      setSearchResult(res.body);
      let resc = await apiGet(`/api/v1/coach/search/${queryNow}`);
      setSearchResultCoach(resc.body);

      // console.log(res.body);
    };
    fetch();
  }, [queryNow]);

  return (
    <View>
      <Stack.Screen
        options={{
          title: "검색 결과",
          headerTintColor: Color.colorDarkslateblue,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      <View>
        {searchResult.map((v, i, a) => {
          return (
            <TouchableOpacity
              onPress={() => {
                router.navigate({
                  pathname: "/pages/player/[playerId]",
                  params: { playerId: v._id },
                });
              }}
            >
              <PlayerProfileSearch data={v} key={`p ${i}`} />
              <View
                style={{
                  borderBottomWidth: 1,
                  marginHorizontal: 20,
                  borderBottomColor: Color.grayGray50,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <View>
        {searchResultCoach.map((v, i, a) => {
          return (
            <TouchableOpacity
              onPress={() => {
                router.navigate({
                  pathname: "/pages/coach/[coachId]",
                  params: { coachId: v._id },
                });
              }}
            >
              <CoachProfileSearch data={v} key={`c ${i}`} />
              <View
                style={{
                  borderBottomWidth: 1,
                  marginHorizontal: 20,
                  borderBottomColor: Color.grayGray50,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
