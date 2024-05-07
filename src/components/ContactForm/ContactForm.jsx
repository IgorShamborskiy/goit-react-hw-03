import { nanoid } from "nanoid";
import { useId } from "react";



export default function ContactForm ({onAdd}) {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAdd({
            id:Date.now(),
            text:evt.target.elements.text.value,
            number:evt.target.elements.tel.value,
        });
        evt.target.reset();
      };
    return (
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Number</label>
        <input type="tel" name="number" />
        <button type="submit">Add contact</button>
      </form>
    );
  };