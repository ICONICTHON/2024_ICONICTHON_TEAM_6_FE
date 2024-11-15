import PostCardFull from "@/components/community/PostCardFull";
import { Color } from "@/constants/GlobalStyles";
import { apiGet } from "@/hooks/useApiGet";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

export default function PostList() {
  const { postType } = useLocalSearchParams<{ postType: string }>();
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([
    {
      _id: "",
      author: "",
      comment: [
        {
          author: "",
          ct: "2024-08-27T17:50:32.341730",
          description: "",
          mt: "2024-08-27T17:50:32.341752",
        },
      ],
      ct: "2024-08-27T17:47:35.770743",
      description: "",
      likes: 0,
      mt: "2024-08-27T17:47:35.770758",
      sports: 0,
      title: "",
    },
  ]);

  useEffect(() => {
    const fetch = async () => {
      let res = await apiGet(`/api/v1/post/post`);
      setData(res.body.posts);
      setLoaded(true);
    };
    fetch();
  }, []);

  return (
    <View style={{ backgroundColor: "#FAFAFA" }}>
      <Stack.Screen
        options={{
          title: "게시판",
          headerTintColor: Color.colorDarkslateblue,
          headerStyle: {
            backgroundColor: "#FFF",
          },
        }}
      />
      {!loaded && <ActivityIndicator />}
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <PostCardFull
              isFull={true}
              title={item.title}
              img=""
              postId={item._id}
              description={item.description}
              date={item.mt}
              likes={item.likes}
              comments={item.comment.length}
              sports_type={item.sports}
            />
          );
        }}
      />
    </View>
  );
}
