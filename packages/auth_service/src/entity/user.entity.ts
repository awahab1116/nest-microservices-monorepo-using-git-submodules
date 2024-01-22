import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';
import { CommonEntity } from './common.entity';

@Entity()
export class User extends CommonEntity {
  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ nullable: true })
  profileImage: string;
}
