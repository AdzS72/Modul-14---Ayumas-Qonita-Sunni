import { useState } from "react";

function Me() {
  const [me, setMe] = useState({
    name: "Ayumas Qonita Sunni",
    npm: "320200401005",
    university: "Universitas Pertahanan Republik Indonesia",
    tele: "@adzs72",
  });

  return (
    <>
      <div align="center">
        <h3>Hello, I'm {me.name} !</h3>
        <p>{me.npm}</p>
        <p>{me.university}</p>
        <p>Contact me on Telegram! {me.tele}</p>
      </div>
    </>
  );
}

export default Me;
