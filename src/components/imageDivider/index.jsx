import React from "react";
import { styled } from "styled-components";

const ImageDivider = () => {
  return <ImgDiv src={require("../../assets/img/divider.png")} />;
};

export default ImageDivider;

const ImgDiv = styled.img`
  margin-top: 2rem;
  width: 100%;
  object-fit: fill;
`;
