import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: "https://randomuser.me/api/portraits/women/43.jpg" }} style={styles.profileImage} />
            <TouchableOpacity style={styles.editProfileButton}>
              <Ionicons name="pencil" size={16} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={styles.profileName}>Sarah Johnson</Text>
          <Text style={styles.profileBio}>Wallpaper enthusiast | Designer | Nature lover</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>124</Text>
              <Text style={styles.statLabel}>Downloads</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>45</Text>
              <Text style={styles.statLabel}>Favorites</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Uploads</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Favorites</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.favoritesScroll}>
            {[1, 2, 3, 4].map((item) => (
              <TouchableOpacity key={item} style={styles.favoriteItem}>
                <Image source={{ uri: `https://picsum.photos/300/500?random=${item}` }} style={styles.favoriteImage} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Uploads</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.favoritesScroll}>
            {[5, 6, 7].map((item) => (
              <TouchableOpacity key={item} style={styles.favoriteItem}>
                <Image
                  source={{ uri: `https://picsum.photos/300/500?random=${item + 10}` }}
                  style={styles.favoriteImage}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity style={styles.uploadButton}>
          <Ionicons name="cloud-upload-outline" size={20} color="#fff" style={styles.uploadIcon} />
          <Text style={styles.uploadText}>Upload New Wallpaper</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#6c5ce7",
  },
  editProfileButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#6c5ce7",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
  },
  profileBio: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6c5ce7",
  },
  statLabel: {
    fontSize: 12,
    color: "#666666",
    marginTop: 5,
  },
  statDivider: {
    width: 1,
    height: "100%",
    backgroundColor: "#f0f0f0",
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  seeAllText: {
    fontSize: 14,
    color: "#6c5ce7",
  },
  favoritesScroll: {
    marginLeft: -5,
  },
  favoriteItem: {
    marginHorizontal: 5,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  favoriteImage: {
    width: 120,
    height: 180,
    borderRadius: 15,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6c5ce7",
    marginHorizontal: 20,
    marginVertical: 30,
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  uploadIcon: {
    marginRight: 10,
  },
  uploadText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
})
