
export const TABLETOP_X_SIZE = 5;
export const TABLETOP_Y_SIZE = 5;
   
export const DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];

export const DIRECTIONS_INDEX = {
    NORTH: 0,
    EAST: 1,
    SOUTH: 2,
    WEST: 3
};

export const COMMANDS = {
    PLACE: "PLACE",
    MOVE: "MOVE",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    REPORT: "REPORT"
  };

export const initialState = {
  x: null,
  y: null,
  facing: null,
  placed: false,
  report: null
};