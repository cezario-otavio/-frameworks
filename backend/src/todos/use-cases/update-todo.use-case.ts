import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { UpdateTodoRepository, findtodobyidrepository} from "../repository";
import { UpdateTodoDto } from "../dto/update-todo.dto";


@Injectable()
export class UpdateTodosUseCase {
    constructor(
      private readonly UpdateTodoRepository: UpdateTodoRepository,
      private readonly findtodobyidrepository: findtodobyidrepository,
      private readonly logger: Logger,
    ) {}


    async execute( data, id: string) {
        try {
            this.logger.log('Updating toDo...');
            const todo = await this.findtodobyidrepository.findbyid(id);
            if (!todo) {
                            throw new NotFoundException('ToDo not found')
                        }
            
            await this.UpdateTodoRepository.update(data);
            this.logger.log('ToDo update sucessfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to update toDo');
           }
        }
    }