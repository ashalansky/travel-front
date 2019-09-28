import React from 'react';
import HeroBanner from '../mainpage/HeroBar';
import { storiesOf } from "@storybook/react";

export default {
  title: 'HeroBanner',
};

export const text = () => <HeroBanner>Hello Button</HeroBanner>;

storiesOf("HeroBanner", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("button", () => <HeroBanner></HeroBanner>)
  .add("Hero Banner", () => <HeroBanner></HeroBanner>);