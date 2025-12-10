import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";


export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(require("./images/gallery-1.jpg"));
  const [quantity, setQuantity] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const smallImages = [
    require("./images/gallery-1.jpg"),
    require("./images/gallery-2.jpg"),
    require("./images/gallery-3.jpg"),
    require("./images/gallery-4.jpg"),
  ];
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Navbar - always clickable */}
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => router.push("/HomeScreen")}> 
          <Image source={require("./images/logo.png")} style={styles.footerLogo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Image source={require("./images/menu.png")} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={[styles.container, { paddingBottom: 24 }]}>
        <View style={{ padding: 24 }}>
          {/* Product Section - vertical stack for mobile */}
          <Image source={selectedImage} style={[styles.productImg, { marginBottom: 24 }]} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 24 }}>
            <View style={{ flexDirection: "row" }}>
              {smallImages.map((img, index) => (
                <TouchableOpacity
                  key={index}
                  style={{ marginHorizontal: 12 }}
                  onPress={() => setSelectedImage(img)}
                >
                  <Image source={img} style={styles.smallImg} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <Text style={[styles.productTitle, { marginBottom: 12 }]}>Home / T-Shirt</Text>
          <Text style={[styles.h1, { marginBottom: 12 }]}>Red Printed T-Shirt by HRX</Text>
          <Text style={[styles.productPrice, { marginBottom: 24 }]}>₱750.00</Text>
          {/* Size Selector */}

          {/* Quantity Input */}
          <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 24 }}>
            <TouchableOpacity
              style={[styles.btn, { marginHorizontal: 12 }]}
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 18, marginHorizontal: 12 }}>{quantity}</Text>
            <TouchableOpacity
              style={[styles.btn, { marginHorizontal: 12 }]}
              onPress={() => setQuantity(quantity + 1)}
            >
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Add to Cart */}
          <TouchableOpacity style={[styles.btn, { marginBottom: 24 }]} onPress={() => router.push("/CartScreen")}> 
            <Text style={styles.btnText}>Add to Cart</Text>
          </TouchableOpacity>
          <Text style={[styles.h3, { marginBottom: 12 }]}>Product Details</Text>
          <Text style={[styles.p, { marginBottom: 24 }]}>
            Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or denims for an evening out with the guys.
          </Text>

          {/* Related Products - grid layout for mobile */}
          <View style={[styles.smallContainer, { marginBottom: 24 }]}>
            <Text style={[styles.h2, { marginBottom: 12 }]}>Related Products</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginBottom: 24 }}>
              {(() => {
                const products = [
                  { img: require("./images/product-9.jpg"), name: "Roadster Watch", price: "₱750.00" },
                  { img: require("./images/product-10.jpg"), name: "Running Shoes 46", price: "₱2250.00" },
                  { img: require("./images/product-11.jpg"), name: "Running Shoes 1", price: "₱1050.00" },
                  { img: require("./images/product-12.jpg"), name: "NIKE TrackPants", price: "₱750.00" },
                ];
                return products.map((item, index) => (
                  <TouchableOpacity key={index} style={{ width: "48%", marginVertical: 12, backgroundColor: "white", borderRadius: 8, padding: 12, elevation: 2 }} onPress={() => router.push("/ProductDetails")}> 
                    <Image source={item.img} style={[styles.productImg, { marginBottom: 12, borderRadius: 8 }]} />
                    <Text style={[styles.productTitle, { marginBottom: 8 }]}>{item.name}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                  </TouchableOpacity>
                ));
              })()}
            </View>
          </View>

          {/* Footer - vertical stack */}
          <View style={[styles.footer, { marginBottom: 24 }]}>
            <Text style={[styles.h3, { marginBottom: 12 }]}>Download Our App</Text>
            <Text style={{ marginBottom: 12 }}>Download App for Android and iOS</Text>
            <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 24 }}>
              <Image source={require("./images/play-store.png")} style={styles.footerLogo} />
              <Image source={require("./images/app-store.png")} style={styles.footerLogo} />
            </View>
            <Text style={styles.copyright}>Copyright 2020 - Nard Epico</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
