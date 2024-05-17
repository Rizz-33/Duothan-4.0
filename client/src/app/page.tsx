"use client";

import SignInPage from "@/app/(pages)/(auth)/signin/page";
import SignUpPage from "@/app/(pages)/(auth)/signup/page";
import Footer from "@/components/layouts/Footer";
import Navigation from "@/components/layouts/Navigation";
import Map from "@/lib/Map";

import Adminlog from "@/app/(pages)/(auth)/adminlog/page";

import UserDetails from "@/lib/UserDetails";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const page = () => {
  return (
    <main>
      <Router>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Navigation />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/adminlog" element={<Adminlog />} />
            </Routes>
            <Map />
            <UserDetails />
          </div>
          <Footer />
        </div>
      </Router>
    </main>
  );
};

export default page;
