import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numero1 = "";
  numero2 = "";
  voto = "";
  imagem = "";



  constructor() {}

    Votar(botao:string){
        if(this.numero1 === ""){
            this.numero1 = botao;
        } else if(this.numero1 !== "" && this.numero2 === ""){
            this.numero2 = botao;

            if(this.numero1 === "1" && this.numero2 === "0"){
                this.voto = "Neymar Jr"
                this.imagem = "https://pbs.twimg.com/media/EueScQ1WYAUfP8Q.jpg"
            } else if(this.numero1 === "1" && this.numero2 === "8"){
                this.voto = "Vini Jr"
                this.imagem ="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/10/Vinicius-Jr1.jpg"
            } else{
                this.voto = "NULO"
                this.imagem = ""
            }
        }
    }

    confirma(){
        this.voto = "VOTAÇÃO ENCERRADA";
        this.imagem = ""
    }

    branco(){
        this.voto = "EM BRANCO"
        this.imagem = ""
    }

    corrige(){
        this.voto = ""
        this.numero1 = ""
        this.numero2 = ""
        this.imagem = ""
    }



}