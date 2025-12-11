// src/components/Spinner.jsx
import React from "react";

export default function Spinner() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white/80 backdrop-blur-sm fixed inset-0 z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-cgb-500 border-t-transparent"></div>
    </div>
  );
}
