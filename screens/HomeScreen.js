import { useState } from "react"
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const wallpapers = [
  {
    id: "1",
    image: "https://i.pinimg.com/736x/05/3a/01/053a015c28c9ff2d2f28c20451da1251.jpg",
    title: "Abstract Purple",
  },
  { id: "2", image: "https://i.pinimg.com/736x/65/d6/b6/65d6b6447e454e4d6a45a4e056d5cb6e.jpg", title: "Mountain View" },
  { id: "3", image: "https://i.pinimg.com/736x/32/c1/93/32c193a943682110003a05d790bf8b6f.jpg", title: "Ocean Waves" },
  { id: "4", image: "https://i.pinimg.com/736x/d7/e7/98/d7e7989204e40e1afd81db2e6f764e38.jpg", title: "Sunset Beach" },
  { id: "5", image: "https://i.pinimg.com/736x/b1/fe/3a/b1fe3a4908da6f9f060a6bd64fff0758.jpg", title: "City Lights" },
  { id: "6", image: "https://i.pinimg.com/736x/a3/f2/9c/a3f29c293398b6491888f38b1d7f4f7f.jpg", title: "Forest Path" },
]

// Categories
const categories = [
  { id: "1", name: "Nature" },
  { id: "2", name: "Abstract" },
  { id: "3", name: "Minimal" },
  { id: "4", name: "Dark" },
  { id: "5", name: "Colorful" },
]

export default function HomeScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState("1")

  const renderWallpaperItem = ({ item }) => (
    <TouchableOpacity style={styles.wallpaperItem}>
      <Image source={{ uri: item.image }} style={styles.wallpaperImage} />
      <View style={styles.wallpaperInfo}>
        <Text style={styles.wallpaperTitle}>{item.title}</Text>
        <TouchableOpacity style={styles.downloadButton}>
          <Ionicons name="download-outline" size={20} color="#6c5ce7" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryItem, activeCategory === item.id && styles.activeCategoryItem]}
      onPress={() => setActiveCategory(item.id)}
    >
      <Text style={[styles.categoryText, activeCategory === item.id && styles.activeCategoryText]}>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <Text style={styles.searchPlaceholder}>Search wallpapers...</Text>
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      <FlatList
        data={wallpapers}
        renderItem={renderWallpaperItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.wallpapersList}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  searchContainer: {
    padding: 15,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchPlaceholder: {
    color: "#999",
    fontSize: 16,
  },
  categoriesContainer: {
    marginBottom: 10,
  },
  categoriesList: {
    paddingHorizontal: 15,
  },
  categoryItem: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  activeCategoryItem: {
    backgroundColor: "#6c5ce7",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
  activeCategoryText: {
    color: "#ffffff",
  },
  wallpapersList: {
    padding: 10,
  },
  wallpaperItem: {
    flex: 1,
    margin: 5,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  wallpaperImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  wallpaperInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  wallpaperTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  downloadButton: {
    padding: 5,
  },
})
