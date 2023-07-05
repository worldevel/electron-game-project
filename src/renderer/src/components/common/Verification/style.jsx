import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --ReactInputVerificationCode-itemWidth: 4.5rem;
    --ReactInputVerificationCode-itemHeight: 5rem;
    --ReactInputVerificationCode-itemSpacing: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: ${({ itemsCount }) =>
        `calc(
      var(--ReactInputVerificationCode-itemWidth) * ${itemsCount}
      + var(--ReactInputVerificationCode-itemSpacing) * (${itemsCount} - 1)
    )`};
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: ${({ activeIndex }) =>
        `calc(
      var(--ReactInputVerificationCode-itemWidth) * ${activeIndex}
      + var(--ReactInputVerificationCode-itemSpacing) * ${activeIndex}
    )`};
  opacity: 0;
  width: var(--ReactInputVerificationCode-itemWidth);
  height: var(--ReactInputVerificationCode-itemHeight);
`;

export const Item = styled.div`
  width: var(--ReactInputVerificationCode-itemWidth);
  height: var(--ReactInputVerificationCode-itemHeight);
  padding: 0;
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: var(--ReactInputVerificationCode-itemHeight);
  text-align: center;
  border: 0;
  box-shadow: inset 0 0 0 1px #ccc;
  transition: box-shadow 0.2s ease-out;
  &.is-active {
    box-shadow: inset 0 0 0 2px #888;
  }
`;
