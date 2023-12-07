import {
  Pressable,
  StyleSheet,
  Text,
  View,
  map,
  Image,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

var data = [];

var url = "https://655841139c0b643cb2d6e996.mockapi.io/thi";
const Screen_1 = () => {
  const navigation = useNavigation();
  var [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        data = json;
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <view>
      {data.map((item) => {
        return (
          <View
            key={item.id}
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              margin: 10,
            }}
          >
            <Image
              style={{ width: 100, height: 70 }}
              source={{ uri: item.Image }}
            />
            <Text
              style={{
                backgroundColor: "red",
                color: "white",
              }}
            >
              Name: {item.name}
            </Text>

            <Button
              title="Delete"
              onPress={() => {
                fetch(url + "/" + item.id, {
                  method: "DELETE",
                }).then((result) => {
                  console.log(result);
                  setData(data);
                });
              }}
            ></Button>
          </View>
        );
      })}
    </view>
  );
};

export default Screen_1;

const styles = StyleSheet.create({});
