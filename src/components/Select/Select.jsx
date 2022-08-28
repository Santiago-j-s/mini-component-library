import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const StyledSelect = styled.select`
  // A reset of styles, including removing the default dropdown arrow
  appearance: none;

  // Additional resets for further consistency
  background-color: transparent;
  border: none;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;

  // styles
  color: inherit;

  border-radius: 8px;
  width: fit-content;
  padding: 12px 16px;
  padding-right: 52px;
  cursor: pointer;

  &:focus {
    outline: 1px solid currentColor;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;

  top: 0;
  right: 10px;
  bottom: 0;

  margin: auto;

  width: var(--size);
  height: var(--size);

  color: inherit;
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;

  width: fit-content;

  font-size: 1rem;
  font-weight: 400;
  line-height: 18.75px;

  border-radius: 8px;

  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <StyledIcon id="chevron-down" size="24" strokeWidth="2" />
    </Wrapper>
  );
};

export default Select;
