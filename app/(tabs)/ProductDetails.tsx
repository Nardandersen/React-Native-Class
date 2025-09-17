import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../styles";
import { useRouter } from "expo-router";


export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(require("../images/gallery-1.jpg"));
  const [quantity, setQuantity] = useState("1");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const smallImages = [
    require("../images/gallery-1.jpg"),
    require("../images/gallery-2.jpg"),
    require("../images/gallery-3.jpg"),
    require("../images/gallery-4.jpg"),
  ];
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      {/* Navbar - always clickable */}
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => router.push("/HomeScreen")}> 
          <Image source={require("./images/logo.png")} style={styles.footerLogo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Image source={require("./images/menu.png")} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <View style={{ padding: 16 }}>
          {/* Product Section - vertical stack for mobile */}
          <Image source={selectedImage} style={[styles.productImg, { marginBottom: 16 }]} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
            <View style={{ flexDirection: "row" }}>
              {smallImages.map((img, index) => (
                <TouchableOpacity
                  key={index}
                  style={{ marginHorizontal: 8 }}
                  onPress={() => setSelectedImage(img)}
                >
                  <Image source={img} style={styles.smallImg} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <Text style={styles.productTitle}>Home / T-Shirt</Text>
          <Text style={styles.h1}>Red Printed T-Shirt by HRX</Text>
          <Text style={styles.productPrice}>₱750.00</Text>
          {/* Size Selector */}
          {/* Quantity Input */}
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={quantity}
            onChangeText={setQuantity}
          />
          {/* Add to Cart */}
          <TouchableOpacity style={styles.btn} onPress={() => router.push("/CartScreen")}> 
            <Text style={styles.btnText}>Add to Cart</Text>
          </TouchableOpacity>
          <Text style={styles.h3}>Product Details</Text>
          <Text style={styles.p}>
            Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or denims for an evening out with the guys.
          </Text>

          {/* Related Products - horizontal scroll for mobile */}
          <View style={styles.smallContainer}>
            <Text style={styles.h2}>Related Products</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
              <View style={{ flexDirection: "row" }}>
                {[
                  { img: require("./images/product-9.jpg"), name: "Roadster Watch", price: "₱750.00" },
                  { img: require("./images/product-10.jpg"), name: "Running Shoes 46", price: "₱2250.00" },
                  { img: require("./images/product-11.jpg"), name: "Running Shoes 1", price: "₱1050.00" },
                  { img: require("./images/product-12.jpg"), name: "NIKE TrackPants", price: "₱750.00" },
                ].map((item, i) => (
                  <TouchableOpacity key={i} style={{ width: 180, marginHorizontal: 8 }} onPress={() => router.push("/ProductDetails")}> 
                    <Image source={item.img} style={styles.productImg} />
                    <Text style={styles.productTitle}>{item.name}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Footer - vertical stack */}
          <View style={styles.footer}>
            <Text style={styles.h3}>Download Our App</Text>
            <Text>Download App for Android and iOS</Text>
            <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 12 }}>
              <Image source={require("./images/play-store.png")} style={styles.footerLogo} />
              <Image source={require("./images/app-store.png")} style={styles.footerLogo} />
            </View>
            <Text style={styles.copyright}>Copyright 2020 - Nard Epico</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
