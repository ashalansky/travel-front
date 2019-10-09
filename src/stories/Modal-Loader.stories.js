import React from 'react';
import  Loader   from '../modal/Loader';
import { storiesOf } from "@storybook/react";


storiesOf("Loader", module)
.add("Basic", () => (<Loader></Loader>));