import { executeCommand } from "../utils/simulatorLogic";

test("PLACE commands work correctly", () => {
  let state = { x: null, y: null, facing: null, placed: false };
  state = executeCommand(state, "PLACE 0,0,NORTH");
  expect(state).toEqual({ x: 0, y: 0, facing: "NORTH", placed: true, report: null});
});


test("PLACE and REPORT commands work correctly", () => {
  let state = { x: null, y: null, facing: null, placed: false };
  state = executeCommand(state, "PLACE 0,0,NORTH");
  expect(state).toEqual({ x: 0, y: 0, facing: "NORTH", placed: true, report: null});

  state = executeCommand(state, "REPORT");
  expect(state.report).toEqual("Robot position: 0,0,NORTH");
});

test("MOVE command works correctly", () => {
  let state = { x: 0, y: 0, facing: "NORTH", placed: true, report: null };
  state = executeCommand(state, "MOVE");
  expect(state).toEqual({ x: 0, y: 1, facing: "NORTH", placed: true, report: null });
});

test("MOVE command doesn't move the robot off the table", () => {
  let state = { x: 0, y: 0, facing: "SOUTH", placed: true, report: null };
  state = executeCommand(state, "MOVE");
  expect(state).toEqual({ x: 0, y: 0, facing: "SOUTH", placed: true, report: null });
});

test("LEFT and RIGHT commands work correctly", () => {
  let state = { x: 0, y: 0, facing: "NORTH", placed: true, report: null };
  state = executeCommand(state, "LEFT");
  expect(state).toEqual({ x: 0, y: 0, facing: "WEST", placed: true, report: null });

  state = executeCommand(state, "RIGHT");
  state = executeCommand(state, "RIGHT");
  expect(state).toEqual({ x: 0, y: 0, facing: "EAST", placed: true, report: null });
});

test("All commands work correctly together", () => {
  let state = { x: null, y: null, facing: null, placed: false };
  state = executeCommand(state, "PLACE 1,2,EAST");
  state = executeCommand(state, "MOVE");
  state = executeCommand(state, "MOVE");
  state = executeCommand(state, "LEFT");
  state = executeCommand(state, "MOVE");
  state = executeCommand(state, "REPORT");

  expect(state).toEqual({ x: 3, y: 3, facing: "NORTH", placed: true, report: "Robot position: 3,3,NORTH" });
});

test("Wrong PLACE command correctly show error message", () => {
  let state = { x: null, y: null, facing: null, placed: false };
  state = executeCommand(state, "PLACE 1,EAST");

  expect(state.report).toEqual("ERROR: PLACE command must be in the format 'PLACE 0,0,NORTH'." );
});


test("Wrong command correctly show error message", () => {
  let state = { x: null, y: null, facing: null, placed: false };
  state = executeCommand(state, "PLACE 1,1,EAST");
  state = executeCommand(state, "MVE");

  expect(state.report).toEqual("ERROR: Invalid command." );
});