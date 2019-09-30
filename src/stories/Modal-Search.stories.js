import React from 'react';
import  Search from '../modal/Search';
import { storiesOf } from "@storybook/react";


storiesOf("Map", module)
.add("Initial", () => <Search></Search>);
