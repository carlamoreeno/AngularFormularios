import { MaterializeAction } from "angular2-materialize";
import { Component, OnInit, EventEmitter } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service'; //Importar para service funcionar

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  pokemons;

  modalActions = new EventEmitter<string|MaterializeAction>();

  // Variáveis para os Validators
  numIdError: boolean = false;
  idadeError: boolean = false;
  pokemonError: boolean = false;

  constructor(public pokemonservice: PokemonService) { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);
  }

  abreModal(){
  	this.modalActions.emit({action:"modal",params:['open']});
  }
  fechaModal(){
    this.modalActions.emit({action:"modal",params:['close']});
  }

  // Validator para nenhum número de identificação ser menor ou maior que 8
  checkNumId(numId){
    if(numId.value.length!=8)
      this.numIdError = true;
    else
      this.numIdError = false;
  }

  // Validator para todo treinador ter mais de 10 anos
  checkIdade(idade){
    if((idade.value<10)
      this.idadeError = true;
    else
      this.idadeError = false;
  }

  // Validator para garantir que o pokemon inicial existe
  checkPokemon(pokemon){
    this.pokemonservice.checkPokemon(pokemon.value).subscribe(
      (res)=>{
        this.pokemons = res;
        this.pokemonError = false;
      },
      (error)=>{
        this.pokemonError = true;
      })
  }

}
