import {
  View,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from 'react-native-paper';
import * as Yup from "yup";
import { Formik } from "formik";
import DataManager from "../config/DataManager";
import { LinearGradient } from 'expo-linear-gradient';

const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(8).label("Password"),
});

const validateUser = ({ email, password }, users) => {
  return (
    users.filter((user) => user.email === email && user.password === password)
      .length > 0
  );
};
const getUser = ({ email }, users) => {
  return users.find((user) => user.email === email);
};
const createUser = ({ email }, users) => {
  let commonData = DataManager.getInstance();
  let userID = getUser({ email }, users).id;
  commonData.setUserID(userID);
};

function Login({ navigation, users }) {
  return (
    <LinearGradient
      colors={['#000000', '#1a1a1a', '#2d2d2d']}
      style={styles.container}
    >
      <View style={styles.icon}>
                <MaterialCommunityIcons name="camera-plus" size={50} color="#ffffff" />
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          if (validateUser(values, users)) {
            resetForm();
            createUser(values, users);
                    navigation.navigate("MainApp", {
                      screen: "AccountPage",
                      params: {
                        paramEmail: values.email,
                        paramName: getUser(values, users).name,
                        paramImage: getUser(values, users).image,
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
                          <MaterialCommunityIcons name="email-outline" size={20} color="#ffffff" />
                  <TextInput
                    name="emailField"
                    placeholder="Type in your email"
                    style={styles.textbox}
                    placeholderTextColor={"#cccccc"}
                    value={values.email}
                    onBlur={() => setFieldTouched("email")}
                    onChangeText={handleChange("email")}
                  />
                </View>
                <View style={styles.input}>
                  <MaterialCommunityIcons name="lock-outline" size={20} color="#ffffff" />
                  <TextInput
                    placeholder="Type in your password"
                    style={styles.textbox}
                    placeholderTextColor={"#cccccc"}
                    value={values.password}
                    onBlur={() => setFieldTouched("password")}
                    onChangeText={handleChange("password")}
                    secureTextEntry={true}
                  />
                </View>
                <Button 
                  mode="contained" 
                  onPress={handleSubmit} 
                  style={styles.button}
                  buttonColor="#ffffff"
                  textColor="#000000"
                >
                  Login
                </Button>
              </View>
            </View>
          </>
        )}
      </Formik>
    </LinearGradient>
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
    fontSize: 32,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "System",
    color: "#ffffff",
    letterSpacing: 1,
  },
  subTitle: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "System",
    color: "#e0e0e0",
    letterSpacing: 0.5,
  },
  textbox: {
    height: 45,
    margin: 12,
    padding: 12,
    fontSize: 16,
    color: "#ffffff",
    fontFamily: "System",
    fontWeight: "400",
  },
  input: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    width: "85%",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.3)",
    borderRadius: 12,
    margin: 10,
    padding: 12,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  icon: {
    marginTop: "15%",
    alignItems: "center",
  },
  button: {
    borderRadius: 25,
    minWidth: 180,
    marginTop: 20,
    paddingVertical: 8,
  },
});

export default Login;
