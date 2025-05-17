import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserDetails from "./UserDetails";
import Search from "./Search";
import Filter from "./Filter";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
  );
}

