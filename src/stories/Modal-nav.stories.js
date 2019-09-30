import React from "react";
import { storiesOf } from "@storybook/react";
import Nav from '../modal/Nav';


storiesOf("Modal Nav", module)
  
  .add("Basic", () => (
    <Nav></Nav>
  ));