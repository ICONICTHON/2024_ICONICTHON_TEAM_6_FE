import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Button,
  Pressable,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import {
  FontSize,
  Color,
  FontFamily,
} from "../../../../constants/GlobalStyles";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { apiPost } from "@/hooks/useApiPost";
import { apiGet } from "@/hooks/useApiGet";

export default function NewPost() {
  const { postId } = useLocalSearchParams<{ postId?: string }>();
  console.log(postId);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      if (postId != "new") {
        console.log("here!");
        let res = await apiGet(`/api/v1/post/post/${postId}`);
        console.log(res.body);
        setTitle(res.body.title);
        setDescription(res.body.description);
      }
    };
    fetch();
  }, []);
  return (
    <KeyboardAvoidingView
      style={styles.view}
      behavior="height"
      keyboardVerticalOffset={50}
    >
      <Stack.Screen
        options={{
          title: "글 쓰기",
          headerTintColor: Color.colorDarkslateblue,
          //   headerStyle: {
          //     backgroundColor: "#FAFAFA",
          //   },
          //   headerShadowVisible: false,
          //   headerBackTitleVisible: false,
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={async () => {
                  if (title == "" || description == "") {
                    return Alert.alert(
                      "쓰신게 없음",
                      "작성을 완료하고 눌러주세요!",
                      [
                        {
                          text: "넵!",
                          onPress: () => {},
                        },
                      ]
                    );
                  }
                  setLoaded(false);
                  const res = await apiPost("/api/v1/post/post", {
                    title: title,
                    sports: 0,
                    description: description,
                  });
                  setLoaded(true);
                  return Alert.alert("글을 작성했어요!", "어디로 갈까요?", [
                    {
                      text: "글 보기",
                      onPress: () => {
                        router.replace({
                          pathname: "/pages/community/postDetail/[postId]",
                          params: { postId: res.body.post_id },
                        });
                      },
                    },
                    {
                      text: "나가기",
                      onPress: () => {
                        router.back();
                      },
                    },
                  ]);
                }}
              >
                <Text style={{ fontSize: 16, color: Color.colorDarkslateblue }}>
                  작성
                </Text>
              </TouchableOpacity>
            );
          },
        }}
      />
      <TextInput
        style={styles.text}
        placeholder="제목"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={[styles.text1, styles.textTypo, { color: Color.grayGray500 }]}
        multiline={true}
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder="자유롭게 작성해보세요!"
      />
      <View style={[styles.child, styles.childPosition]} />
      {!loaded && <ActivityIndicator />}
      <View style={[styles.ucameraParent, styles.childPosition]}>
        <Image
          style={styles.ucameraIcon}
          resizeMode="cover"
          source={require("../../../../assets/pages/community/newPost/ucamera.png")}
        />
        <Text style={styles.textTypo}>사진 추가하기(최대 4장)</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  textTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.grayGray300,
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
  },
  childPosition: {
    borderTopWidth: 1,
    borderColor: Color.grayGray50,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  text: {
    top: 23,
    fontSize: 18,
    lineHeight: 25,
    textAlign: "left",
    color: Color.grayGray800,
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
    left: 16,
    position: "absolute",
  },
  text1: {
    top: 88,
    left: 16,
    position: "absolute",
    width: "90%",
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  child: {
    marginLeft: -172,
    top: 68,
    width: 344,
    height: 1,
  },
  ucameraIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  ucameraParent: {
    marginLeft: -187.5,
    bottom: 70,
    width: 375,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
  },
  view: {
    backgroundColor: Color.backgroundBg50,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});
