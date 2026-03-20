import { Injectable, Logger } from "@nestjs/common";
import { findtodobyidrepository} from "../repository";

@Injectable()
export class findtodobyid {
    constructor(
      private readonly findtodobyidrepository: findtodobyidrepository,
      private readonly logger: Logger,
    ) {}


    async execute(id: string) {
        try {
            this.logger.log('find-todo-by-id toDo...');
            const todo = await this.findtodobyidrepository.findbyid(id);
            this.logger.log('ToDo find-todo-by-id sucessfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to find-todo-by-id toDo');
           }
        }
    }