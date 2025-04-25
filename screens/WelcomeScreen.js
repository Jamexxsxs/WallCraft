import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, StatusBar, Image, Alert } from "react-native"

export default function WelcomeScreen({ navigation }) {
  const handleGetStarted = () => {
    Alert.alert("Welcome to WallCraft!", "Discover and set stunning wallpapers that reflect your unique style.", [
      {
        text: "Let's Go!",
        onPress: () => {
          navigation.replace("MainApp")
        },
      },
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />

      <View style={styles.header}>
        <Text style={styles.title}>WallCraft</Text>
        <Text style={styles.subtitle}>Beautiful wallpapers for your device</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>
          Welcome to WallCraft, your personal gallery of stunning wallpapers. Customize your device with high-quality
          backgrounds that reflect your style.
        </Text>

        <View style={styles.placeholderContainer}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/05/3a/01/053a015c28c9ff2d2f28c20451da1251.jpg" }}
            style={styles.placeholderImage}
            resizeMode="cover"
          />
          <Text style={styles.placeholderText}>Your perfect wallpaper collection awaits</Text>
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Swipe • Tap • Set • Enjoy</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#6c5ce7",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 40,
    color: "#333333",
  },
  placeholderContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  placeholderImage: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  placeholderText: {
    fontSize: 18,
    color: "#666666",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#6c5ce7",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#999999",
  },
})
