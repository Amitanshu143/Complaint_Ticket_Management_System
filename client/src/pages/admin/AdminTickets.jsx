import { useEffect, useState } from "react";
import api from "../../services/api";

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    api.get("/tickets/my").then(res => setTickets(res.data));
  }, []);

  return (
    <div>
      {tickets.map(t => (
        <div key={t._id}>
          <h4>{t.subject}</h4>
          <p>Status: {t.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyTickets;
