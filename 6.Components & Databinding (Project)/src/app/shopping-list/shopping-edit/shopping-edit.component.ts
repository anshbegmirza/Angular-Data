<<<<<<< HEAD
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

=======
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent {
  @ViewChild("nameInput", { static: false }) nameInputRef!: ElementRef;
  @ViewChild("amountInput", { static: false }) amountInputRef!: ElementRef;

  // ingredientsAdded = new EventEmitter<{name:string, amount:number}>();
  @Output() ingredientsAdded = new EventEmitter<Ingredient>();

  onAddItem(event: Event) {
    event.preventDefault();
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientsAdded.emit(newIngredient);
  }
>>>>>>> Continuing Angular learning
}
