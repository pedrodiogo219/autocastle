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
      dropOffBoard: 'snapback', // this is the default
      position: 'start',
      pieceTheme: 'assets/wikipedia/{piece}.png',
    }
  }

  ngOnInit(): void {
    this.board = Chessboard('myBoard', this.config);

    this.gameService.processGame().subscribe(async (response: gameResponse) => {
      this.board.position(response.position);
      this.states = response.states;
    });
  }

  async start(){
    for (let state of this.states){
      await new Promise(resolve => setTimeout(resolve, 500));
      this.board.position(state);
    }
  }
}
