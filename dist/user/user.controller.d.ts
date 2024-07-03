import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly usuarioService;
    constructor(usuarioService: UserService);
    create(createUsuarioDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
}
