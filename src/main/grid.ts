export class Grid {
  private cells: string[][];

  constructor(cells: { row: number; column: number }[]) {
    this.cells = [
      ["dead", "dead", "dead", "dead", "dead"],
      ["dead", "dead", "dead", "dead", "dead"],
      ["dead", "dead", "dead", "dead", "dead"],
      ["dead", "dead", "dead", "dead", "dead"],
      ["dead", "dead", "dead", "dead", "dead"],
    ];
  }

  getGrid = () => {
    return this.cells;
  };
}
