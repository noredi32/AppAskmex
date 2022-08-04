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
      text: consultant.titulo,
      iconType: "material-community",
      iconName: "alert-circle",
    },
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
      text: consultant.web,
      iconType: "material-community",
      iconName: "web",
    },
    {
      text: consultant.curri,
      iconType: "material-community",
      iconName: "book",
    },
    {
      text: consultant.dis,
      iconType: "material-community",
      iconName: "clock",
    },
    {
      text: consultant.cedula,
      iconType: "material-community",
      iconName: "card-account-details",
    },
    {
      text: consultant.precio,
      iconType: "material-community",
      iconName: "currency-usd",
    },
  ];

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Información sobre el consultor</Text>
      <Map location={consultant.location} name={consultant.name} cedula={consultant.cedula}/>
      {map(listInfo, (item, index) => (
        <ListItem key={index} bottomDivider>
          <Icon type={item.iconType} name={item.iconName} color="#0078a7" />
          <ListItem.Content>
            <ListItem.Title>{item.text}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}
