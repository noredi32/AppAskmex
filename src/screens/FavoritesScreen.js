import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { size, map } from "lodash";
import {
  UserNotLogged,
  NotFoundConsultants,
  ConsultantFavorite,
} from "../components/Favorites";
import { Loading } from "../components/Shared";
import { db } from "../utils";

export function FavoritesScreen() {
  const [hasLogged, setHasLogged] = useState(null);
  const [consultants, setConsultants] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, "favorites"),
      where("idUser", "==", auth.currentUser.uid)
    );

    onSnapshot(q, async (snapshot) => {
      let consultantArray = [];
      for await (const item of snapshot.docs) {
        const data = item.data();
        const docRef = doc(db, "consultants", data.idConsultant);
        const docSnap = await getDoc(docRef);
        const newData = docSnap.data();
        newData.idFavorite = data.id;

        consultantArray.push(newData);
      }
      setConsultants(consultantArray);
    });
  }, []);

  if (!hasLogged) return <UserNotLogged />;

  if (!consultants) return <Loading show text="Cargando" />;

  if (size(consultants) === 0) return <NotFoundConsultants />;

  return (
    <ScrollView>
      {map(consultants, (consultant) => (
        <ConsultantFavorite key={consultant.id} consultant={consultant} />
      ))}
    </ScrollView>
  );
}
