import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserRepository, Finduserbyemailrepository } from '../repository';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';


@Injectable()
export class LoginUseCases {
    constructor(
        private readonly findUserByEmailRepository: Finduserbyemailrepository,
        private readonly jwtService: JwtService,
        private readonly logger: Logger,
    ) {}

    async execute(data: LoginDto) {
        this.logger.log('Realizando login...');

        const user = await this.findUserByEmailRepository.findbyemail(
            data.email,
        );

        if (!user) {
            throw new BadRequestException('Email ou senha inválidos');
        }

        const passwordMatch = await bcrypt.compare(
            data.password,
            user.passwordHash,
        );

        if (!passwordMatch) {
            throw new BadRequestException('Email ou senha inválidos');
        }

        const payload = {sub: user.id,email: user.email,};
        const accessToken = this.jwtService.sign(payload);

        this.logger.log('Login realizado com sucesso!');

        return {
            accessToken,
            user: {
                id: user.id,
                name:user.name,
                email:user.email,
            },
        };
    }
}