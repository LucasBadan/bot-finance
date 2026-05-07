import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Twilio } from "twilio";
import { WhatsApp } from "./whatsapp.entity";
@Injectable()
export class WhatsAppService {
  private client: Twilio;
  constructor(
    @InjectRepository(WhatsApp)
    private repo: Repository<WhatsApp>,
  ) {
    this.client = new Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );
  }
  async sendMessage(to: string, body: string) {
    await this.client.messages.create({
      body,
      from: process.env.TWILIO_NUMBER,
      to,
    });
  }
  async saveInteraction(id: string, message: string) {
    const interaction = this.repo.create({ id, message });
    return this.repo.save(interaction);
  }
}
