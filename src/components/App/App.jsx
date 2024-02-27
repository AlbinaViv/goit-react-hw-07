import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";
import { selectError, selectIsLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";

export const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const { items } = useSelector(getContacts);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {/* {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>} */}
      {isLoading && !error && <b>Request in progress...</b>}
      {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
      <ContactList />
    </>
  );
};

export default App;
