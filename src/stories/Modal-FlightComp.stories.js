import React from 'react';
import  FlightComp   from '../modal/FlightComp';
import { storiesOf } from "@storybook/react";


storiesOf("FlightComp", module)
.add("Basic", () => (<FlightComp></FlightComp>));