import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footer: {
    marginTop: 40,
    paddingVertical: 20,
    backgroundColor: "#000",
    alignItems: "center",
  },
  footerLogo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
    marginBottom: 10,
    alignSelf: "center",
  },
  footerText: {
    color: "#bbb",
    fontSize: 14,
    marginVertical: 5,
  },
  smallContainer: {
    width: "100%",
    alignSelf: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  // ProductDetails specific
  menuIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
    marginLeft: 10,
  },
  smallImgRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },
  smallImgCol: {
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  smallImg: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 0,
  },
  productImg: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  h3: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 6,
  },
  h4: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    marginBottom: 4,
  },
  p: {
    fontSize: 15,
    color: "#666",
    marginBottom: 8,
    lineHeight: 22,
  },
  select: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    marginVertical: 10,
    padding: 8,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  // Global
  body: {
    fontFamily: "sans-serif",
    backgroundColor: "#fff",
  },
  container: {
    width: "100%",
    alignSelf: "center",
    paddingLeft: 20,
    paddingRight: 20,
    maxWidth: 1200,
  },

  // Navbar
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  navLogo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  navTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  navLinks: {
    flexDirection: "row",
  },
  navLink: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#555",
  },

  // Buttons
  btn: {
    backgroundColor: "#ff523b",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  // Footer
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 16,
    width: "100%",
  },
  col4: {
    width: "45%",
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
    marginBottom: 4,
    width: "100%",
    flexShrink: 1,
    textAlign: "left",
  },
  footerHr: {
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    marginVertical: 10,
    width: "90%",
  },
  copyright: {
    color: "#888",
    fontSize: 12,
  },

  // Home
  header: {
    marginTop: 20,
    alignItems: "center",
    padding: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  col2: {
    flex: 1,
    margin: 10,
  },
  // Use only the correct col3 and col4 definitions below
  col3: {
    width: "30%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  col4: {
    width: "45%",
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  headerImg: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  catImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "cover",
  },

  // Products
  productImg: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 5,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ff523b",
  },
  rating: {
    flexDirection: "row",
    marginVertical: 5,
  },

  // Cart
  cartPage: {
    padding: 20,
  },
  cartText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cartSmall: {
    fontSize: 14,
    color: "#666",
  },
  cartImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cartImageContainer: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  removeLink: {
    color: "#ff523b",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 50,
    textAlign: "center",
    padding: 5,
    fontSize: 16,
  },
  subtotal: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  totalRowBold: {
    fontSize: 18,
    fontWeight: "bold",
  },

  // Forms (login/register)
  formContainer: {
    marginTop: 40,
    padding: 20,
  },
  formInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  formBtnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  formTab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  formTabActive: {
    borderBottomColor: "#ff523b",
  },
  formLink: {
    color: "#ff523b",
    textDecorationLine: "underline",
    fontSize: 14,
    marginTop: 10,
  },





  accountPage: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingVertical: 40,
  backgroundColor: "#fff",
  },


  cartInfo: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
    fontSize: 16,
    marginBottom: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cartTotalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 8,
    textAlign: "right",
  },
  cartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },

    /* ---------------- HomeScreen Specific ---------------- */
  banner: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    borderRadius: 10,
    overflow: "hidden",
  },
  bannerImg: {
    width: "100%",
    height: "100%",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  col2: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  col3: {
    width: "30%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  categoryImg: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  productImg: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
    marginBottom: 4,
  },
  rating: {
    flexDirection: "row",
    marginBottom: 6,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff523b",
  },


});

export default styles;
