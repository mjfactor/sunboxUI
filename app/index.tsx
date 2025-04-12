import { View, Text, StyleSheet } from 'react-native';
import LoginForm from "@/components/LoginForm";

export default function IndexPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to SunboxUI</Text>
            <LoginForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    }
});
