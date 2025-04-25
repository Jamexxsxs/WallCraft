"use client"

import { useState } from "react"
import { StyleSheet, View, Text, Switch, TouchableOpacity, ScrollView, SafeAreaView } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [downloadOnWifi, setDownloadOnWifi] = useState(true)
  const [autoApply, setAutoApply] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Preferences</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons name="notifications-outline" size={22} color="#6c5ce7" style={styles.settingIcon} />
              <Text style={styles.settingText}>Notifications</Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: "#e0e0e0", true: "#d1cff5" }}
              thumbColor={notifications ? "#6c5ce7" : "#f4f3f4"}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons name="moon-outline" size={22} color="#6c5ce7" style={styles.settingIcon} />
              <Text style={styles.settingText}>Dark Mode</Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: "#e0e0e0", true: "#d1cff5" }}
              thumbColor={darkMode ? "#6c5ce7" : "#f4f3f4"}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons name="wifi-outline" size={22} color="#6c5ce7" style={styles.settingIcon} />
              <Text style={styles.settingText}>Download on Wi-Fi only</Text>
            </View>
            <Switch
              value={downloadOnWifi}
              onValueChange={setDownloadOnWifi}
              trackColor={{ false: "#e0e0e0", true: "#d1cff5" }}
              thumbColor={downloadOnWifi ? "#6c5ce7" : "#f4f3f4"}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons name="refresh-outline" size={22} color="#6c5ce7" style={styles.settingIcon} />
              <Text style={styles.settingText}>Auto-apply wallpapers</Text>
            </View>
            <Switch
              value={autoApply}
              onValueChange={setAutoApply}
              trackColor={{ false: "#e0e0e0", true: "#d1cff5" }}
              thumbColor={autoApply ? "#6c5ce7" : "#f4f3f4"}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Storage</Text>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons name="save-outline" size={22} color="#6c5ce7" style={styles.settingIcon} />
              <View>
                <Text style={styles.settingText}>Manage Storage</Text>
                <Text style={styles.settingDescription}>125 MB used</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons name="trash-outline" size={22} color="#6c5ce7" style={styles.settingIcon} />
              <Text style={styles.settingText}>Clear Cache</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons name="person-outline" size={22} color="#6c5ce7" style={styles.settingIcon} />
              <Text style={styles.settingText}>Edit Profile</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons name="lock-closed-outline" size={22} color="#6c5ce7" style={styles.settingIcon} />
              <Text style={styles.settingText}>Change Password</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons name="information-circle-outline" size={22} color="#6c5ce7" style={styles.settingIcon} />
              <Text style={styles.settingText}>About WallCraft</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons name="star-outline" size={22} color="#6c5ce7" style={styles.settingIcon} />
              <Text style={styles.settingText}>Rate the App</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons name="help-circle-outline" size={22} color="#6c5ce7" style={styles.settingIcon} />
              <Text style={styles.settingText}>Help & Support</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={20} color="#ff3b30" style={styles.logoutIcon} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },

  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  settingInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingIcon: {
    marginRight: 15,
  },
  settingText: {
    fontSize: 16,
    color: "#333333",
  },
  settingDescription: {
    fontSize: 12,
    color: "#999999",
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    marginVertical: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  logoutIcon: {
    marginRight: 10,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ff3b30",
  },
  versionText: {
    textAlign: "center",
    fontSize: 12,
    color: "#999999",
    marginBottom: 30,
  },
})
