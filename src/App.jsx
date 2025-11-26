// import { useState } from "react";

import { fetchAllBooks } from "./api/axiosGutendex";

async function App() {
  return await fetchAllBooks();
  // <>
  //   <h1>GutenDex</h1>
  // </>
}

export default App;
