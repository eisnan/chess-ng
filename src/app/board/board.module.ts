import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BoardRoutingModule } from './board-routing.module';
import {BoardService} from '../core/services/board.service';

@NgModule({
  imports: [SharedModule, BoardRoutingModule ],
  declarations: [BoardRoutingModule.components]
})
export class BoardModule { }
