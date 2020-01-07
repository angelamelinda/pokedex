import React from "react";
import { render } from "@testing-library/react";
import { COLOR } from "../../constants";
import Loading from ".";

test("should Loading have data-testid loading", () => {
  const { getByTestId } = render(<Loading />);

  expect(getByTestId("loading")).toBeInTheDocument();
});

test(`should Loading as expected with ${COLOR.WHITE}`, () => {
  const { container } = render(<Loading />);
  expect(container.innerHTML).toContain(COLOR.WHITE);
});

test(`should Loading as expected with ${COLOR.MINE_SHAFT}`, () => {
  const { container } = render(<Loading color={COLOR.MINE_SHAFT} />);
  expect(container.innerHTML).toContain(COLOR.MINE_SHAFT);
});
