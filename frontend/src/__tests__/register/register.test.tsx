import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import "@testing-library/jest-dom";

import NewTeamForm from "../../components/register/NewTeamForm";
import store from "../../store";

const initialStore = store({});

describe("Register Component", () => {
  test("Should render a register component", () => {
    const { getByPlaceholderText } = render(
      <Provider store={initialStore}>
        <NewTeamForm />
      </Provider>
    );

    const teamNameInput = getByPlaceholderText("Team Name");
    const firstNameInput = getByPlaceholderText("First Name");
    const lastNameInput = getByPlaceholderText("Last Name");
    const submitText = screen.getByRole("button", { name: "Submit" });

    expect(teamNameInput).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(submitText).toBeInTheDocument();
  });
});
