import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DeleteTodoRepository, findtodobyidrepository } from "../repository";

@Injectable()
export class DeleteTodoUseCase {
    constructor(
      private readonly deleteTodoRepository: DeleteTodoRepository,
      private readonly findtodobyidrepository: findtodobyidrepository,
      private readonly logger: Logger,
    ) {}


    async execute( id: string) {
        try {
            this.logger.log('Deleting toDo...');
            const todo = await this.findtodobyidrepository.findbyid(id);
            if (!todo) {
                throw new NotFoundException('ToDo not found')
            }

            await this.deleteTodoRepository.delete(id);
            this.logger.log('ToDo deleted sucessfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to delete toDo');
           }
        }
    }
