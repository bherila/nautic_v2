"use client";

import Head from "next/head";
import Image from "next/image";
//import styles from '../../styles/globals.css'
import Header from "@/snippets/header_2022";
import Footer from "@/snippets/footer";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="body">
      <Header />
      <main className="wf-section">{children}</main>
      <Footer />
    </div>
  );
}
