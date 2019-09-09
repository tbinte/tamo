import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as pokemon from 'pokemon';
import { Pokemon } from './models/pokemon.model';
import { Types } from './models/types.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pokemonName: string;
  allPokemon = pokemon.all('de');
  searchedPokemon: string;
  weaknesses = [];
  url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient) { }
  get_types() {
    console.log(this.pokemonName);
    this.searchedPokemon = pokemon.getName(pokemon.getId(this.pokemonName, 'de'));
    this.httpClient
      .get(this.url + this.searchedPokemon.toLowerCase())
      .subscribe((res: Pokemon) => {
        res.types.forEach(element => {
          this.httpClient.get(element.type.url).subscribe((res: Types) => {
            res.damage_relations.double_damage_from.forEach(element => {
              this.weaknesses.push(element.name);
              console.log(this.weaknesses);
            });
          });
        });
      });
  }
}
