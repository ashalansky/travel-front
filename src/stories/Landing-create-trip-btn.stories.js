import React from "react";
import { storiesOf } from "@storybook/react";
import AddButton from '../modal/AddButton';


storiesOf("AddButton", module)
  
  .add("Basic", () => (
    <AddButton></AddButton>
  ));