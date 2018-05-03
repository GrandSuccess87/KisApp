import React from "react";
import "./Search.css";

const Search = props => (
  <header>
    <div>
       <input id="search-input" placeholder="Get Sexy">
       {/* <!-- We use a specific placeholder in the input to guides users in their search. --> */}
    </div>
  </header>
  <main>
      <div id="hits"></div>
      <div id="pagination"></div>
  </main>
  <div>
  <script type="text/html" id="hit-template">
    <div class="hit">
      <p class="hit-name">{{{_highlightResult.question.value}}} {{{_highlightResult.answer.value}}}</p>
    </div>
  </script>
  </div>
);

export default Search;