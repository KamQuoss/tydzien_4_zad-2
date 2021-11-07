import React from "react";

export const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Imię</label>
        <input type="text" name="name"></input>
      </div>
      <div>
        <label htmlFor="email">mail</label>
        <input type="email" name="mail"></input>
      </div>
      <div>
        <label htmlFor="bio">bio</label>
        <textarea name="bio"></textarea>
      </div>
      <div>
        <div>
          <input type="radio" name="gender" value="woman" id="woman"></input>
          <label htmlFor="woman">kobieta</label>
        </div>
        <div>
          <input type="radio" name="gender" value="men" id="men"></input>
          <label htmlFor="men">mężczyzna</label>
        </div>
      </div>
      <div>
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">Akceptuję regulamin</label>
      </div>
      <button>Wyślij</button>
    </form>
  );
};
