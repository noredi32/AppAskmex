import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ConsultantsScreen } from "../screens/Consultants/ConsultantsScreen";
import { AddConsultantScreen } from "../screens/Consultants/AddConsultantScreen";
import { ConsultantScreen } from "../screens/Consultants/ConsultantScreen";
import { AddReviewConsultantScreen } from "../screens/Consultants/AddReviewConsultantScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function ConsultantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.consultant.consultants}
        component={ConsultantsScreen}
        options={{ title: "Consultores" }}
      />
      <Stack.Screen
        name={screen.consultant.addConsultant}
        component={AddConsultantScreen}
        options={{ title: "Nuevo consultor" }}
      />
      <Stack.Screen
        name={screen.consultant.consultant}
        component={ConsultantScreen}
        options={{ title: "Consultor" }}
      />
      <Stack.Screen
        name={screen.consultant.addReviewConsultant}
        component={AddReviewConsultantScreen}
        options={{ title: "Nueva opinión" }}
      />
    </Stack.Navigator>
  );
}
