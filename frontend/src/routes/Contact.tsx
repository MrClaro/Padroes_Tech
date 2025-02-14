import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        {" "}
        <Link to="/contact/1">Forma de Contato 1</Link>
      </p>
      <p>
        {" "}
        <Link to="/contact/2">Forma de Contato 2</Link>
      </p>
    </div>
  );
};

export default Contact;
