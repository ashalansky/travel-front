import React from "react";
import { storiesOf } from "@storybook/react";
import DestinationCard from '../mainpage/DestinationCard';


storiesOf("DestinationCards", module)
  
  .add("Basic", () => (
    <DestinationCard></DestinationCard>
  ));
