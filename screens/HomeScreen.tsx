import { View, Text, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
    return (
        <WebView source={{ uri: 'https://seta.live/' }} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
