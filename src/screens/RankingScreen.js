import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { map } from "lodash";
import { ConsultantRanking } from "../components/Consultants";
import { db } from "../utils";

export function RankingScreen() {
  const [consultants, setConsultants] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, "consultants"),
      orderBy("ratingMedia", "desc"),
      limit(10)
    );

    onSnapshot(q, (snapshot) => {
      setConsultants(snapshot.docs);
    });
  }, []);

  return (
    <ScrollView>
      {map(consultants, (consultant, index) => (
        <ConsultantRanking
          key={index}
          index={index}
          consultant={consultant.data()}
        />
      ))}
    </ScrollView>
  );
}
