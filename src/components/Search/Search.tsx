// import { useRef } from 'react';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { Button } from 'components/Button';
import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  // const searchRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (
    event: React.FormEvent<HTMLFormElement & FormFields>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text.trim()) {
      onSubmit(text);
      // способ сброса поля
      event.currentTarget.reset();
    }
    // if (searchRef.current) {
    //   const text = searchRef.current.value;
    // }
    // можно короче
    // // const text = searchRef.current ? searchRef.current.value : '';

    // onSubmit(text);

    // if (searchRef.current) {
    //   searchRef.current.value = '';
    // }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.search}>
        <label className={styles.label} htmlFor="search">
          <SearchIcon />
        </label>
        <input
          // ref={searchRef}
          className={styles.textField}
          type="text"
          id="search"
          name="username"
          placeholder="Search GitHub username..."
          autoComplete="off"
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
