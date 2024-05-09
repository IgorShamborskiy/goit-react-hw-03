import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";
const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
  number: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
});

export default function ContactForm ({onAdd}) {
  const contactId = useId();
  const initialValues = {
      name: '',
      number: '',
  };
  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: contactId });
      actions.resetForm();
  }
    return (
<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
<form>
        <label>Name</label>
        <input type="text" name="text" />
        <label>Number</label>
        <input type="text" name="number" />
        <button type="submit">Add contact</button>
      </form>
</Formik>
    );
  };