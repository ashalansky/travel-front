import React from "react";

import { render, cleanup } from "@testing-library/react";

import App from "../App";

afterEach(cleanup)

describe("Application", () => {
  it("renders without crashing", async () => {
    render(<App/>);
  })
})