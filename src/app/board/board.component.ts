import { Component, OnInit } from '@angular/core';
import { BoardService } from '../core/services/board.service';

@Component({
  selector: 'cm-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.getBoard();
  }

}
