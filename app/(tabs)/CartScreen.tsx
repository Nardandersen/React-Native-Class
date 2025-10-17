import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles";


export default function CartScreen() {
  const router = useRouter();
  // Reference product from cart.html
  const product = {
    name: "Red Printed T-Shirt",
    price: 750.00,
  image: require("../images/buy-1.jpg"),
    quantity: 1,
    subtotal: 788.10,
    currency: "₱"
  };
  return (
    <View style={{ flex: 1 }}>
      {/* Navbar - always clickable */}
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => router.push("/HomeScreen")}> 
          <Image source={require("./images/logo.png")} style={styles.footerLogo} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
        {/* Cart Title */}
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 24, color: '#222', textAlign: 'center', letterSpacing: 1 }}>Your Cart</Text>
        {/* Product Card - decluttered, vertical stack on mobile */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 20, marginBottom: 24, shadowColor: '#000', shadowOpacity: 0.07, shadowRadius: 6, elevation: 2 }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={product.image} style={{ width: 100, height: 100, borderRadius: 12, marginBottom: 12 }} />
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 4, textAlign: 'center' }}>{product.name}</Text>
            <Text style={{ fontSize: 15, color: '#888', marginBottom: 4, textAlign: 'center' }}>Price: {product.currency}{product.price.toFixed(2)}</Text>
            <TouchableOpacity>
              <Text style={{ color: '#ff523b', fontSize: 15, marginBottom: 8, textAlign: 'center' }}>Remove</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 4 }}>
              <TextInput
                style={{ borderWidth: 1, borderColor: '#eee', borderRadius: 8, width: 48, height: 36, textAlign: 'center', fontSize: 16, marginRight: 8 }}
                value={String(product.quantity)}
                keyboardType="numeric"
                editable={false}
              />
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#222', marginRight: 4 }}>Subtotal:</Text>
              <Text style={{ fontSize: 16, color: '#ff523b', fontWeight: 'bold' }}>{product.currency}{product.subtotal.toFixed(2)}</Text>
            </View>
          </View>
        </View>
        {/* Divider */}
        <View style={{ height: 1, backgroundColor: '#eee', marginBottom: 32 }} />
        {/* Total Section - decluttered */}
        <View style={{ backgroundColor: '#f9f9f9', borderRadius: 12, padding: 20, marginBottom: 32, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 4, elevation: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 10 }}>
            <Text style={{ fontSize: 17, color: '#222' }}>Subtotal</Text>
            <Text style={{ fontSize: 17, color: '#222' }}>{product.currency}788.10</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 10 }}>
            <Text style={{ fontSize: 17, color: '#222' }}>Tax</Text>
            <Text style={{ fontSize: 17, color: '#222' }}>{product.currency}35.00</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#222' }}>Total</Text>
            <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#ff523b' }}>{product.currency}823.10</Text>
          </View>
        </View>
        <TouchableOpacity style={[styles.btn, { height: 48, borderRadius: 8, marginBottom: 40, backgroundColor: '#ff523b' }]} onPress={() => {/* handle checkout */}}>
          <Text style={[styles.btnText, { fontSize: 20, color: '#fff' }]}>Proceed To Checkout</Text>
        </TouchableOpacity>
        {/* Footer - decluttered, spaced */}
        <View style={[styles.footer, { marginTop: 40, paddingVertical: 24, paddingHorizontal: 8, backgroundColor: '#111', borderRadius: 16 }]}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", textAlign: "center", marginBottom: 8 }}>Download Our App</Text>
          <Text style={{ color: "#bbb", marginBottom: 8, textAlign: "center" }}>Download App for Android and IOS mobile phone</Text>
          <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 12 }}>
            <Image source={require('../images/play-store.png')} style={{ width: 32, height: 32, marginRight: 8 }} />
            <Image source={require('../images/app-store.png')} style={{ width: 32, height: 32 }} />
          </View>
          <Text style={[styles.footerText, { color: '#fff', textAlign: 'center', marginBottom: 8 }]}>Our Purpose Is To Sustainably Make The Pleasure and Benefits of Sports Accessible to the Many</Text>
          <Text style={[styles.copyright, { color: '#bbb', textAlign: 'center' }]}>Copyright 2020 - Nard Epico</Text>
        </View>
      </ScrollView>
    </View>
  );
}
