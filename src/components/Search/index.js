import React from "react";
import { FaArrowDown } from "react-icons/fa";

export default function Search() {
  return (
    <div>
      <input type="text" placeholder="Find a repository" />
      <div>
        <button>
          Type <FaArrowDown />
        </button>
        <button>
          Language <FaArrowDown />
        </button>
        <button>
          Sort <FaArrowDown />
        </button>
      </div>
    </div>
  );
}
