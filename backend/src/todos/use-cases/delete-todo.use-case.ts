import { Injectable, Logger } from "@nestjs/common";
import { DeleteTodoRepository } from "../repository";

@Injectable()
export class DeleteTodoUseCase {
    constructor(
      private readonly deleteTodoRepository: DeleteTodoRepository,
      private readonly logger: Logger,
    ) {}


    async execute( id: string) {
        try {
            this.logger.log('Deleting toDo...');
            const todo = await this.deleteTodoRepository.Delete(id);
            this.logger.log('ToDo deleted sucessfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to delete toDo');
           }
        }
    }
