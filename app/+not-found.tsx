import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
    return(
        <>
            <Stack.Screen options={{title:"Opps! Not Found"}}/>
            <View style={styles.container}>
                <Link href="./" style={styles.button}>Go Back to Home Screen!</Link>
            </View>
        </>
    )}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#25293e"
    },
    button:{
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
})