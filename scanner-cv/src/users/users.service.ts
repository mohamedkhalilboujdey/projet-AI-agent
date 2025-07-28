import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<User>,
  private configService: ConfigService) {}

  async createAdminIfExists(): Promise<void> {
    const adminEmail = this.configService.get<string>('ADMIN_EMAIL');
    const adminPassword = this.configService.get<string>('ADMIN_PASSWORD');

  
    const existingAdmin = await this.userModel.findOne({ email: adminEmail });


    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      const newAdmin = {
        email: 'admin@gmail.com',
        password: hashedPassword,
        role: 'admin',
        firstName: 'Admin',
        lastName: 'User',
      };

      await this.userModel.create(newAdmin);
      console.log('✅ Compte admin créé automatiquement');
    } else {
      console.log('ℹ️ Compte admin déjà existant');
    }
  
  }

  async create(createUserDto: CreateUserDto) {

    const existingUser = await this.userModel.findOne({email:createUserDto.email})

    if (existingUser) {

      throw new HttpException("user already exists", HttpStatus.CONFLICT)
    }
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({...createUserDto, password:hashedPassword, role:'user'});
    return createdUser.save();
    
  }

  findAll() {
    return this.userModel.find().exec();  }

  async findOne(id: string) {
    return this.userModel.findById(id).exec();
  }
  update(id: string, updateUserDto: UpdateUserDto) {
    
    return this.userModel.findByIdAndUpdate(id, updateUserDto,{new: true}).exec();
  }

  remove(id: String) {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }
}
