// src/db/models/User.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Portfolio } from "./Portfolio"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @OneToMany(() => Portfolio, portfolio => portfolio.user)
  portfolios: Portfolio[]
}