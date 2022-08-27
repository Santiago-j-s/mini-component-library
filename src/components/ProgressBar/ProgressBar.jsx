/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

/**
 * @type {Record<"large" | "medium" | "small", { height: number, padding: number, radius: number }>}
 */
const sizes = {
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  small: {
    height: 8,
    padding: 0,
    radius: 4,
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
 *   size: "large" | "medium" | "small";
 *   min: number;
 *   max: number;
 * }} param0
 * @returns
 */
const ProgressBar = ({ value, size, min = 0, max = 100 }) => {
  const { height, padding, radius } = sizes[size] ?? size.medium;

  const clampedValue = clamp(value, min, max);

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-label="progress bar"
      style={{
        "--height": `${height}px`,
        "--padding": `${padding}px`,
        "--max-width": "370px",
        "--radius": `${radius}px`,
      }}
    >
      <VisuallyHidden>{`${clampedValue}%`}</VisuallyHidden>
      <BarWrapper>
        <Progress
          value={clampedValue}
          style={{
            "--width": `${clampedValue}%`,
            "--height": `${height}px`,
            "--padding": `${padding}px`,
          }}
        ></Progress>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  max-width: var(--max-width);
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  // trim corners of the inner bar when progress is near-full
  overflow: hidden;
`;

const Progress = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${COLORS.primary};
  padding: var(--padding) 0;
  border-radius: 4px 0 0 4px;
  width: var(--width);
  height: var(--height);
`;

export default ProgressBar;
