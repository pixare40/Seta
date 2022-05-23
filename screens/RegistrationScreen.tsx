import { View, Text, StyleSheet } from "react-native"

const RegistrationScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Sign up it's free</Text>
            <Text>Enter your credentials to continue</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingBottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default RegistrationScreen;