import { useState } from "react";

function About() {
  const [me, setMe] = useState({
    name: "Netlab Bookstore",
  });

  return (
    <>
      <div align="center">
        <p>{me.name}</p>
      </div>
    </>
  );
}

export default About;
