import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: 14,
    height: 24,
    iconSize: 16,
    borderThickness: 1,
  },
  large: {
    fontSize: 18,
    height: 36,
    iconSize: 24,
    borderThickness: 2,
  },
};

const SearchIcon = styled.div`
  position: absolute;

  top: 0;
  bottom: 0;
  margin: auto 0;

  width: max-content;
  height: max-content;

  color: currentColor;
`;

const SearchInput = styled.input`
  font-size: var(--font-size);
  font-weight: inherit;

  width: var(--width);
  height: var(--height);

  padding-left: var(--height);

  background-color: #fff;
  color: currentColor;

  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};

  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray500};
  width: fit-content;

  &:hover {
    font-weight: 700;
    color: ${COLORS.black};
  }
`;

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  if (!Object.keys(SIZES).includes(size)) {
    throw new Error("Invalid size");
  }

  const sizeValues = SIZES[size];

  return (
    <Wrapper htmlFor="search-input">
      <VisuallyHidden>{label}</VisuallyHidden>
      <SearchIcon>
        <Icon id={icon} size={sizeValues.iconSize} strokeWidth="2" />
      </SearchIcon>
      <SearchInput
        id="search-input"
        type="search"
        style={{
          "--width": width + "px",
          "--height": sizeValues.height / 16 + "rem",
          "--font-size": `${sizeValues.fontSize / 16}rem`,
          "--border-thickness": sizeValues.borderThickness + "px",
        }}
        {...delegated}
      />
    </Wrapper>
  );
};

export default IconInput;
