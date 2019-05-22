import {Component, OnInit} from '@angular/core';
import {BoardService} from '../core/services/board.service';
import {ChessBoardDto, SquareDto} from './model';

@Component({
  selector: 'cm-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private chessBoard: ChessBoardDto;
  private model: SquareDto[][];
  private clicked: boolean;

  constructor(private boardService: BoardService) {
  }

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.boardService.getBoard().subscribe(data => {
      console.log(data);
      this.chessBoard = data;
      this.model = this.chessBoard.model;
    });
  }

  drawChessBoard() {
    return false;
  }

  isWhiteColor(file, rank) {
    console.log(file, rank);
  }

  toggleSelection(wrap: HTMLElement) {
    const classList = wrap.classList;
    const selected = 'selected';
    if (wrap.classList.contains(selected)) {
      wrap.classList.remove(selected);
    } else {
      wrap.classList.add(selected);
    }

  }


}
