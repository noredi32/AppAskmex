import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./ListConsultants.styles";

export function ListConsultants(props) {
  const { consultants } = props;
  const navigation = useNavigation();

  const goToConsultant = (consultant) => {
    navigation.navigate(screen.consultant.consultant, { id: consultant.id });
  };

  return (
    <FlatList
      data={consultants}
      renderItem={(doc) => {
        const consultant = doc.item.data();

        return (
          <TouchableOpacity onPress={() => goToConsultant(consultant)}>
            <View style={styles.consultant}>
              <Image
                source={{ uri: consultant.images[0] }}
                style={styles.image}
              />

              <View>
                <Text style={styles.name}>{consultant.name}</Text>
                <Text style={styles.info}>{consultant.address}</Text>
                <Text style={styles.info}>{consultant.description}</Text>
                <Text style={styles.info}>{consultant.cedula}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
