import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { COLORS } from "../../../../../../utils";

export const Components = {
  Container: styled.div`
    position: relative;
    width: 20%;
    height: 36px;
  `,

  SearchInput: styled.input`
    width: 100%;
    height: 100%;
    padding-right: 40px; /* Space for the icon */
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${COLORS.darkGray};
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
  `,

  StyledIcon: styled(SearchIcon)`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: ${COLORS.darkGray};
  `,
};
