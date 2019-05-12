export interface ChessBoardDto {
  boardId: string;
  model: SquareDto[][];

}

export interface SquareDto {
  col: ColorDto;
  pos: PositionDto;
  pc: PieceDto;
}

export class PositionDto {
  file: FileDto;
  rank: RankDto;
}

export interface PieceDto {
  pieceColor: ColorDto;
  pieceType: PieceTypeDto;
}

export enum FileDto {
  a, b, c, d, e, f, g, h
}

export enum RankDto {
  _1, _2, _3, _4, _5, _6, _7, _8
}

export enum ColorDto {
  W, B
}


export enum PieceTypeDto {
  P, K, Q, B, N, R
}
