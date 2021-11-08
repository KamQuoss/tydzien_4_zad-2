import React from "react";

export const Form = () => {
  const validation = (e) => {
    let value = e.target.value;
    if (value === "") {
      e.target.setCustomValidity("Pusto");
    }
    console.log();
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Imię</label>
        <input
          type="text"
          name="name"
          required
          minLength={3}
          onInvalid={validation.bind(this)}
        ></input>
      </div>
      <div>
        <label htmlFor="email">mail</label>
        <input type="email" name="mail" required></input>
      </div>
      <div>
        <label htmlFor="bio">bio</label>
        <textarea name="bio" required></textarea>
      </div>
      <div>
        <div>
          <input
            type="radio"
            name="gender"
            value="woman"
            id="woman"
            checked
          ></input>
          <label htmlFor="woman">kobieta</label>
        </div>
        <div>
          <input type="radio" name="gender" value="men" id="men"></input>
          <label htmlFor="men">mężczyzna</label>
        </div>
      </div>
      <div>
        <input type="checkbox" name="terms" id="terms" required />
        <label htmlFor="terms">Akceptuję regulamin</label>
      </div>
      <button>Wyślij</button>
    </form>
  );
};
