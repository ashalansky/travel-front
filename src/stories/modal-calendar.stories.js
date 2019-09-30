import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from "@storybook/react";

import Calendar from "../modal/Calendar";

export default {
  title: 'Calendar',
};

storiesOf("Calendar", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Default", () => (
    <Calendar></Calendar>
  ))