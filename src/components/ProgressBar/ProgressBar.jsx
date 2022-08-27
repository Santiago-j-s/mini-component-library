/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  large: {
    "--padding-y": "8px",
    "--inner-padding": "4px 4px",
    "--max-width": "370px",
  },
  medium: {
    "--padding-y": "6px",
    "--inner-padding": "0 0",
    "--max-width": "370px",
  },
  small: {
    "--padding-y": "4px",
    "--inner-padding": "0 0",
    "--max-width": "370px",
  },
};

/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 *
 * @returns {number}
 */
function clamp(value, min, max) {
  if (value > max) return max;

  if (value < min) return min;

  return value;
}

/**
 * @param {{
 *   value: number;
 * }} param0
 * @returns
 */
const ProgressBar = ({ value, size, min = 0, max = 100 }) => {
  const sizeValues = sizes[size] ?? size.medium;

  const clampedValue = clamp(value, min, max);

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-label="progress bar"
      style={{ ...sizeValues }}
    >
      <Progress value={clampedValue} style={{ ...sizeValues }}></Progress>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: var(--inner-padding);
  background-color: ${COLORS.transparentGray15};
  max-width: var(--max-width);
`;

const Progress = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${COLORS.primary};
  padding: var(--padding-y) 0;
  border-radius: 4px ${(p) => (p.value > 98 ? "4px" : 0)}
    ${(p) => (p.value > 98 ? "4px" : 0)} 4px;
  width: ${(p) => p.value ?? 0}%;
`;

export default ProgressBar;
