import React from 'react';
import { storiesOf } from "@storybook/react";

import SignUp from "../mainpage/SignUp"

export default {
  title: 'SignUp',
};

storiesOf("SignUp", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("SignUp", () => (
    <SignUp></SignUp>
  ))