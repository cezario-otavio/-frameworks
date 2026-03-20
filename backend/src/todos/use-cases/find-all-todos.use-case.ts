import { Injectable, Logger } from "@nestjs/common";
import { findalltodosrepository} from "../repository";

@Injectable()
export class Findalltodos {
    constructor(
      private readonly FindallTodoRepository: findalltodosrepository,
      private readonly logger: Logger,
    ) {}


    async execute() {
        try {
            this.logger.log('find-all toDo...');
            const todo = await this.FindallTodoRepository.findall();
            this.logger.log('ToDo find-all sucessfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to find-all toDo');
           }
        }
    }