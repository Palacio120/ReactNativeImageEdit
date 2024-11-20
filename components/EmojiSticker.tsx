import { type ImageSource } from "expo-image";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubletap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
    });

  const imageSpring = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const drag = Gesture.Pan().onChange(event=> {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  const imageDrag = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value, },
        { translateY: translateY.value, },
      ],
    };
  });

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[imageDrag, { top: -350 }]}>
        <GestureDetector gesture={doubletap}>
          <Animated.Image
            source={stickerSource}
            style={[imageSpring, { width: imageSize, height: imageSize }]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
