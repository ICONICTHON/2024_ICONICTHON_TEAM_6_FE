import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

type MyResponse = {
  body: any;
  statusCode: number;
};

export function useApiPatch(
  path: string,
  body: object
  // props: {}
): MyResponse {
  const [result, setResult] = useState({
    body: {},
    statusCode: 0,
  });
  useEffect(() => {
    const fetch = async (): Promise<void> => {
      const Frisbee = require("frisbee");
      const api = new Frisbee({
        baseURI: process.env.EXPO_PUBLIC_API_HOST,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${await SecureStore.getItemAsync(
            "accessToken"
          )}`,
        },
      });
      let res = await api.patch(path, { body: body });
      if (res.status == 401) {
        const sres = await api.post("/api/v1/auth/refresh", {
          headers: {
            Authorization: `Bearer ${await SecureStore.getItemAsync(
              "refreshToken"
            )}`,
          },
        });
        await SecureStore.setItemAsync("accessToken", sres.body.accessToken);
        res = await api.patch(path, {
          body: body,
          headers: {
            Authorization: `Bearer ${await SecureStore.getItemAsync(
              "accessToken"
            )}`,
          },
        });
      }

      setResult({
        body: await res.clone().json(),
        statusCode: res.status,
      });
    };
    fetch();
  }, []);
  return result;
}
