import { Component, OnInit } from '@angular/core';
import {Pokemon} from  './../../modelos/pokemon';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private servicio:HomeService) { }

  direccion: string = 'https://pokeapi.co/api/v2/pokemon/';
  importshowdown:string="";
  listaPokemon: Pokemon[]=[];
  index=0;

  ngOnInit(): void {
    this.obtener5Pokemon();
  }

  async obtenerPokemon(id:number):Promise<void>{
    const respuesta: Response= await fetch(`${this.direccion+id}`,{
      'method':'GET'
    });
    const dato:Pokemon=await respuesta.json();
    this.listaPokemon[this.index]= dato;
    this.index++;
    if(dato.types[1]!=undefined)
    {
      this.importshowdown+="penis";
    }
    this.importshowdown+=this.listaPokemon[this.index-1].name+"\n";
  }

   obtenerPokemonAleatorio()
  {
    let c:number=Math.floor((Math.random() * 800) + 1);
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
