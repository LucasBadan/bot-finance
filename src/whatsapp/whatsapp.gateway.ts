import {
  Injectable,
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { WhatsAppService } from "./whatsapp.service";
import { AiService } from "../ai/ai.service";
@Injectable()
export class WhatsAppGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  constructor(
    private readonly whatsappService: WhatsAppService,
    private readonly aiService: AiService,
  ) {}
  handleConnection(client: Socket) {
    console.log(`🔗 Cliente conectado: ${client.id}`);
  }
  handleDisconnect(client: Socket) {
    console.log(`❌ Cliente desconectado: ${client.id}`);
  }
  @SubscribeMessage("message")
  async handleMessage(client: Socket, payload: any): Promise<void> {
    await this.whatsappService.saveInteraction(payload.id, payload.text);
    const reply = await this.aiService.ask(
      `Responda ao cliente: ${payload.text}`,
    );
    this.server.emit("reply", { id: payload.id, reply });
    await this.whatsappService.sendMessage(payload.id, reply);
  }
}
