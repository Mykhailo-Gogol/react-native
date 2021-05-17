import React from "react";
import { View, Text } from "react-native";

import { styles } from "./HeaderStyle";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

export default Header;
