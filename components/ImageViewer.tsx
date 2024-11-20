import { Image, type ImageSource } from "expo-image";
import { StyleSheet } from "react-native";

type Props={
    imgSource: ImageSource,
    selectedImage?: string
}

export default function ImageViewer({imgSource, selectedImage}:Props) {
    const ImageSource= selectedImage? {uri:selectedImage}: imgSource;
    
    return(
        <Image source={ImageSource} style={styles.image}/>
    )
}

const styles= StyleSheet.create({
    image:{
        width:320,
        height:440,
        borderRadius:18,
    }
})