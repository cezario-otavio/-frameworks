import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.database";
import { Prisma } from "@prisma/client";

 @Injectable()
 export class CreateTodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateTodoDto) {
        return await this.prisma.todo.create({
            data: data as Prisma.TodoUncheckedCreateInput,
        });
    }
 }
