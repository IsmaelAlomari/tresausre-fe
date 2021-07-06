import React, { useState } from "react";
import { AddProductDiv, Button, ThemeButton } from "../styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../store/actions/authActions";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
  };
  return (
    <form onSubmit={handleSubmit}>
      <AddProductDiv>
        <h2>Sign in </h2>

        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="enter username"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="enter password"
        />

        <Button type="submit"> Submit</Button>
      </AddProductDiv>
    </form>
  );
};

export default SignIn;
