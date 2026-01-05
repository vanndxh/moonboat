import { View, Text, Button } from "@tarojs/components";
import { useEffect, useState } from "react";
import { turtleSoups } from "./constants";
import Taro from "@tarojs/taro";

import styles from "./index.module.less";

export default function TurtleSoup() {
  const [curTurtleSoup, setCurTurtleSoup] = useState<Record<string, any>>({});
  const [history, setHistory] = useState<string[]>([]);

  const getRandomTurtleSoup = () => {
    const filteredList = turtleSoups?.filter((i) => !history.includes(i.title));
    if (filteredList.length <= 1) {
      Taro.showToast({
        title: "你居然全部看完了,神人啊!",
        icon: "error",
      });
      return;
    }
    const randomIndex = Math.floor(Math.random() * filteredList.length);
    const newTurtleSoup = filteredList[randomIndex];
    setHistory([...history, newTurtleSoup?.title]);
    setCurTurtleSoup(newTurtleSoup);
  };

  useEffect(() => {
    getRandomTurtleSoup();
  }, []);

  return (
    <View className={styles.turtleSoupContainer}>
      <View className={styles.title}>{curTurtleSoup?.title}</View>

      <View className={styles.contentArea}>
        <View className={styles.scenarioBox}>
          <Text className={styles.scenarioTitle}>汤面</Text>
          <Text>{curTurtleSoup?.scenario}</Text>
        </View>
        <View className={styles.solutionBox}>
          <Text className={styles.solutionTitle}>答案</Text>
          <Text>{curTurtleSoup?.solution}</Text>
        </View>
      </View>

      <View className={styles.footerButtonBar}>
        <Button className={styles.btnChange} onClick={getRandomTurtleSoup}>
          换一换
        </Button>
      </View>
    </View>
  );
}
