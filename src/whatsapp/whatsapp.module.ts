import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WhatsAppGateway } from "./whatsapp.gateway";
import { WhatsAppService } from "./whatsapp.service";
import { WhatsApp } from "./whatsapp.entity";
@Module({
  imports: [TypeOrmModule.forFeature([WhatsApp])],
  providers: [WhatsAppGateway, WhatsAppService],
  exports: [WhatsAppGateway, WhatsAppService],
})
export class WhatsAppModule {}
