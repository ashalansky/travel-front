import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from "@storybook/react";

import AppDesc from "../mainpage/AppDescription"

export default {
  title: 'App Description',
};

storiesOf("App Description", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Description", () => (
    <AppDesc></AppDesc>
  ))