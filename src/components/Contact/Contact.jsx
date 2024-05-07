import css from '../Contact/Contact.module.css'
export default function Contact({ contact: { id, name, number } }) {
    return (
      <div className={css.box}>
        <div>
          <p className={css.text}>{name}</p>
          <p className={css.text}>{number}</p>
        </div>
        <button className={css.btn}>
          Delete
        </button >
      </div>
    );
  }