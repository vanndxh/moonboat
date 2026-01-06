import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";

import styles from "./index.module.less";

export default function Index() {
  const cards = [
    {
      title: "原神抽卡记录导出",
      url: "/pages/Genshin/index",
      iconUrl:
        "https://ts1.tc.mm.bing.net/th/id/ODF.9_NtgMCMkLHY0oSbrk3suQ?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
    },
    {
      title: "米池模拟器",
      url: "/pages/Wish/index",
    },
    {
      title: "海龟汤",
      url: "/pages/TurtleSoup/index",
    },
  ];

  return (
    <View className={styles.container}>
      {cards.map((i) => (
        <View
          className={styles.card}
          onClick={() => {
            Taro.navigateTo({
              url: i.url,
            });
          }}
        >
          {i?.iconUrl && <Image src={i?.iconUrl} className={styles.cardIcon} />}
          <Text>{i.title}</Text>
        </View>
      ))}

      <View className={styles.footer}>
        <View className={styles.divider} />
        <Text className={styles.contactText}>联系作者： 1025196468@qq.com</Text>
      </View>
    </View>
  );
}
