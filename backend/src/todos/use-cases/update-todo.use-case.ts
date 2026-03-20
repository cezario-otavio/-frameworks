import { Injectable, Logger } from "@nestjs/common";
import { UpdateTodoRepository} from "../repository";
import { UpdateTodoDto } from "../dto/update-todo.dto";


@Injectable()
export class UpdateTodosUseCase {
    constructor(
      private readonly UpdateTodoRepository: UpdateTodoRepository,
      private readonly logger: Logger,
    ) {}


    async execute( data: UpdateTodoDto) {
        try {
            this.logger.log('Updating toDo...');
            const todo = await this.UpdateTodoRepository.update(data);
            this.logger.log('ToDo update sucessfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to update toDo');
           }
        }
    }