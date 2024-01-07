import { StyleSheet, Image, View } from "react-native";
import React from "react";

import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/form";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/photo.jpg")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autuCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        {/* <AppText>{errors.email}</AppText> */}
        {/* <ErrorMessage error={errors.email} visible={touched.email} /> */}
        <AppFormField
          autoCapitalize="none"
          autuCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        {/* <AppText>{errors.password}</AppText> */}
        {/* <ErrorMessage error={errors.password} visible={touched.password} /> */}
        {/* <AppButton title="Login" onPress={handleSubmit} /> */}
        <SubmitButton title="Login" />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  logo: {
    height: 100,
    width: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  text: {
    color: "red",
  },
});

export default LoginScreen;
