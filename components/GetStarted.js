
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function GetStarted() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.sloganWrapper}>
        <Text style={styles.slogan}>
          A premium online store for sport enthusiasts and their stylish bikes
        </Text>
      </View>
      <View style={styles.wrapperImage}>
        <Image source={require("../assets/bione-removebg-preview.png")} />
      </View>
      <View style={styles.shopNameWrapper}>
        <Text style={styles.shopName}>Power Bike Shop</Text>
      </View>
      <View style={styles.buttonGetStartedWrapper}>
        <TouchableOpacity
          style={styles.buttonGetStarted}
          onPress={() => navigation.navigate("ListBikes")}
        >
          <Text style={styles.labelButton}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 15 },
  sloganWrapper: { flex: 1, justifyContent: "center", alignItems: "center" },
  slogan: { fontSize: 26, fontWeight: "500", textAlign: "center" },
  wrapperImage: {
    flex: 3,
    backgroundColor: "#E941411A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  shopNameWrapper: { flex: 1, justifyContent: "center", alignItems: "center" },
  shopName: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  buttonGetStartedWrapper: { flex: 1, justifyContent: "center", alignItems: "center" },
  buttonGetStarted: {
    height: 61,
    width: "100%",
    backgroundColor: "#E94141",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  labelButton: { textAlign: "center", fontSize: 26, fontWeight: "700", color: "#fff" },
});
