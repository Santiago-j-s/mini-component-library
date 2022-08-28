import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: 14,
    padding: 4,
    iconSize: 16,
    iconMargin: 4,
    lineWidth: 1,
  },
  large: {
    fontSize: 18,
    padding: 8,
    iconSize: 24,
    iconMargin: 6,
    lineWidth: 2,
  },
};

const SearchIcon = styled(Icon)`
  position: absolute;
  margin-top: ${(props) => props.iconMargin + "px"};
  color: currentColor;
  font-weight: inherit;
`;

const SearchInput = styled.input`
  font-size: var(--font-size);
  font-weight: inherit;

  width: var(--width);

  padding: var(--padding);
  padding-left: 1.75em;

  background-color: #fff;
  color: currentColor;

  border: none;
  border-bottom: var(--line-width) solid ${COLORS.black};
  margin-bottom: calc(-1 * var(--line-width));

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

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  if (!Object.keys(SIZES).includes(size)) {
    throw new Error("Invalid size");
  }

  const sizeValues = SIZES[size];

  return (
    <Wrapper htmlFor="search-input">
      <VisuallyHidden>{label}</VisuallyHidden>
      <SearchIcon
        id={icon}
        size={sizeValues.iconSize}
        strokeWidth="2"
        iconMargin={sizeValues.iconMargin}
      />
      <SearchInput
        id="search-input"
        type="search"
        placeholder={placeholder}
        style={{
          "--width": width + "px",
          "--padding": sizeValues.padding + "px",
          "--font-size": `${sizeValues.fontSize / 16}rem`,
          "--line-width": sizeValues.lineWidth + "px",
        }}
      />
    </Wrapper>
  );
};

export default IconInput;
