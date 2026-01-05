import { View, Text, Button } from "@tarojs/components";
import styles from "./index.module.less";

export default function TurtleSoup() {
  return (
    <View className={styles.turtleSoupContainer}>
      <View className={styles.contentArea}>
        <View className={styles.scenarioBox}>
          <Text className={styles.scenarioTitle}>汤面</Text>
          <Text>这里是汤面内容，模拟展示~</Text>
        </View>
        <View className={styles.solutionBox}>
          <Text className={styles.solutionTitle}>答案</Text>
          <Text>这里是答案内容，模拟展示~</Text>
        </View>
      </View>

      <View className={styles.footerButtonBar}>
        <Button
          className={styles.btnChange}
          onClick={() => {
            /* 后续可补换题逻辑 */
          }}
        >
          换一换
        </Button>
      </View>
    </View>
  );
}
