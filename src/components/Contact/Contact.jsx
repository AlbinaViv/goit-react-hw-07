import css from "./Contact.module.css";
import { CgGirl } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContactAction } from "../../redux/contacts/contacts.slice";

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contact}>
      <p className={css.content}>
        <CgGirl />
        {name}
      </p>
      <p className={css.content}>
        <BsFillTelephoneFill />
        {number}
      </p>
      <button
        onClick={() => dispatch(deleteContactAction(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};
