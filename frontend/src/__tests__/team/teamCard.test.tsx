import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import store from "../../store";
import Teams from "../../pages/Teams";

const initialStore = store({});

describe("Team View Component", () => {
  test("Renders the team list", () => {
    const { getByText } = render(
      <Provider store={initialStore}>
        <Teams />
      </Provider>
    );

    const teamNameInput = getByText("Teams List!");

    expect(teamNameInput).toBeInTheDocument();
  });
});
