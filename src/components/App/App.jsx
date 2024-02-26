import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";
import { getContacts, getError, getIsLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";

export const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
      <ContactList />
    </>
  );
};

export default App;
