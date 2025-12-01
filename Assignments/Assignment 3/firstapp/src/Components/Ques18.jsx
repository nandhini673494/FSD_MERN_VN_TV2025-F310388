import { useEffect, useState } from "react";
import axios from "axios";

function Ques18() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0); // page index

  useEffect(() => {
    axios.get("https://dummyjson.com/users?limit=20")
      .then(res => setUsers(res.data.users));
  }, []);

  const usersPerPage = 5;
  const start = page * usersPerPage;
  const end = start + usersPerPage;

  return (
    <div>
      <h2>Users (5 per page)</h2>

      {users.slice(start, end).map((u) => (
        <p key={u.id}>{u.firstName} {u.lastName}</p>
      ))}

      <button 
        onClick={() => setPage(page - 1)} 
        disabled={page === 0}
      >
        Prev
      </button>

      <button 
        onClick={() => setPage(page + 1)}
        disabled={end >= users.length}
      >
        Next
      </button>
    </div>
  );
}

export default Ques18;
