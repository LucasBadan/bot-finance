import { Injectable } from "@nestjs/common";
import fetch from "node-fetch";
import "dotenv/config";
@Injectable()
export class AiService {
  private readonly endpoint: string = process.env.AI_ENDPOINT!;
  private readonly apiKey: string = process.env.AI_API_KEY!;
  async ask(prompt: string): Promise<string> {
    const body = {
      model: "gpt-4o", // ajuste para o modelo que você usa
      prompt,
      max_tokens: 150,
    };
    const res = await fetch(this.endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    // O formato da resposta pode mudar; ajuste conforme necessário
    return (data as any).choices?.[0]?.text?.trim() ?? "Resposta vazia";
  }
}
