import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Profile() {
  return (
    <div style={{ border: "1px solid red" }}>
      <FaGithub />
      <h1>Stiven Fortes</h1>
      <h4>Username</h4>
      <button>Follow</button>
      <p>Positon Company</p>
      <div>
        <div>Follwers</div>
        <div>Following</div>
        <div>Stars</div>
      </div>

      <div>
        <div>Company</div>
        <div>Address</div>
        <div>Web page</div>
      </div>
    </div>
  );
}
