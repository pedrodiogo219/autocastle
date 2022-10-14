import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board: any;
  config: any;

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.config = {
      draggable: true,
      dropOffBoard: 'snapback', // this is the default
      position: 'start',
      pieceTheme: 'assets/wikipedia/{piece}.png'
    }
    this.board = Chessboard('myBoard', this.config);
    this.gameService.processGame();
  }

}
