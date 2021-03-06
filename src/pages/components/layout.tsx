import React from "react";
import Head from "next/head";
import Image from "next/image";
//import styles from '../../styles/globals.css'
import Header from "../../snippets/header";
import Footer from "../../snippets/footer";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
