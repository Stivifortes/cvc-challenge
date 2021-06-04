import React from "react";
import Repository from "../../components/Repository";
import Search from "../../components/Search";
import Tabs from "../../components/Tabs";

export default function Repositories() {
  return (
    <div>
      <Search />
      <Repository />
      <Repository />
    </div>
  );
}
