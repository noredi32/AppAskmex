import React, { useState } from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { MapForm } from "../MapForm";
import { styles } from "./InfoForm.styles";

export function InfoForm(props) {
  const { formik } = props;
  const [showMap, setShowMap] = useState(false);

  const onOpenCloseMap = () => setShowMap((prevState) => !prevState);

  return (
    <>
      <View style={styles.content}>
        <Input
          placeholder="Nombre del consultor"
          onChangeText={(text) => formik.setFieldValue("name", text)}
          errorMessage={formik.errors.name}
        />
          <Input
          placeholder="Título"
          onChangeText={(text) => formik.setFieldValue("titulo", text)}
          errorMessage={formik.errors.titulo}
        />
        <Input
          placeholder="Dirección"
          rightIcon={{
            type: "material-community",
            name: "map-marker-radius",
            color: getColorIconMap(formik),
            onPress: onOpenCloseMap,
          }}
          onChangeText={(text) => formik.setFieldValue("address", text)}
          errorMessage={formik.errors.address}
        />
        <Input
          placeholder="Telefóno"
          onChangeText={(text) => formik.setFieldValue("phone", text)}
          errorMessage={formik.errors.phone}
        />
        <Input
          placeholder="Email"
          onChangeText={(text) => formik.setFieldValue("email", text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Descripción de los servicios del consultor"
          multiline={true}
          inputContainerStyle={styles.textArea}
          onChangeText={(text) => formik.setFieldValue("description", text)}
          errorMessage={formik.errors.description}
        />
         <Input
          placeholder="Sitio web"
          onChangeText={(text) => formik.setFieldValue("web", text)}
          errorMessage={formik.errors.web}
        />
          <Input
          placeholder="C.V"
          onChangeText={(text) => formik.setFieldValue("curri", text)}
          errorMessage={formik.errors.curri}
        />
          <Input
          placeholder="Disponibilidad"
          onChangeText={(text) => formik.setFieldValue("dis", text)}
          errorMessage={formik.errors.dis}
        />
        <Input
          placeholder="Cédula"
          onChangeText={(text) => formik.setFieldValue("cedula", text)}
          errorMessage={formik.errors.cedula}
        />
        <Input
          placeholder="Precio"
          onChangeText={(text) => formik.setFieldValue("precio", text)}
          errorMessage={formik.errors.precio}
        />
      </View>

      <MapForm show={showMap} close={onOpenCloseMap} formik={formik} />
    </>
  );
}

const getColorIconMap = (formik) => {
  if (formik.errors.location) return "#ff0000";

  if (formik.values.location) return "#0078a7";

  return "#c2c2c2";
};
