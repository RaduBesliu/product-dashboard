import { useDispatch } from "react-redux";
import { Components } from "./styled";
import { useCallback } from "react";
import _ from "lodash";
import { setSearchTerm } from "../../../../../../store/searchSlice";
import { AppDispatch } from "../../../../../../store";

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const debouncedDispatch = useCallback(
    _.debounce((value: string) => {
      dispatch(setSearchTerm(value));
    }, 300),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debouncedDispatch(value);
  };

  return (
    <Components.Container>
      <Components.SearchInput
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
      <Components.StyledIcon />
    </Components.Container>
  );
};

export default SearchBar;
