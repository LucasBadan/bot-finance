import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity("whatsapp_interactions")
export class WhatsApp {
  @PrimaryGeneratedColumn()
  id!: string;
  @Column()
  message!: string;
}
