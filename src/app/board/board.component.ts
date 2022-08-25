import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board: any;
  config: any;

  constructor() { }

  ngOnInit(): void {
    this.config = {
      draggable: true,
      dropOffBoard: 'snapback', // this is the default
      position: 'start',
      pieceTheme: 'assets/wikipedia/{piece}.png'
    }
    this.board = Chessboard('myBoard', this.config);
  }

}
