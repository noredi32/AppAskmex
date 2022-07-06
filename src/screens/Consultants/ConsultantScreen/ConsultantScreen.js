import React, { useState, useEffect } from "react";
import { ScrollView, Dimensions } from "react-native";
import { doc, onSnapshot } from "firebase/firestore";
import { Carousel, Loading } from "../../../components/Shared";
import {
  Header,
  Info,
  BtnReviewForm,
  Reviews,
  BtnFavorite,
} from "../../../components/Consultant";
import { db } from "../../../utils";
import { styles } from "./ConsultantScreen.styles";

const { width } = Dimensions.get("window");

export function ConsultantScreen(props) {
  const { route } = props;
  const [consultant, setConsultant] = useState(null);

  useEffect(() => {
    setConsultant(null);
    onSnapshot(doc(db, "consultants", route.params.id), (doc) => {
      setConsultant(doc.data());
    });
  }, [route.params.id]);

  if (!consultant) return <Loading show text="Cargando consultores" />;

  return (
    <ScrollView style={styles.content}>
      <Carousel arrayImages={consultant.images} height={250} width={width} />
      <Header consultant={consultant} />
      <Info consultant={consultant} />
      <BtnReviewForm idConsultant={route.params.id} />
      <Reviews idConsultant={route.params.id} />
      <BtnFavorite idConsultant={route.params.id} />
    </ScrollView>
  );
}
