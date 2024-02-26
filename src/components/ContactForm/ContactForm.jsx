import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContactAction } from "../../redux/contacts/contacts.slice";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

export const ContactForm = () => {
  const usernameFildeId = useId();
  const userphoneFildeId = useId();

  const dispatch = useDispatch();

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();

  //   const form = evt.target;
  //   const { name, number } = form.elements;

  //   onSubmit({
  //     name: name.value,
  //     number: number.value,
  //   });

  // Посилання на DOM-елементи
  // console.log(number або  name);

  // Значення полів
  // console.log(form.elements.name.value);
  // console.log(form.elements.number.value);

  // Скидаємо значення полів після відправки
  // form.reset();
  // };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        // const updedvalues = { ...values, number: Number(values.number) };
        // onAdd({ id: Date.now(), ...updedvalues });
        const contact = { ...values, id: Date.now() };
        dispatch(addContactAction(contact));

        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label
          className={css.label}
          htmlFor={usernameFildeId}
        >
          Name
        </label>
        <Field
          className={css.field}
          type="text"
          name="name"
          id={usernameFildeId}
        />
        <ErrorMessage
          className={css.error}
          name="name"
          component="span"
        />
        <label
          className={css.label}
          htmlFor={userphoneFildeId}
        >
          Number
        </label>
        <Field
          className={css.field}
          type="tel"
          name="number"
          id={userphoneFildeId}
        />
        <ErrorMessage
          className={css.error}
          name="number"
          component="span"
        />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
