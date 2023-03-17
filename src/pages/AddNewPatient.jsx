import React, { useState } from "react";
import QRcodeGEN from "../components/QrcodeGEN";

const AddNewPatient = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <div className="h-screen flex flex-col flex-1 lg:p-7 border_bottom w-full border p-4 md:p-2  md:justify-center md:items-center">
        <h1 className="text-3xl font_title_bold mx-auto w-full">
          Add New Patient
        </h1>
        <div className="border h-[400px] md:h-full w-full rounded-lg my-4 flex flex-col items-center justify-center">
          <p className="p-2 md:p-0 text-center mx-auto">
            You can add a new patient by letting user scan a QR Code on their
            phone
          </p>
          <input
            type="text"
            disabled
            placeholder="Add patient code here"
            className="p-4 outline-none border rounded-lg my-7 w-[300px] md:w-[400px] lg:w-[500px]"
            onChange={(e) => setText(e.target.value)}
          />
          {/* QR CODE GENERATOR, */}
          <QRcodeGEN value={text} />
        </div>
      </div>
    </div>
  );
};

export default AddNewPatient;
