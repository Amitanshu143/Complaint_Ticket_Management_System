import { useState } from "react";
import api from "../services/api";

const SubmitTicket = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const submit = async () => {
    await api.post("/tickets", { subject, description });
    alert("Ticket submitted");
  };

  return (
    <>
      <input onChange={e => setSubject(e.target.value)} placeholder="Subject" />
      <textarea onChange={e => setDescription(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </>
  );
};

export default SubmitTicket;
