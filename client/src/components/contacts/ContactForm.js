import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  // Note: useEffect mimics the life cycle method of componentDidMount.
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "recruiter",
        description: "",
      });
    }
  }, [contactContext, current]);

  const clearAll = () => {
    clearCurrent();
  };

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "recruiter",
      description: "",
  });

  const { name, email, phone, type, description } = contact;

  const onChange = (event) =>
    setContact({ ...contact, [event.target.name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "recruiter",
      description: "",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
        <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={onChange}
        />
        <input
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={onChange}
        />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="recruiter"
        checked={type === "recruiter"}
        onChange={onChange}
      />{" "}
      Recruiter{" "}
        <input
            type="radio"
            name="type"
            value="instructor"
            checked={type === "instructor"}
            onChange={onChange}
        />{" "}
        Instructor{" "}
        <input
            type="radio"
            name="type"
            value="peer"
            checked={type === "peer"}
            onChange={onChange}
        />{" "}
        Peer{" "}
      <input
          type="radio"
          name="type"
          value="other"
          checked={type === "other"}
          onChange={onChange}
      />{" "}
      Other{" "}
      <div>
        <input
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          className="btn btn-primary brn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
