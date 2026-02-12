import { useEffect, useState } from "react";
import axios from "axios";


const AdminTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/tickets");
    setTickets(res.data);
  };

  const resolveTicket = async (id) => {
    await axios.put(
      `http://localhost:5000/api/admin/tickets/${id}/status`,
      { status: "Resolved" }
    );
    fetchTickets();
  };

  return (
    <div className="flex">
      <div className="flex-1 bg-gray-100 min-h-screen">

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">All Tickets</h2>

          <table className="w-full bg-white shadow rounded">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3">Title</th>
                <th>Status</th>
                <th>User</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket._id} className="text-center border">
                  <td className="p-3">{ticket.title}</td>
                  <td>{ticket.status}</td>
                  <td>{ticket.user?.name}</td>
                  <td>
                    <button
                      onClick={() => resolveTicket(ticket._id)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Resolve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminTickets;
