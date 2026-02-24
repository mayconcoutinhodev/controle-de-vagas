
"use client";

import { TableVagas } from "../components/table";


export default function Home() {

  return (
    <div style={{ width: '100vw', height: '100vh', display: "flex", gap: 10, padding: 20 }}>

      <div style={{ display: "flex", flexDirection: 'column', gap: 10, }}>


        <div style={{ width: "60vw", height: 200, backgroundColor: "#333" }}> </div>


        <div style={{ width: "60vw", height: "100%", backgroundColor: "#333", }}>

        
    <TableVagas/>


        </div>

      </div>

      <div style={{ width: "40vw", height: '100%', backgroundColor: "#333" }}>





      </div>
    </div>
  );
}


