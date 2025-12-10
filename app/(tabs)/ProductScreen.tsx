import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles";

const products = [
  { id: 1, title: "Red Printed T-Shirt", price: "₱750.00", image: require("./images/product-1.jpg"), rating: 4 },
  { id: 2, title: "The Runnie SapaShoes", price: "₱2250.00", image: require("./images/product-2.jpg"), rating: 3.5 },
  { id: 3, title: "Gray TrackPants", price: "₱1050.00", image: require("./images/product-3.jpg"), rating: 4 },
  { id: 4, title: "The POLO", price: "₱750.00", image: require("./images/product-4.jpg"), rating: 2.5 },
  { id: 5, title: "AirWalk Heavens HIGHCUT", price: "₱2250.00", image: require("./images/product-5.jpg"), rating: 4 },
  { id: 6, title: "The LionJump T-Shirt", price: "₱750.00", image: require("./images/product-6.jpg"), rating: 3.5 },
  { id: 7, title: "Cogon Rated Socks", price: "₱499.00", image: require("./images/product-7.jpg"), rating: 4 },
  { id: 8, title: "Fossil BangBang Watch", price: "₱699.00", image: require("./images/product-8.jpg"), rating: 2.5 },
  { id: 9, title: "Roadster Watch", price: "₱750.00", image: require("./images/product-9.jpg"), rating: 4 },
  { id: 10, title: "Running Shoes 46", price: "₱2250.00", image: require("./images/product-10.jpg"), rating: 3.5 },
  { id: 11, title: "Running Shoes 1", price: "₱1050.00", image: require("./images/product-11.jpg"), rating: 4 },
  { id: 12, title: "NIKE TrackPants", price: "₱750.00", image: require("./images/product-12.jpg"), rating: 2.5 },
];

type ProductCardProps = {
  image: any;
  title: string;
  price: string;
  rating: number;
};
const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, rating }) => (
  <View style={styles.col4}>
    <Image source={image} style={styles.productImg} />
    <Text style={styles.productTitle}>{title}</Text>
    <View style={styles.rating}>
      {[1,2,3,4,5].map((star) => (
        <Icon
          key={star}
          name={star <= Math.floor(rating) ? "star" : (star - rating === 0.5 ? "star-half-o" : "star-o")}
          size={16}
          color="#ff523b"
          style={{ marginRight: 2 }}
        />
      ))}
    </View>
    <Text style={styles.productPrice}>{price}</Text>
  </View>
);


export default function ProductScreen() {
  const [sort, setSort] = useState("default");
  const router = require('expo-router').useRouter();
  return (
    <View style={{ flex: 1 }}>
      {/* Navbar - always clickable */}
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => router.push("/HomeScreen")}> 
          <Image source={require("./images/logo.png")} style={styles.footerLogo} />
        </TouchableOpacity>
        
      </View>
      <ScrollView style={styles.container}>
        <View style={{ padding: 16 }}>
          {/* Header Row - vertical for mobile */}
          <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 8 }}>All Products</Text>
          

          {/* Products Grid - 2 columns for mobile */}
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
            {products.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={{
                  width: "48%",
                  marginBottom: 20,
                  backgroundColor: "#fff",
                  borderRadius: 16,
                  padding: 12,
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOpacity: 0.08,
                  shadowRadius: 8,
                  elevation: 2,
                }}
                onPress={() => router.push("/ProductDetails")}
              >
                <Image source={item.image} style={[styles.productImg, { borderRadius: 12, marginBottom: 8 }]} />
                <Text style={{ fontWeight: "bold", fontSize: 16, textAlign: "center", marginBottom: 4 }} numberOfLines={2}>
                  {item.title}
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 4 }}>
                  {[1,2,3,4,5].map((star) => (
                    <Icon
                      key={star}
                      name={star <= Math.floor(item.rating) ? "star" : (star - item.rating === 0.5 ? "star-half-o" : "star-o")}
                      size={16}
                      color="#ff523b"
                      style={{ marginRight: 2 }}
                    />
                  ))}
                </View>
                <Text style={{ color: "#ff523b", fontWeight: "bold", fontSize: 16, marginBottom: 2 }}>
                  {item.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Pagination - horizontal row */}
          <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 20 }}>
            {[1,2,3,4].map((num) => (
              <TouchableOpacity
                key={num}
                style={styles.paginationButton}
                onPress={() => {/* handle pagination */}}
              >
                <Text style={styles.paginationText}>{num}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={() => {/* handle next page */}}
            >
              <Text style={styles.paginationText}>Next</Text>
            </TouchableOpacity>
          </View>

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
        </View>
      </ScrollView>
    </View>
  );
}
