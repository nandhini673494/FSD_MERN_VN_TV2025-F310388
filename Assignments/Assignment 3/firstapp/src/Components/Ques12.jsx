import { useEffect, useState } from "react";

function Ques12() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error loading data</h3>;

  return (
    <div>
      <h3>Data Loaded</h3>
      <p>{data.title}</p>
    </div>
  );
}

export default Ques12;
