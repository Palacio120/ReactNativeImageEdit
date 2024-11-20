import { useState } from "react";
import { FlatList, Platform, Pressable, StyleSheet } from "react-native"
import {Image, type ImageSource } from "expo-image";

type Props={
    onSelect:(image: ImageSource)=>void;
    onCloseModal:()=>void;

}

export default function EmojiList({onSelect, onCloseModal}:Props) {

    const [emoji] = useState<ImageSource[]>([
        require("../assets/images/images/emoji1.png"),
        require("../assets/images/images/emoji2.png"),
        require("../assets/images/images/emoji3.png"),
        require("../assets/images/images/emoji4.png"),
        require("../assets/images/images/emoji5.png"),
        require("../assets/images/images/emoji6.png"),
    ]);
    
    return(
    <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={Platform.OS === 'web'} 
        data={emoji} 
        contentContainerStyle={styles.ListContainer} 
        renderItem={({item,index})=>(
            <Pressable onPress={()=>{
                onSelect(item);
                onCloseModal();
            }}>
                <Image source={item} key={index} style={styles.imgage}/>
            </Pressable>
    )}>
    </FlatList>)
}

const styles=StyleSheet.create({
    ListContainer:{
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imgage:{
        width: 100,
        height: 100,
        marginRight: 20,
    }
})