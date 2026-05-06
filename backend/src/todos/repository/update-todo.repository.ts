import { Delete, Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { Prisma } from "@prisma/client";

 @Injectable()
 export class UpdateTodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async update(id: string, data: UpdateTodoDto) {
          return await this.prisma.todo.update({
            where: { id },
            data: data as Prisma.TodoUncheckedUpdateInput,
          });
    }
 }
