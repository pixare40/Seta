import { View, Text, StyleSheet, Pressable, TextInput, Button } from "react-native"
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { useState } from "react";

const RegistrationScreen = () => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, alignSelf: 'stretch', color: '#7B70F5' }}>Sign up it's free</Text>
            <Text style={{ fontSize: 10, alignSelf: 'stretch', color: '#7B70F5' }}>Enter your credentials to continue</Text>
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
            <View style={styles.textContainer}>
                <TextInput style={styles.textInput} placeholder="Email" />
                <TextInput textContentType="password" style={styles.textInput} placeholder="Password" />
                <TextInput textContentType="password" style={styles.textInput} placeholder='Confirm Password' />
            </View>
            <Pressable style={styles.loginButton}>
                <Button color='white' title="Continue" />
            </Pressable>
            <View style={styles.checkBoxContainer}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                />
                <Text>By continuing you agree to our Terms of service and Privacy Policy</Text>
            </View>
            <Text>Already have an account? Login</Text>
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
    },
    checkBoxContainer: {
        flexDirection: 'row',
        paddingVertical: 20
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
        margin: 5,
        borderColor: '#7B70F5'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    loginButton: {
        height: 50,
        borderRadius: 10,
        backgroundColor: '#7B70F5',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    textInput: {
        height: 50,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    textContainer: {
        alignSelf: 'stretch',
        marginVertical: 20,
    },
    checkbox: {
        margin: 8,
    },
})

export default RegistrationScreen;