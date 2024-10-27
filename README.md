# AZ Toy Robot Simulator

## Running the project

Install the dependencies...

```bash
npm install
```

...then start the dev server:

```bash
npm run dev
```

Wait for the project to finish compiling, then navigate to [localhost:5173](http://localhost:5173).


## Running the test

Install the dependencies...

```bash
npm install
```

...then start the dev server:

```bash
npm test
```

## Test exampels

### Example 1
```bash
PLACE 0,0,NORTH
MOVE 
REPORT
```
Expected robot position: 0,1,NORTH  

### Example 2
```bash
PLACE 0,0,NORTH
MOVE 
MOVE
RIGHT
MOVE
REPORT
```
Expected output: 1,2,EAST

### Example 3
```bash
PLACE 0,0,SOUTH
MOVE 
MOVE
REPORT
```
Expected output: 0,0,SOUTH

### Example 4
```bash
PLACE 0,0,NORTH
MOVE 
MOVE
RIGHT
RIGHT
MOVE
MOVE
REPORT
```
Expected output: 0,0,SOUTH
