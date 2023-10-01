import { Component, OnInit } from '@angular/core';
import { gameResponse, GameService } from '../services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board: any;
  config: any;
  states: string[] = [];

  constructor(
    private gameService: GameService
  ) {
    this.config = {
      draggable: true,
      // dropOffBoard: 'snapback', // this is the default
      dropOffBoard: 'trash',
      sparePieces: true,
      position: 'start',
      pieceTheme: 'assets/wikipedia/{piece}.png',
    }
  }

  async ngOnInit() {
    this.board = Chessboard('myBoard', this.config);
  }

  async calculate() {
    this.states = []; // reset states and disable the start button
    const completePosition = this.board.fen() + " w - - 0 1";
    const response: gameResponse =
      await this.gameService.processGame(completePosition);
    this.board.position(response.position);
    this.states = response.states;
  }

  async start() {
    for (let state of this.states){
      await new Promise(resolve => setTimeout(resolve, 500));
      this.board.position(state);
    }
  }
}
