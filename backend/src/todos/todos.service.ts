import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreatedTodoUseCase } from './use-cases';
import { DeleteTodoUseCase} from './use-cases'
import { UpdateTodosUseCase} from './use-cases'
import { Findalltodos} from './use-cases'
import { findtodobyid} from './use-cases'

@Injectable()
export class TodosService {

  constructor(
    private readonly CreateTodoUseCase: CreatedTodoUseCase,
    private readonly DeleteTodoUseCase: DeleteTodoUseCase,
    private readonly UpdateTodoUseCase: UpdateTodosUseCase,
    private readonly findTodoByIdUseCase: findtodobyid,
    private readonly FindAllTodosUseCase: Findalltodos,
  ) {}
   

  create(createTodoDto: CreateTodoDto) {
    return this.CreateTodoUseCase.execute(CreateTodoDto);
  }

  update( id: string, updateTodoDto: UpdateTodoDto) {
    return this.UpdateTodoUseCase.execute(id, UpdateTodoDto);
  }

  findById(id: string) {
    return this.findTodoByIdUseCase.execute(id);
  }

  findAll() {
     return this.FindAllTodosUseCase.execute();
  }

  delete(id: string) {
      return this.DeleteTodoUseCase.execute(id);
  }
}
