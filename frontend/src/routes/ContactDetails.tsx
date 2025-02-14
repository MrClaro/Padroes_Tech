import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const { id } = useParams();

  //Redirect
  const navigate = useNavigate();

  const handleContact = () => {
    console.log("Contact Details");
    return navigate("/");
  };

  return (
    <div>
      <h1>Contact Details</h1>
      <p>ID: {id}</p>
      <button onClick={handleContact}>Voltar</button>
    </div>
  );
};

export default ContactDetails;
