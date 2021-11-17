import React from "react";

export const Form = () => {
  const [name, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [gender, setGender] = React.useState("female");
  const [acceptance, setAcceptance] = React.useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleMailChange = (e) => setMail(e.target.value);
  const handleBioChange = (e) => setBio(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleAcceptanceChange = (e) => setAcceptance((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("waliduj formularza");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit.bind(this)}>
        <div className="form-field">
          <label htmlFor="name">Imię</label>
          <input
            type="text"
            name="name"
            minLength={3}
            onChange={handleNameChange}
            value={name}
          ></input>
          <small>* </small>
        </div>
        <div className="form-field">
          <label htmlFor="email">mail</label>
          <input
            type="email"
            name="mail"
            value={mail}
            onChange={handleMailChange}
          ></input>
          <small>* </small>
        </div>
        <div className="form-field">
          <label htmlFor="bio">bio</label>
          <textarea
            name="bio"
            placeholder="napisz coś o sobie"
            value={bio}
            onChange={handleBioChange}
          ></textarea>
          <small>* </small>
        </div>
        <div className="form-radio" onChange={handleGenderChange.bind(this)}>
          <div>
            <input
              type="radio"
              name="gender"
              value="woman"
              id="woman"
              defaultChecked
            ></input>
            <label htmlFor="woman">kobieta</label>
          </div>
          <div>
            <input type="radio" name="gender" value="men" id="men"></input>
            <label htmlFor="men">mężczyzna</label>
          </div>
          <small>* </small>
        </div>
        <div className="form-checkbox">
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
          <small>* </small>
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};
