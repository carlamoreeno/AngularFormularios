import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service'; //Importar para service funcionar


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  pokemons = []; //array que irá guardar todos os dados do Pokemon do id em questão
  id: number; //Variável que irá guardar o id do Pokemon que estamos buscando

  constructor(public pkmnService: PokemonService) {
    this.id = 0;
  }

  ngOnInit() {
  }

  getPokemon(){
    console.log("Entrei na função");
    this.id++;
    this.pkmnService.getPokemon(this.id)
    .subscribe(
      (res)=>{
      this.pokemons.push(res);
      console.log(res);
      }
    )
  }

}
