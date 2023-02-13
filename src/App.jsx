import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderLayout from "./components/Layouts/headerLayout";
import {
  Login,
  SignUp,
  ForgetPassword,
  ResetPassword,
  Dashborad,
  Friends,
  Transitions,
  Debts,
  Memebers,
  Permissions,
  RecentActivity,
  Activities,
  General,
  ResetPass,
  Group,
} from "./pages/index";

const App = () => {
  return (
    <div classNameName="bg_color full_height">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route
          path="/ForgetPassword/ConfirmEmail"
          element={<ForgetPassword />}
        />
        <Route
          path="/ForgetPassword/ResetPassword"
          element={<ResetPassword />}
        />
        <Route element={<HeaderLayout />}>
          <Route path="/Dashboard" element={<Dashborad />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Group" element={<Group />} />
          <Route path="/Group/Transactions" element={<Transitions />} />
          <Route path="/Group/Debts" element={<Debts />} />
          <Route path="/Group/Members" element={<Memebers />} />
          <Route path="/Group/Permissions" element={<Permissions />} />
          <Route path="/Group/RecentActivity" element={<RecentActivity />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Setting/General" element={<General />} />
          <Route path="/Setting/ResetPassword" element={<ResetPass />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
