import glassIcon from "../../assets/glass.svg";
import { HeaderButton, SearchFormContainer, SearchInput } from "./HeaderStyledComponents";

const SearchForm = () => {
  return (
    <SearchFormContainer>
      <SearchInput type="text" placeholder="O que está procurando?" />
      <HeaderButton>
        <img src={glassIcon} alt="Buscar" />
      </HeaderButton>
    </SearchFormContainer>
  );
};

export default SearchForm;
