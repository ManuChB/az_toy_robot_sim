import { COMMANDS, DIRECTIONS, DIRECTIONS_INDEX, TABLETOP_X_SIZE, TABLETOP_Y_SIZE } from "./constants";


export const executeCommand = (state, command) => {
  const [cmd, ...args] = command.trim().split(" ");
  
  if (cmd === COMMANDS.PLACE) {
    const [x, y, facing] = args[0].split(",");
    return placeRobot(state, parseInt(x), parseInt(y), facing);
  }
  
  if (!state.placed) return state;
  
  switch (cmd) {
    case COMMANDS.MOVE:
      return move(state);
    case COMMANDS.LEFT:
      return rotate(state, -1);
    case COMMANDS.RIGHT:
      return rotate(state, 1);
    case COMMANDS.REPORT:
      const report = `Robot position: ${state.x},${state.y},${state.facing}`;
      return {...state, report };
    default:
      return state;
  }
};

const placeRobot = (state, x, y, facing) => {
  if (isNaN(x) || isNaN(y) || !DIRECTIONS[DIRECTIONS_INDEX[facing]] || x < 0 || x >= TABLETOP_X_SIZE || y < 0 || y >= TABLETOP_Y_SIZE) {
    return state;
  }
  return { ...state, x, y, facing, placed: true, report: null };
};

const move = (state) => {
  let { x, y, facing } = state;
  switch (facing) {
    case DIRECTIONS[DIRECTIONS_INDEX.NORTH]: y++; break;
    case DIRECTIONS[DIRECTIONS_INDEX.EAST]: x++; break;
    case DIRECTIONS[DIRECTIONS_INDEX.SOUTH]: y--; break;
    case DIRECTIONS[DIRECTIONS_INDEX.WEST]: x--; break;
  }
  if (x >= 0 && x < TABLETOP_X_SIZE && y >= 0 && y < TABLETOP_Y_SIZE) {
    return { ...state, x, y, report: null };
  }
  return state;
};

const rotate = (state, direction) => {
  const index = DIRECTIONS.indexOf(state.facing);
  const newFacing = DIRECTIONS[(index + direction + 4) % 4];
  return { ...state, facing: newFacing, report: null };
};