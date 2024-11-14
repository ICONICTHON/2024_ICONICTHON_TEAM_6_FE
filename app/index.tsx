import { Redirect } from "expo-router";
import { initializeKakaoSDK } from "@react-native-kakao/core";

const Index = () => {
  initializeKakaoSDK(process.env.EXPO_PUBLIC_KAKAO_NATIVE_KEY || "");

  return <Redirect href="/pages/player/playerList" />;
};
export default Index;
