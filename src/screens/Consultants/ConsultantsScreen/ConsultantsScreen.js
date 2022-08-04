import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { LoadingModal } from "../../../components/Shared";
import { ListConsultants } from "../../../components/Consultants";
import { screen, db } from "../../../utils";
import { styles } from "./ConsultantsScreen.styles";

export function ConsultantsScreen(props) {
  const { navigation } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const [consultants, setConsultants] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, "consultants"),
      orderBy("createdAt", "desc")
    );

    onSnapshot(q, (snapshot) => {
      setConsultants(snapshot.docs);
    });
  }, []);

  const goToAddConsultant = () => {
    navigation.navigate(screen.consultant.addConsultant);
  };

  return (
    <View style={styles.content}>
      {!consultants ? (
        <LoadingModal show text="Cargando" />
      ) : (
        <ListConsultants consultants={consultants} />
      )}

      {currentUser && (
        <Icon
          reverse
          type="material-community"
          name="plus"
          color="#068C80"
          containerStyle={styles.btnContainer}
          onPress={goToAddConsultant}
        />
      )}
    </View>
  );
}
