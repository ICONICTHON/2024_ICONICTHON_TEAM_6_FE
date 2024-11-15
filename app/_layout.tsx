import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import "react-native-reanimated";
import { HeaderButtonsProvider } from "react-navigation-header-buttons/HeaderButtonsProvider";
import { useColorScheme } from "@/hooks/useColorScheme";
import { LogBox } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  LogBox.ignoreAllLogs();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Pretendard: require("../node_modules/pretendard/dist/public/variable/PretendardVariable.ttf"),
    PretendardThin: require("../node_modules/pretendard/dist/public/static/Pretendard-Thin.otf"),
    PretendardBlack: require("../node_modules/pretendard/dist/public/static/Pretendard-Black.otf"),
    PretendardLight: require("../node_modules/pretendard/dist/public/static/Pretendard-Light.otf"),
    PretendardBold: require("../node_modules/pretendard/dist/public/static/Pretendard-Bold.otf"),
    PretendardMedium: require("../node_modules/pretendard/dist/public/static/Pretendard-Medium.otf"),
    PretendardExtraBold: require("../node_modules/pretendard/dist/public/static/Pretendard-ExtraBold.otf"),
    PretendardRegular: require("../node_modules/pretendard/dist/public/static/Pretendard-Regular.otf"),
    PretendardExtraLight: require("../node_modules/pretendard/dist/public/static/Pretendard-ExtraLight.otf"),
    PretendardSemiBold: require("../node_modules/pretendard/dist/public/static/Pretendard-SemiBold.otf"),
    RussoOneRegular: require("../assets/fonts/RussoOne-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <HeaderButtonsProvider stackType={"native"}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false, title: "동구기" }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </HeaderButtonsProvider>
    </ThemeProvider>
  );
}
