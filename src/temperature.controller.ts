import { Controller, Get, Param } from '@nestjs/common';

@Controller('temperature')
export class TemperatureController {
  @Get(':valor/:escalaOrigem/:escalaDestino')
  convertTemperature(
    @Param('valor') valor: number,
    @Param('escalaOrigem') escalaOrigem: string,
    @Param('escalaDestino') escalaDestino: string
  ): string {
    let resultado: number;
    let mensagem: string;

    // Convertendo o valor para número
    const valorNumerico = parseFloat(valor.toString());

    // Verificando a conversão de Celsius para Fahrenheit e vice-versa
    if (escalaOrigem === 'C' && escalaDestino === 'F') {
      resultado = (valorNumerico * 9/5) + 32;
      mensagem = `A temperatura ${valorNumerico} C convertida para F é ${resultado.toFixed(2)} F.`;
    } else if (escalaOrigem === 'F' && escalaDestino === 'C') {
      resultado = (valorNumerico - 32) * 5/9;
      mensagem = `A temperatura ${valorNumerico} F convertida para C é ${resultado.toFixed(2)} C.`;
    } else {
      mensagem = 'Por favor, insira uma escala válida (C para Celsius e F para Fahrenheit).';
    }

    return mensagem;
  }
}
