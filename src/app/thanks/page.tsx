import React from "react";
import Layout from "@/lib/layout";

export default function ThanksPage({}) {
  return (
    <Layout>
      <h1 className="heading-39">Success!</h1>
      <div className="w-container">
        <div style={{ padding: "70px", textAlign: "center", fontSize: "20pt" }}>
          Thank you! Your submission has been received!
        </div>
      </div>
    </Layout>
  );
}
