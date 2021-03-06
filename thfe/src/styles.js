import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const fadeInOut = keyframes`
0%{
  opacity:0 ;
}
50%{
  opacity:0.5;
}
100%{
  opacity:1;
}

`;

export const Loading = styled.div`
  margin: auto;
`;
export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  font-size: 24px;
  color: ${(props) => props.theme.mainColor};

  :hover {
    background-color: ${(props) => props.theme.mainColor};
  }
`;

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 40px;
    height: 40px;
  }
`;
export const GlobalStyle = createGlobalStyle`

h1{
    font-family:cursive;
}
body{
    background-color: ${(props) => props.theme.backgroundColor}
}
`;

export const theme = {
  light: {
    mainColor: "#FAF3F3", // main font color
    backgroundColor: "#E1E5EA", // main background color
    pink: "#A7BBC7",
    textColor: "#DA7F8F",
    darkGreen: "#966C3B",
  },
  dark: {
    mainColor: "#7B113A", // main font color
    backgroundColor: "#150E56", // main background color
    pink: "#1597BB",
    textColor: "#8FD6E1",
    darkGreen: "#966C3B",
  },
};

export const HomeDiv = styled.div`
  margin-top: 40px;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.textColor};
`;
export const List = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 30px;
`;

export const ShopItem = styled.div`
  width: 200px;
  margin: auto;
  border-radius: 8px;
  margin-bottom: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    background-color: ${(props) => props.theme.mainColor};
    padding: 10px;
    width: 200px;
    margin-top: 8px;
  }
  h3 {
    text-align: center;
    padding: 5px;
  }
`;
export const Item = styled.div`
  width: 200px;
  height: 555px;
  position: relative;
  border-radius: 8px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.mainColor};
  img {
    width: 200px;
    margin-top: 8px;
  }
  h3 {
    text-align: center;
    padding: 5px;
  }
  .desc {
    padding: 10px;
  }
  button {
    top: 84%;
    position: absolute;
  }
  p {
    top: 80%;
    position: absolute;
  }
`;

export const ThemeButton = styled.button`
  position: absolute;
  right: 50px;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const Details = styled.div`
  padding: 10px;
  width: 30%;
  margin: auto;
  margin-top: 20px;
  border-radius: 8px;
  text-align: center;
  background-color: ${(props) => props.theme.mainColor};
  svg {
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export const DeleteButtonStyled = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: white;
  color: #ff0000;
  border: none;
  :hover {
    background-color: #ff0000;
    color: white;
  }
`;

export const AddProductButton = styled.button`
  font-size: 1em;
  margin-top: 15px;
  padding: 0.25em 1em;

  border-radius: 3px;
  background-color: #346751;
  color: white;
  border: none;
  :hover {
    background-color: white;
    color: #346751;
  }
`;

export const AddProductDiv = styled.div`
  background: ${(props) => props.theme.mainColor};
  border-radius: 15px;
  padding: 30px;
  margin: auto;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  align-items: center;
  input {
    height: 40px;
    width: 300px;
    border-radius: 4px;
    border: 2px solid white;
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 150px;
  border-radius: 4px;
  border: none;
  color: white;
  background: ${(props) => props.theme.darkGreen};
`;
