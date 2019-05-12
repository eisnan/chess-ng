import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {ChessBoardDto, FileDto, PositionDto, RankDto} from '../../board/model';


@Injectable()
export class BoardService {


  constructor(private http: HttpClient) {
  }

  getBoard(): Observable<ChessBoardDto> {
    return this.http.get<ChessBoardDto>('/api/board');
  }

  // static getAllPositions(): PositionDto[][] {
  //   return [[new PositionDto(FileDto.a, RankDto._1), new PositionDto(FileDto.a, RankDto._2)], [new PositionDto(FileDto.a, RankDto._3), new PositionDto(FileDto.a, RankDto._4)]];
  // }

  static getFiles(): Array<string> {
    const enumValues: Array<string> = [];

    for (const value in FileDto) {
      if (typeof FileDto[value] === 'number') {
        enumValues.push(value);
      }
    }
    return enumValues;
  }

  static getRanks(): Array<string> {
    const enumValues: Array<string> = [];

    for (const value in RankDto) {
      if (typeof RankDto[value] === 'number') {
        enumValues.push(value);
      }
    }
    return enumValues;
  }


}
