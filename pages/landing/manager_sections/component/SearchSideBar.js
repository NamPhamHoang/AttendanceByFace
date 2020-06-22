import React from "react";

export default function SearchSideBar() {
  return (
    <div className="py-3">
      <div class="md-form active-cyan active-cyan-2 mb-3">
        <input
          class="form-control input-cus"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </div>
  );
}
