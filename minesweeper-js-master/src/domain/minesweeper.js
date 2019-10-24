import {field} from "./models/field.js";

export class Minesweeper {

    /**
     * @param {number} rows
     * @param {number} columns
     * @param {number | null} bombs
     */
    constructor(rows, columns, bombs = null) {
        this.rows = rows;
        this.columns = columns;
        this.twofield = [];
        this.bombposition = [];


        for (let i = 0; i < rows; i++) {
            let d = [];
            for (let g = 0; g < columns; g++) {
                d.push(field.hidden);
            }
            this.twofield.push(d);
        }


        this.isGameOver = false;

        if (bombs == null)
            this.bombs = this._calculateDefaultBombs();
        else
            this.bombs = bombs;

        


    }

        /**
         * TODO: IMPLEMENT THIS
         * Calculate how many bombs should be on the field and return it.
         * The calculation should Depend on the size of the field.
         * @private
         * @return {number} amount of bombs
         */
        _calculateDefaultBombs() {
            return 10;
        }

        /**
         * TODO: IMPLEMENT THIS
         * Returns the current state of the field.
         * Fields can be: hidden, visible, flagged or question marked.
         * @param {number} x
         * @param {number} y
         * @return {field}
         */
        getField(x, y) {
            return this.twofield[x][y];
            console.log(x, y);
        }

        /**
         * TODO: IMPLEMENT THIS
         * Returns how many bombs are around the field
         * @param {number} x
         * @param {number} y
         * @return {number}
         */
        getAmountOfSurroundingBombs(x, y)
        {
            return 0;
        }

        /**
         * TODO: IMPLEMENT THIS
         * Returns true there is a bomb on the position
         * @param {number} x
         * @param {number} y
         * @return {boolean}
         */
        isBombOnPosition(x, y)
        {
            return true;
        }

        /**
         * TODO: IMPLEMENT THIS
         * Reveals the field and all empty connected fields around it.
         * Or stops the game if clicked on a position, where a bomb is located.
         * @param {number} x
         * @param {number} y
         */
        reveal(x, y)
        {
            this.twofield[y][x] = field.visible;
        }

        /**
         * TODO: IMPLEMENT THIS
         * Toggles the field state, if it has not been revealed yet.
         * @param {number} x
         * @param {number} y
         */
        toggleFieldState(x, y)
        {
            if (this.twofield[y][x] == field.hidden) {
                this.twofield[y][x] = field.flag;
            } else if (this.twofield[y][x] == field.flag) {
                this.twofield[y][x] = field.question_mark;
            } else if (this.twofield[y][x] == field.question_mark)
                this.twofield[y][x] = field.hidden;
        }

        /**
         * TODO: IMPLEMENT THIS
         * Returns if the user already won
         * @returns {boolean}
         */
        didWin()
        {
            return false;
        }

        /**
         * TODO: IMPLEMENT THIS
         * Returns if the user clicked a bomb and therefore lost.
         * @returns {boolean}
         */
        didLoose()
        {
            return false;
        }

        /**
         * Returns the remaining amount bombs, user has to select
         * @return {number}
         */
        getRemainingBombCount()
        {

            return -1;

        }
    }

