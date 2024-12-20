import AccountActions from "./components/AccountActions";
import SearchBar from "./components/SearchBar";
import { Components } from "./styled";

const TopNavbar = () => {
  return (
    <Components.Container>
      <Components.Header>Shoppy</Components.Header>
      <SearchBar />
      <AccountActions />
    </Components.Container>
  );
};

export default TopNavbar;
