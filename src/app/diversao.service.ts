import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';


@Injectable()
export class DiversaoService {
  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    // efetuar uma requisicao http (verbo http + uri)
    return this.http.get('http://localhost:3000/ofertas?destaque=true')
        .toPromise()
    // retornar uma promesa contendo um array de ofertas
        .then((resposta: any) => resposta)
  }

  public getOfertasDivertidas(categoria: string): Promise<Oferta[]> {
    return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
          .toPromise()
          .then((retorno: any) => retorno)
  }
}
