import React from "react";
import { storiesOf } from "@storybook/react";
import NavBar from '../mainpage/NavBar';


storiesOf("NavBar", module)
  
  .add("Basic", () => (
    <NavBar/>
  ));
