import React from "react";
import { Doctors } from "../components/Doctors";
import DrModal from "../components/DrModal";
import { AppointmentList } from "../components/AppointmentList";

export const Home = () => {
  return (
    <main className="text-center mt-2">
      <h1 className="text-danger display-5">CLARUS HOSPITAL</h1>
      <Doctors />
      <AppointmentList />
    </main>
  );
};
