import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background-color: #03001c;
  color: #fff;
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;
export const Nav = styled.div`
  /* width: 45%; */
  display: flex;
  align-items: center;
  svg {
    font-size: 30px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      margin: 10px;
    }
  }
`;

export const SearchNav = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  input {
    padding: 6px 20px;
    background-color: transparent;
    color: #f4f5f7;
    border: 1px solid gray;
    border-radius: 4px;
  }
`;
