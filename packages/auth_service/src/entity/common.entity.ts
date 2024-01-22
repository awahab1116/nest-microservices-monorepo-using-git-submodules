import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class CommonEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  updatedAt: Date;

  @Column()
  createdAt: Date;
}
