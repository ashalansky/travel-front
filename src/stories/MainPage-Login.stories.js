import React from 'react';
import { storiesOf } from "@storybook/react";

import Login from "../mainpage/Login"

export default {
  title: 'Login',
};

storiesOf("Login", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Login", () => (
    <Login></Login>
  ))