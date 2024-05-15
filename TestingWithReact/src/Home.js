import React from "react";

function Home() {
  return (
    <div>
      <h3>Home Component</h3>
      <input
        type="text"
        placeholder="Enter UserName"
        data-testid="t1"
        name="userName"
      />
      <br></br>
      <input
        type="text"
        placeholder="Enter Password"
        data-testid="t2"
        name="password"
      />
      <br />
      <br />
      <img
        title="AI Image"
        alt="Img Not Available"
        src="data:image/jpeg;base64,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"
      />
    </div>
  );
}

export default Home;
