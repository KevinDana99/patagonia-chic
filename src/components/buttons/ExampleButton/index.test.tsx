import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import ExampleButton from ".";

describe("Running Test for Marbella Button", () => {

  test("Check Button Disabled", () => {
    render(<ExampleButton text="Button marbella" disabled/>)
    expect(screen.getByRole('button',{name:"Button marbella"})).toBeDisabled();
  });

});