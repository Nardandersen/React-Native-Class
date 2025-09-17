import React, { useState } from "react";
import { useRouter } from "expo-router";
import { View, ScrollView, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default function AccountScreen() {
  const [tab, setTab] = useState("login");
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View>
          <View style={[styles.accountPage, { flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: 32 }]}> 
            {/* Stack image and form vertically for mobile */}
            <Image
              source={require("./images/image1.png")}
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
                  />
                  <TextInput
                    placeholder="Password"
                    style={[styles.formInput, { fontSize: 18, height: 48, marginBottom: 12 }]}
                    placeholderTextColor="#888"
                    secureTextEntry
                  />
                  <TouchableOpacity style={[styles.btn, { height: 48, borderRadius: 8, marginBottom: 8 }]} onPress={() => router.push('/HomeScreen')}>
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
                  />
                  <TextInput
                    placeholder="Email"
                    style={[styles.formInput, { fontSize: 18, height: 48, marginBottom: 12 }]}
                    placeholderTextColor="#888"
                  />
                  <TextInput
                    placeholder="Password"
                    style={[styles.formInput, { fontSize: 18, height: 48, marginBottom: 12 }]}
                    placeholderTextColor="#888"
                    secureTextEntry
                  />
                  <TouchableOpacity style={[styles.btn, { height: 48, borderRadius: 8, marginBottom: 8 }]} onPress={() => {/* handle register */}}>
                    <Text style={[styles.btnText, { fontSize: 20 }]}>Register</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          {/* FOOTER */}
          <View style={styles.footer}>
            <Image source={require("./images/logo.png")} style={styles.footerLogo} />
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
