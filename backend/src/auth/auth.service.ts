import { Injectable } from "@nestjs/common";
import { RegisterUseCase } from "./use-cases/register.use-case";
import { LoginUseCases } from "./use-cases/login.use-case";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly RegisterUseCase: RegisterUseCase,
        private readonly LoginUseCases: LoginUseCases,
    ) {}
    
    async register(data: RegisterDto) {
        return await this.RegisterUseCase.execute(data);
    }

    async Login(data: LoginDto) {
        return await this.LoginUseCases.execute(data);
    }
}  