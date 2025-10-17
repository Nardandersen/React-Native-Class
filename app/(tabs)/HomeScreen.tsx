// HomeScreen.tsx
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles";
export default function HomeScreen() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      {/* Navbar - always clickable */}
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => router.push("/HomeScreen")}> 
           <Image source={require("../images/logo.png")} style={styles.footerLogo} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        {/* Hero Section - vertical stack for mobile */}
        <View style={{ alignItems: "center", padding: 16 }}>
          <Image source={require("./images/image1.png")} style={[styles.productImg, { marginBottom: 16 }]} />
          <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 8, textAlign: "center" }}>
            {`Give Your Workout\nA New Style!`}
          </Text>
          <Text style={{ fontSize: 16, color: "#555", marginBottom: 12, textAlign: "center" }}>
            Success isn't always about greatness. It's about consistency. Consistent hard work gains success. Greatness will come.
          </Text>
          <TouchableOpacity style={styles.btn} onPress={() => router.push("/ProductScreen")}> 
            <Text style={styles.btnText}>Explore Now →</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Categories - vertical stack */}
        <Text style={styles.sectionTitle}>Featured Categories</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 16 }}>
          <Image source={require("./images/category-1.jpg")} style={styles.catImg} />
          <Image source={require("./images/category-2.jpg")} style={styles.catImg} />
          <Image source={require("./images/category-3.jpg")} style={styles.catImg} />
        </View>

        {/* Featured Products - vertical grid */}
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {[1,2,3,4].map((i) => {
            const product = [
              {img: require("./images/product-1.jpg"), name: "Red Printed T-Shirt", price: "₱750.00", rating: 4, details: "Red Printed T-Shirt by HRX"},
              {img: require("./images/product-2.jpg"), name: "The Runnie SapaShoes", price: "₱2250.00", rating: 3.5, details: "Running Shoes 46"},
              {img: require("./images/product-3.jpg"), name: "Gray TrackPants", price: "₱1050.00", rating: 4, details: "NIKE TrackPants"},
              {img: require("./images/product-4.jpg"), name: "The POLO", price: "₱750.00", rating: 2.5, details: "Roadster Watch"},
            ][i-1];
            return (
              <TouchableOpacity key={i} style={{ width: "48%", marginBottom: 16 }} onPress={() => router.push("/ProductDetails")}> 
                <Image source={product.img} style={styles.productImg} />
                <Text style={styles.productTitle}>{product.name}</Text>
                <View style={styles.rating}>
                  {[1,2,3,4,5].map((star) => (
                    <Icon
                      key={star}
                      name={star <= Math.floor(product.rating) ? "star" : (star - product.rating === 0.5 ? "star-half-o" : "star-o")}
                      size={16}
                      color="#ff523b"
                      style={{ marginRight: 2 }}
                    />
                  ))}
                </View>
                <Text style={styles.productPrice}>{product.price}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Latest Products - vertical grid */}
        <Text style={styles.sectionTitle}>Latest Products</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {[5,6,7,8].map((i) => {
            const product = [
              {img: require("./images/product-5.jpg"), name: "AirWalk Heavens HIGHCUT", price: "₱2250.00", rating: 4},
              {img: require("./images/product-6.jpg"), name: "The LionJump T-Shirt", price: "₱750.00", rating: 3.5},
              {img: require("./images/product-7.jpg"), name: "Cogon Rated Socks", price: "₱499.00", rating: 4},
              {img: require("./images/product-8.jpg"), name: "Fossil BangBang Watch", price: "₱699.00", rating: 2.5},
            ][i-5];
            return (
              <View key={i} style={{ width: "48%", marginBottom: 16 }}>
                <Image source={product.img} style={styles.productImg} />
                <Text style={styles.productTitle}>{product.name}</Text>
                <View style={styles.rating}>
                  {[1,2,3,4,5].map((star) => (
                    <Icon
                      key={star}
                      name={star <= Math.floor(product.rating) ? "star" : (star - product.rating === 0.5 ? "star-half-o" : "star-o")}
                      size={16}
                      color="#ff523b"
                      style={{ marginRight: 2 }}
                    />
                  ))}
                </View>
                <Text style={styles.productPrice}>{product.price}</Text>
              </View>
            );
          })}
        </View>

        {/* Offer Section - vertical stack */}
        <View style={{ alignItems: "center", padding: 16 }}>
          <Image source={require("./images/exclusive.png")} style={[styles.productImg, { marginBottom: 16 }]} />
          <Text style={{ color: "#555", marginBottom: 8 }}>Exclusively Available on Redstore</Text>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>Smart Band 4</Text>
          <Text style={{ color: "#666", marginBottom: 8, textAlign: "center" }}>
            The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be
          </Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Buy Now →</Text>
          </TouchableOpacity>
        </View>

        {/* Testimonials - vertical stack */}
        <Text style={styles.sectionTitle}>Testimonials</Text>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          {[
            {text: "Managers and co-workers have commented on high levels of accuracy and work productivity.", img: require("./images/user-1.png"), name: "Sean Parker"},
            {text: "Always follows through and finds the answers to any questions and reports back to the customer promptly.", img: require("./images/user-2.png"), name: "Mike Smith"},
            {text: "Provides meaningful information to decision makers that helps in the preparation and implementation of projects.", img: require("./images/user-3.png"), name: "Mabel Joe"},
          ].map((testimonial, i) => (
            <View key={i} style={{ width: "90%", marginBottom: 16, alignItems: "center", backgroundColor: "#fff", borderRadius: 12, padding: 16, elevation: 2 }}>
              <Icon name="quote-left" size={24} color="#ff523b" style={{ marginBottom: 8 }} />
              <Text style={{ color: "#555", marginBottom: 8, textAlign: "center" }}>{testimonial.text}</Text>
              <View style={styles.rating}>
                {[1,2,3,4,5].map((star) => (
                  <Icon
                    key={star}
                    name={star <= 4 ? "star" : "star-o"}
                    size={16}
                    color="#ff523b"
                    style={{ marginRight: 2 }}
                  />
                ))}
              </View>
              <Image source={testimonial.img} style={{ width: 60, height: 60, borderRadius: 30, marginVertical: 8 }} />
              <Text style={{ fontWeight: "bold", color: "#333" }}>{testimonial.name}</Text>
            </View>
          ))}
        </View>

        {/* Brands - horizontal scroll for mobile */}
        <Text style={styles.sectionTitle}>Brands</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {[
              require("./images/logo-godrej.png"),
              require("./images/logo-oppo.png"),
              require("./images/logo-coca-cola.png"),
              require("./images/logo-paypal.png"),
              require("./images/logo-philips.png"),
            ].map((img, i) => (
              <View key={i} style={{ alignItems: "center", marginHorizontal: 12 }}>
                <Image source={img} style={{ width: 80, height: 40, resizeMode: "contain" }} />
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Footer - vertical stack */}
        <View style={styles.footer}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", textAlign: "center" }}>Download Our App</Text>
          <Text style={{ color: "#bbb", marginBottom: 8, textAlign: "center" }}>Download App for Android and IOS mobile phone</Text>
          <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 12 }}>
            <Image source={require("./images/play-store.png")} style={styles.footerLogo} />
            <Image source={require("./images/app-store.png")} style={styles.footerLogo} />
          </View>
          <Image source={require("./images/logo-white.png")} style={styles.footerLogo} />
          <Text style={styles.footerText}>Our Purpose Is To Sustainably Make The Pleasure and Benefits of Sports Accessible to the Many</Text>
          <Text style={styles.copyright}>Copyright 2020 - Nard Epico</Text>
        </View>
      </ScrollView>
    </View>
  );
}
