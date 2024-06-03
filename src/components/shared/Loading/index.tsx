import React from "react";

function Loading() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <span className="loader"></span>
    </section>
  );
}

Loading.displayName = "Loading";

export default Loading;
