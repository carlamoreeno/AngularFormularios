import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,map,tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class PokemonService {

  pokeApiUrl = 'https://pokeapi.co/api/v2/';

  constructor(public http: HttpClient) {
    console.log('Hello Pokemon Service');
  }

  getPokemon(id):Observable<any>{
    return this.http.get(this.pokeApiUrl+'pokemon/'+id).pipe(map(res=> res));
  }

  checkPokemon(pokemon):Observable<any>{
    return this.http.get(this.pokeApiUrl + 'pokemon/' + pokemon).pipe(map(res =>res));
  }
}
