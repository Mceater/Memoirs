import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import * as Yup from "yup";
import { Formik } from "formik";
import DataManager from "../config/DataManager";

const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(8).label("Password"),
});

const users = [
  {
    id: "user1",
    name: "Bruce Wayne",
    email: "batman@gmail.com",
    password: "1234",
    image: require("../assets/batman.jpg"),
  },
  {
    id: "user2",
    name: "Jack Dorsey",
    email: "jdorsey@gmail.com",
    password: "2345",
    image: require("../assets/Jack.jpg"),
  },
];
const validateUser = ({ email, password }) => {
  return (
    users.filter((user) => user.email === email && user.password === password)
      .length > 0
  );
};
const getUser = ({ email }) => {
  return users.find((user) => user.email === email);
};
const createUser = ({ email }) => {
  let commonData = DataManager.getInstance();
  let userID = getUser({ email }).id;
  commonData.setUserID(userID);
};

function Login({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/baw.jpg")}
      style={styles.container}
      blurRadius={2}
    >
      <View style={styles.icon}>
        <MaterialCommunityIcons name="camera" size={50} />
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          if (validateUser(values, users)) {
            resetForm();
            createUser(values);
            navigation.navigate("AccountPage", {
              screen: "AccountPage",
              params: {
                paramEmail: values.email,
                paramName: getUser(values).name,
                paramImage: getUser(values).image,
              },
            });
          } else {
            resetForm();
            alert("Failed to login; invalid details. Please try again");
          }
        }}
        validationSchema={schema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          setFieldTouched,
          touched,
        }) => (
          <>
            <View style={styles.container}>
              <View style={styles.authBox}>
                <Text style={styles.header}>Login</Text>
                <Text style={styles.subTitle}>Please sign in to continue.</Text>
                <View style={styles.input}>
                  <MaterialCommunityIcons name="email" size={20} />
                  <TextInput
                    name="emailField"
                    placeholder="Type in your email"
                    style={styles.textbox}
                    placeholderTextColor={"#000000"}
                    value={values.email}
                    onBlur={() => setFieldTouched("email")}
                    onChangeText={handleChange("email")}
                  />
                </View>
                <View style={styles.input}>
                  <MaterialCommunityIcons name="key" size={20} />
                  <TextInput
                    placeholder="Type in your password"
                    style={styles.textbox}
                    placeholderTextColor={"#000000"}
                    value={values.password}
                    onBlur={() => setFieldTouched("password")}
                    onChangeText={handleChange("password")}
                    secureTextEntry={true}
                  />
                </View>
                <AppButton title="Login" onPress={handleSubmit} />
              </View>
            </View>
          </>
        )}
      </Formik>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  authBox: {
    display: "flex",
    flexDirection: "column",
    height: "40%",
    top: "30%",
    width: "100%",
    padding: 30,
    alignItems: "flex-start",
  },

  header: {
    paddingTop: 30,
    paddingLeft: 10,
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Sans-Serif",
  },
  subTitle: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 10,
    fontWeight: "bold",
    fontFamily: "Sans-Serif",
  },
  textbox: {
    height: 40,
    margin: 12,
    padding: 10,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "20%",
    width: "80%",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  icon: {
    marginTop: "15%",
    alignItems: "center",
  },
});

export default Login;
