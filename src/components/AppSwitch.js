import { View, Switch } from "react-native";
import React, { useState } from "react";

const AppSwitch = () => {
  const [isNew, setISNew] = useState(false);

  return (
    <View>
      <Switch value={isNew} onValueChange={(newValue) => setISNew(newValue)} />
    </View>
  );
};

export default AppSwitch;
