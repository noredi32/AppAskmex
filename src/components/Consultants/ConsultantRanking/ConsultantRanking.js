import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Text, Rating, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./ConsultantRanking.styles";

export function ConsultantRanking(props) {
  const { consultant, index } = props;
  const navigation = useNavigation();

  const goToConsultant = () => {
    navigation.navigate(screen.consultant.tab, {
      screen: screen.consultant.consultant,
      params: {
        id: consultant.id,
      },
    });
  };

  const renderMedal = () => {
    if (index > 2) return null;

    let color = "";
    if (index === 0) color = "#FFD700";
    if (index === 1) color = "#BEBEBE";
    if (index === 2) color = "#CD7F32";

    return (
      <Icon
        type="material-community"
        name="medal-outline"
        color={color}
        containerStyle={styles.medal}
      />
    );
  };

  return (
    <TouchableOpacity onPress={goToConsultant}>
      <View style={styles.content}>
        <Image source={{ uri: consultant.images[0] }} style={styles.image} />
        <View style={styles.infoContent}>
          <View style={styles.nameContent}>
            {renderMedal()}
            <Text style={styles.name}>{consultant.name}</Text>
          </View>
          <Rating
            imageSize={15}
            readonly
            startingValue={consultant.ratingMedia}
          />
        </View>
        <Text style={styles.description}>{consultant.description}</Text>
      </View>
    </TouchableOpacity>
  );
}
