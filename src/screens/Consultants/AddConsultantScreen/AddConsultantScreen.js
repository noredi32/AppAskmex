import React from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import {
  InfoForm,
  UploadImagesForm,
  ImageConsultant,
} from "../../../components/Consultants/AddConsultant";
import { db } from "../../../utils";
import { initialVales, validationSchema } from "./AddConsultantScreen.data";
import { styles } from "./AddConsultantScreen.styles";

export function AddConsultantScreen() {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialVales(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue;
        newData.id = uuid();
        newData.createdAt = new Date();

        await setDoc(doc(db, "consultants", newData.id), newData);

        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageConsultant formik={formik} />

      <InfoForm formik={formik} />

      <UploadImagesForm formik={formik} />

      <Button
        title="Agregar consultor"
        buttonStyle={styles.addConsultant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  );
}
