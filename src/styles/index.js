import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background: #21325e;
  height: 100vh;
`;

export const Heading = styled.h1`
  color: #fff;
  line-height: 150px;
`;
export const Mainbox = styled.div`
  display: grid;
  color: #fff;
  grid-template-rows: repeat(3, 10vh);
  grid-template-columns: repeat(3, 10vh);
`;

export const BoxItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
`;

export const InfoContainer = styled.div`
  margin-top: 10px;
  color: #fff;
`;

export const Para = styled.p`
  font-size: 1.2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  cursor: pointer;
  color: #21325e;
`;
