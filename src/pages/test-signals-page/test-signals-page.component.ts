import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges, computed, effect, signal } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'mp-test-signals-page',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './test-signals-page.component.html',
  styleUrl: './test-signals-page.component.scss'
})
export class TestSignalsPageComponent implements OnChanges {

  myCounter: number = 0; 

  /**
   * Declare and initialize a signal, it returns a function
   * so, to display it must be invoked "counter()"
   */
  counter = signal(0);

  /**
   * A computed signal will be evaluated only on dependencies changes
   * In this case, "this.counter" is the dependency
   */
  isLteZero = computed(() => {
    return this.counter() <= 0;
  });

  /*
   *  A function should not be used within the template
   *  Because it would be evaluated many time on every digest trigger
   */
  // isLteZero() {
  //   console.log("Is Lte Zero");
  //   return this.counter() <= 0;
  // }

  increment() {
    console.log("increment");
    /**
     * Use update to set a new value based on the old one 
     */
    this.counter.update(x => x + 1);
  }

  decrement() {
    console.log("decrement");

    this.counter.update(x => x - 1);
  }

  reset() {
    console.log("reset");
    /**
     * Use set to change the value, independently of its previous state 
     */
    this.counter.set(0);
  }

  constructor() {
    /**
     * An effect is an operation that runs whenever the value 
     * of one or more signals within it changes
     */

    /**
     * This one run like the "onInit"
     */
    effect(() => {
      console.log("I'm an effect function");
    });


    /**
     * This one has a dependency on 'counter.' 
     * It runs whenever the value of the counter changes.
     */
    effect(() => {
      console.log(
        "I run every time the counter signal value changes", 
        this.counter() 
      );
    })
  }

  ngOnInit() {
    console.log("On init");
  }


  /**
   * TODO: Check why it doesn't work
   */
  ngOnChanges(changes: SimpleChanges) {
    console.log("There was some changes", changes);
  }
}
