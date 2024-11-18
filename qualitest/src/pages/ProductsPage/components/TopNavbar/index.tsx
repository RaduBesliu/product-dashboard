import AccountActions from "./components/AccountActions";
import SearchBar from "./components/SearchBar";
import { Components } from "./styled";

const TopNavbar = () => {
  return (
    <Components.Container>
      <h1>App Logo</h1>
      <SearchBar />
      <AccountActions />
    </Components.Container>
  );
};

export default TopNavbar;
