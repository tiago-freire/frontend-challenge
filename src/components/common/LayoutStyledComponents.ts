import styled from "styled-components";

const CONTAINER_WIDTH = "1248px";

export const Container = styled.div<{ full?: boolean; sticky?: boolean }>`
  max-width: ${(props) => (props.full ? "100%" : CONTAINER_WIDTH)};
  margin: 0 auto;
  ${(props) =>
    props.sticky &&
    `
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 2;
  `}

  .swiper-notification {
    display: none;
  }
`;

export const Banner = styled.div`
  position: relative;

  h2 {
    top: 38%;
    left: 18%;
    width: 50%;
    position: absolute;
    font-size: 2.5rem;
    font-weight: 900;
    color: #fff;
    line-height: 2.5rem;
    small {
      font-size: 1.7rem;
      line-height: 3rem;
      font-weight: 600;
    }
  }
`;

export const SectionTitle = styled.h3<{ center?: boolean }>`
  position: relative;
  font-size: 1.25rem;
  font-weight: 900;
  margin: 0.5rem 0;
  width: 100%;
  text-align: ${(props) => (props.center ? "center" : "left")};

  :after {
    content: "";
    display: block;
    width: 65px;
    height: 4px;
    background: var(--medium-gray);
    margin-top: 0.25rem;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 28px;
  font-weight: bold;

  &:hover,
  &:focus,
  &:focus-visible {
    background-color: var(--light-black);
  }

  &:active,
  &.active {
    background-color: var(--dark-gray);
  }
`;
