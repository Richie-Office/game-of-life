describe("GameOfLife", () => {
  describe("when the position of live cells is provided", () => {
    it("should be initialised with them", () => {
      const aliveCells = [
        { row: 4, column: 3 },
        { row: 2, column: 4 },
        { row: 4, column: 4 },
        { row: 1, column: 2 },
        { row: 3, column: 3 },
      ];

      const Grid = new Grid();

      Grid.initialiseAliveCells(aliveCells);

      const initialisedGrid = Grid.getGrid();

      const newGrid = [
        ["dead", "dead", "dead", "dead", "dead"],
        ["dead", "dead", "alive", "dead", "dead"],
        ["dead", "dead", "dead", "dead", "alive"],
        ["dead", "dead", "dead", "alive", "dead"],
        ["dead", "dead", "dead", "alive", "alive"],
      ];

      expect(initialisedGrid).toEqual(newGrid);
    });
  });
});
