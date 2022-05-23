import { View, Text, StyleSheet, Image, Button, TextInput, Pressable } from "react-native";
import logo from '../assets/logo.png';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={logo} />
            <Text style={{ fontSize: 20 }}>Login</Text>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.socialIcons}>
                    <Fontisto style={{ alignSelf: "center" }} name="google-plus" size={24} color="black" />
                </Pressable>
                <Pressable style={styles.socialIcons}>
                    <MaterialIcons style={{ alignSelf: "center" }} name="facebook" size={24} color="black" />
                </Pressable>
                <Pressable style={styles.socialIcons}>
                    <Fontisto style={{ alignSelf: "center" }} name="apple" size={24} color="black" />
                </Pressable>
            </View>
            <Text>or Login with Email</Text>
            <View style={styles.textContainer}>
                <TextInput style={styles.textInput} placeholder="Email" />
                <TextInput textContentType="password" style={styles.textInput} placeholder="Password" />
            </View>
            <Pressable style={styles.loginButton}>
                <Button color='white' title="Login" />
            </Pressable>
            <Text>Don't have an account? Register</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingBottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    textInput: {
        height: 50,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    textContainer: {
        alignSelf: 'stretch',
        marginTop: 20,
        marginBottom: 20
    },
    loginButton: {
        height: 50,
        borderRadius: 10,
        backgroundColor: '#7B70F5',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    socialIcons: {
        borderStyle: 'solid',
        borderWidth: 1,
        width: 60,
        height: 40,
        backgroundColor: '#F6F6FB',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 5
    }
})


export default LoginScreen;