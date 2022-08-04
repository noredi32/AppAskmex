import * as Yup from "yup";

export function initialVales() {
  return {
    name: "",
    address: "",
    phone: "",
    email: "",
    description: "",
    web: "",
    phone: "",
    dis: "",
    cedula: "",
    precio: "",
    location: null,
    images: [],
  };
}

export function validationSchema() {
  return Yup.object({
    name: Yup.string().required("Campo obligatorio"),
    titulo: Yup.string().required("Campo obligatorio"),
    address: Yup.string().required("Campo obligatorio"),
    phone: Yup.string().required("Campo obligatorio"),
    email: Yup.string()
      .email("No es un email valido")
      .required("Campo obligatorio"),
    description: Yup.string().required("Campo obligatorio"),
    web: Yup.string().required("Campo obligatorio"),
    phone: Yup.string().required("Campo obligatorio"),
    dis: Yup.string().required("Campo obligatorio"),
    cedula: Yup.string().required("Campo obligatorio"),
    precio: Yup.string().required("Campo obligatorio"),
    location: Yup.object().required("La localizacion es requerida"),
    images: Yup.array()
      .min(1, "Se requiere una imagen como mínimo")
      .required("La imagen es requerida"),
  });
}
