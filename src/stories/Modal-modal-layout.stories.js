import React from "react";
import { storiesOf } from "@storybook/react";
import ModalLayout from '../modal/ModalLayout';


storiesOf("ModalLayout", module)
  
  .add("Basic", () => (
    <ModalLayout></ModalLayout>
  ));
