import "./search-box.styles.css";
import {ChangeEvent, ChangeEventHandler} from "react";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) =>  (
  <input
  className={`search-box ${className}`}
  type="search"
  placeholder={placeholder}
  onChange={onChangeHandler} />
)

export default SearchBox;