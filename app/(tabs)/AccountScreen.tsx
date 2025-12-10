import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles";

export default function AccountScreen() {
  const [tab, setTab] = useState("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem(username);
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
          alert(`Welcome back, ${user.username}!`);
          router.push("/HomeScreen");
        } else {
          alert("Invalid password.");
        }
      } else {
        alert("User not found.");
      }
    } catch (error) {
      alert("An error occurred during login.");
    }
  };

  const handleRegister = async () => {
    try {
      const existingUser = await AsyncStorage.getItem(username);
      if (existingUser) {
        alert("User already exists.");
      } else {
        const user = { username, email, password };
        await AsyncStorage.setItem(username, JSON.stringify(user));
        alert("Registration successful!");
        setTab("login");
      }
    } catch (error) {
      alert("An error occurred during registration.");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View>
          <View style={[styles.accountPage, { flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: 32 }]}> 
            {/* Stack image and form vertically for mobile */}
            <Image
              source={require("../images/image1.png")}
              style={{ width: 180, height: 180, resizeMode: "contain", marginBottom: 24 }}
            />
            <View style={[styles.formContainer, { width: "90%", maxWidth: 400 }]}> 
              {/* Tabs (Login / Register) */}
              <View style={[styles.formBtnRow, { flexDirection: "row", justifyContent: "center", marginBottom: 16 }]}> 
                <TouchableOpacity onPress={() => setTab("login")}> 
                  <Text style={[styles.formTab, { color: tab === "login" ? "#ff523b" : "#555", fontSize: 18, paddingHorizontal: 12 }]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTab("register")}> 
                  <Text style={[styles.formTab, { color: tab === "register" ? "#ff523b" : "#555", fontSize: 18, paddingHorizontal: 12 }]}>Register</Text>
                </TouchableOpacity>
              </View>
              {/* Login Form */}
              {tab === "login" && (
                <View>
                  <TextInput
                    placeholder="Username"
                    style={[styles.formInput, { fontSize: 18, height: 48, marginBottom: 12 }]}
                    placeholderTextColor="#888"
                    value={username}
                    onChangeText={setUsername}
                  />
                  <TextInput
                    placeholder="Password"
                    style={[styles.formInput, { fontSize: 18, height: 48, marginBottom: 12 }]}
                    placeholderTextColor="#888"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity style={[styles.btn, { height: 48, borderRadius: 8, marginBottom: 8 }]} onPress={handleLogin}>
                    <Text style={[styles.btnText, { fontSize: 20 }]}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {/* handle forgot password */}}>
                    <Text style={[styles.formLink, { fontSize: 16, color: "#ff523b", textAlign: "center" }]}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
              )}
              {/* Register Form */}
              {tab === "register" && (
                <View>
                  <TextInput
                    placeholder="Username"
                    style={[styles.formInput, { fontSize: 18, height: 48, marginBottom: 12 }]}
                    placeholderTextColor="#888"
                    value={username}
                    onChangeText={setUsername}
                  />
                  <TextInput
                    placeholder="Email"
                    style={[styles.formInput, { fontSize: 18, height: 48, marginBottom: 12 }]}
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={setEmail}
                  />
                  <TextInput
                    placeholder="Password"
                    style={[styles.formInput, { fontSize: 18, height: 48, marginBottom: 12 }]}
                    placeholderTextColor="#888"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity style={[styles.btn, { height: 48, borderRadius: 8, marginBottom: 8 }]} onPress={handleRegister}>
                    <Text style={[styles.btnText, { fontSize: 20 }]}>Register</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          {/* FOOTER */}
          <View style={styles.footer}>
            <Image source={require("../images/logo.png")} style={styles.footerLogo} />
            <Text style={styles.footerText}>
              Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.
            </Text>
            <View style={styles.footerHr} />
            <Text style={styles.copyright}>
              © 2025 ICT Project – All Rights Reserved
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
