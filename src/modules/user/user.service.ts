import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { Repository } from "typeorm/repository/Repository";
import { DatabaseService } from "../database/database.service";
import { User } from "./User.entity";
import * as bcrypt from 'bcrypt';
import { AuthService } from "../auth/auth.service";

const saltOrRounds = 10;

@Injectable()
export class UserService extends DatabaseService<User>{
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
    private authService: AuthService
    // @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {
    super(userRepository)
  }
  async register(userDto: User): Promise<{}> {

    const password =userDto.password;
    const hash = await bcrypt.hash(password, saltOrRounds);
    userDto.password = hash;
    // console.log("hash: ....", userDto)
    const createUser = await this.userRepository.save(userDto);
    const payload = { sub: createUser.id, username: createUser.userName };
    // const payload = { sub: password};
    return {
      access_token: await this.authService.createToken(payload),
    };
  }

  
  async signIn(userName: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({where: {userName: userName}})
    if (!user) {
      throw new UnauthorizedException();

    }else {
      const isMatch = await bcrypt.compare(password, user.password);
      console.log("isMatch:....", isMatch);
      if(!isMatch) {
        throw new UnauthorizedException();
      }
    }
    // TODO: Generate a JWT and return it here
    // instead of the user object
    const token = await this.authService.createToken(user)
    return {
      token: token
    };
  }
}