import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Fruit } from './fruits.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'animation';
  clickedState: Boolean = false;
  fruitClicked!: Fruit;
  // 'pomme', 'fraise', 'poire','peche'
  fruit = [
    {"nom":"apple", "id":1, "color":"#A67C00" ,"prix":4513},
    {"nom":"strawberry", "id":2, "color":"#E63946" ,"prix":3513},
    {"nom":"pear", "id":3, "color":"#6A7B3B" ,"prix":2513},
    {"nom":"peche", "id":4, "color":"#CC6B49" ,"prix":5513}
  ]
  clickedProd(nom:Fruit){
      this.clickedState = !this.clickedState;
      this.fruitClicked = nom;
  }
  clickedOverProd(fruit: Fruit){
      this.fruitClicked = fruit;
  }
}
