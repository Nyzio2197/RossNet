import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type, details } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge badge-" + String(type).toLowerCase()
          }
        >
          {/* The charAt/slice javascript capitalizes the first letter and then adds on the remaining letters to reconstruct the word "professional" or "personal".*/}
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope"></i> {email}
          </li>
        )}
      {phone && (
          <li>
              <i className="fas fa-phone-alt"></i> {phone}
          </li>
      )}
      {details && (
          <li>
              <i className="fas fa-file-lines"></i> {details}
          </li>
      )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(contact)}
        >&emsp;Edit&emsp;
        </button>
          &emsp;
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
