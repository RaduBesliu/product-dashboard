import CartDropdown from "./dropdowns/CartDropdown";
import FavoritesDropdown from "./dropdowns/FavoritesDropdown";
import { Components } from "./styled";

const AccountActions = () => {
  return (
    <Components.Container>
      <CartDropdown />
      <FavoritesDropdown />
    </Components.Container>
  );
};

export default AccountActions;
