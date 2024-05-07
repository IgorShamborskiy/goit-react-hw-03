export default function ContactForm () {
    return (
      <form>
        <input type="text" name="Name" />
        <input type="number" name="Number" />
        <button type="submit">Add contact</button>
      </form>
    );
  };