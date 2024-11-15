import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Image } from "react-native";
import {
  FontFamily,
  Padding,
  Color,
  FontSize,
} from "../../../../constants/GlobalStyles";
import CommentCard from "@/components/community/CommentCard";
import ReCommnetCard from "@/components/community/ReCommnetCard";
import PostHeader from "@/components/community/PostHeader";
import PostDescription from "@/components/community/PostDescription";
import { Stack, useLocalSearchParams } from "expo-router";
import { apiGet } from "@/hooks/useApiGet";
import { apiPost } from "@/hooks/useApiPost";

export default function PostDetail() {
  const { postId } = useLocalSearchParams<{ postId: string }>();
  const [loaded, setLoaded] = useState(false);

  const [postData, setPostData] = useState({
    title: "",
    sports: 0,
    description: "",
    author: "",
    likes: 0,
    comment: [
      {
        description: "",
        author: "",
      },
    ],
  });
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetch = async () => {
      let res = await apiGet(`/api/v1/post/post/${postId}`);
      setPostData(res.body);
      setLoaded(true);
    };
    fetch();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={100}
      style={styles.view}
    >
      <Stack.Screen
        options={{
          title: "게시판",
          headerTintColor: "#000",
          headerStyle: {
            backgroundColor: "#FAFAFA",
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.frameParent}>
          <PostHeader author={postData.author} />
          <Text style={[styles.text, styles.textTypo]}>{postData.title}</Text>
          {!loaded && <ActivityIndicator />}
          <PostDescription
            description={postData.description}
            likes={postData.likes}
            comments={postData.comment.length}
          />
        </View>
        <View style={styles.frameGroup}>
          {postData.comment.map((v, i, a) => {
            return (
              <CommentCard
                key={i}
                author={v.author}
                description={v.description}
              />
            );
          })}
          {/* <ReCommnetCard
            author="답댓글다는사람"
            description="댓글이다 이것이 완전 댓글을 사람들이 얼마나 길게 쓰려나 제발 짧게 좀 써주세요 서버 용량이 부족해요"
          /> */}
        </View>
        <View style={{ height: 100 }}></View>
      </ScrollView>
      <View style={[styles.frameContainer, styles.wrapperFlexBox]}>
        <TextInput
          style={[styles.wrapper, styles.wrapperFlexBox]}
          value={newComment}
          onChangeText={(text) => setNewComment(text)}
          placeholder="댓글을 입력하세요."
          onSubmitEditing={async (event) => {
            setNewComment(event.nativeEvent.text);
            if (newComment == "") {
              return Alert.alert(
                "쓰신게 없음",
                "댓글을 작성하고 작성을 눌러주세요",
                [
                  {
                    text: "넵!",
                    onPress: () => {},
                  },
                ]
              );
            }
            const res = await apiPost(`/api/v1/post/comment/${postId}`, {
              description: newComment,
            });
            if (res.statusCode == 200) {
              setNewComment("");
              setPostData(res.body);
              return Alert.alert("댓글 작성!", "댓글을 작성했어요!", [
                {
                  text: "넵!",
                  onPress: () => {},
                },
              ]);
            }
          }}
        />
        {/* <Text style={[styles.text1, styles.textTypo]}>
            댓글을 입력하세요.
          </Text>
        </TextInput> */}
        <Image
          style={styles.upenIcon}
          resizeMode="cover"
          source={require("../../../../assets/pages/community/postDetail/upen.png")}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.1,
  },
  wrapperFlexBox: {
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    alignSelf: "stretch",
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "600",
    color: Color.grayGray800,
  },
  frameParent: {
    // top: 0,
    left: 0,
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "center",
    width: 375,
    // position: "absolute",
  },
  frameGroup: {
    // top: 419,
    left: 16,
    width: 343,
    // position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.grayGray300,
  },
  wrapper: {
    borderRadius: 99,
    backgroundColor: Color.grayGray50,
    height: 40,
    paddingVertical: 0,
    flex: 1,
  },
  upenIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frameContainer: {
    marginLeft: -187.5,
    bottom: 0,
    left: "50%",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: Color.grayGray50,
    borderTopWidth: 1,
    paddingTop: Padding.p_xl,
    paddingBottom: 40,
    gap: 11,
    width: 375,
    flexDirection: "row",
    position: "absolute",
  },
  view: {
    backgroundColor: Color.backgroundBg50,
    width: "100%",
    // height: 966,
    overflow: "hidden",
    flex: 1,
  },
});
