import { Controller, Post, Body } from "@nestjs/common";
import { WhatsAppService } from "./whatsapp.service";
@Controller("whatsapp")
export class WhatsAppController {
  constructor(private readonly whatsappService: WhatsAppService) {}
  @Post("send")
  async send(@Body() body: { to: string; text: string }) {
    await this.whatsappService.sendMessage(body.to, body.text);
    return { status: "sent" };
  }
}
