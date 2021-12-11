import React, { useState, useRef } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("");
  const [acceptance, setAcceptance] = useState(false);

  const nameElement = useRef();
  const emailElement = useRef();
  const biolElement = useRef();
  const genderElement = useRef();
  const acceptanceElement = useRef();

  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const addError = (element) => {
    element.current.classList.add("error");
  };
  const removeErrors = (elements) => {
    elements.map((element) => element.current.classList.remove("error"));
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleMailChange = (e) => setMail(e.target.value);
  const handleBioChange = (e) => setBio(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleAcceptanceChange = (e) => setAcceptance((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;

    removeErrors([
      nameElement,
      emailElement,
      biolElement,
      genderElement,
      acceptanceElement
    ]);

    // check if name is ok?
    if (name.length < 3) {
      addError(nameElement);
      formIsValid = false;
    }
    // check if email is ok?
    if (email.length === 0 || !email.match(re)) {
      addError(emailElement);
      formIsValid = false;
    }
    // check if bio is ok?
    if (bio.length < 5) {
      addError(biolElement);
      formIsValid = false;
    }
    // check if gender is ok?
    if (!gender) {
      addError(genderElement);
      formIsValid = false;
    }
    // check if acceptance is ok?
    if (!acceptance) {
      addError(acceptanceElement);
      formIsValid = false;
    }

    if (formIsValid) {
      e.target.submit();
      return false;
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit.bind(this)}>
        <div className="form-field" ref={nameElement}>
          <label htmlFor="name">Imię</label>
          <input
            type="text"
            name="name"
            minLength={3}
            onChange={handleNameChange}
            value={name}
          ></input>
          <small>* Pole wymagane</small>
        </div>
        <div className="form-field" ref={emailElement}>
          <label htmlFor="email">mail</label>
          <input
            // type="email"
            name="mail"
            value={email}
            onChange={handleMailChange}
          ></input>
          <small>* Pole wymagane</small>
        </div>
        <div className="form-field" ref={biolElement}>
          <label htmlFor="bio">bio</label>
          <textarea
            name="bio"
            placeholder="napisz coś o sobie"
            value={bio}
            onChange={handleBioChange}
          ></textarea>
          <small>* Pole wymagane</small>
        </div>
        <div
          className="form-radio"
          onChange={handleGenderChange.bind(this)}
          ref={genderElement}
        >
          <div>
            <input type="radio" name="gender" value="woman" id="woman"></input>
            <label htmlFor="woman">kobieta</label>
          </div>
          <div>
            <input type="radio" name="gender" value="men" id="men"></input>
            <label htmlFor="men">mężczyzna</label>
          </div>
          <small>* Pole wymagane</small>
        </div>
        <div className="form-checkbox" ref={acceptanceElement}>
          <div>
            <input
              type="checkbox"
              name="terms-of-use"
              id="terms-of-use"
              value={acceptance}
              onChange={handleAcceptanceChange.bind(this)}
            />
            <label htmlFor="terms-of-use">Akceptuję regulamin</label>
          </div>
          <small>* Pole wymagane</small>
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};
