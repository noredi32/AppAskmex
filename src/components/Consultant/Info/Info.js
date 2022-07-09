import React from "react";
import { View } from "react-native";
import { Text, ListItem, Icon } from "react-native-elements";
import { map } from "lodash";
import { Map } from "../../Shared";
import { styles } from "./Info.styles";

export function Info(props) {
  const { consultant } = props;

  const listInfo = [
    {
      text: consultant.address,
      iconType: "material-community",
      iconName: "map-marker",
    },
    {
      text: consultant.phone,
      iconType: "material-community",
      iconName: "phone",
    },
    {
      text: consultant.email,
      iconType: "material-community",
      iconName: "at",
    },
    {
      text: consultant.cedula,
      iconType: "material-community",
      iconName: "at",
    },
  ];

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Información sobre el consultor</Text>
      <Map location={consultant.location} name={consultant.name} cedula={consultant.cedula}/>
      {map(listInfo, (item, index) => (
        <ListItem key={index} bottomDivider>
          <Icon type={item.iconType} name={item.iconName} color="#00a680" />
          <ListItem.Content>
            <ListItem.Title>{item.text}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}
