import { Delete, Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.database";

 @Injectable()
 export class UpdateTodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async update(data: UpdateTodoRepository ,id :string) {
          return await this.prisma.todo.update({ where: {id}, data });
    }
 }
