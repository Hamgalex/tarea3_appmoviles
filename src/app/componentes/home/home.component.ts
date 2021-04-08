import { Component, OnInit } from '@angular/core';
import {Pokemon} from  './../../modelos/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  direccion: string = 'https://pokeapi.co/api/v2/pokemon/';
  listaPokemon: Pokemon[]=[];

  ngOnInit(): void {
  }

  async obtenerPokemon(id:number):Promise<void>{
    const respuesta: Response= await fetch(`${this.direccion+id}`,{
      'method':'GET'
    });
    this.listaPokemon= await respuesta.json();
  }

  obtenerPokemonAleatorio()
  {
    let c=Math.floor((Math.random() * 800) + 1);
    this.obtenerPokemon(c);
  }

  obtener5Pokemon()
  {
    let i:number=0;
    for(i=0;i<5;i++)
    {
      this.obtenerPokemonAleatorio();
    }
  }
}
