import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  public productForm:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      price:new FormControl(),
      expiry:new FormControl(),
      address:new FormGroup(
        {
          HNO:new FormControl(),
          city:new FormControl(),
          pin:new FormControl()


        }
      ),
      cards:new FormArray([]),
      type:new FormControl(),
      upiId:new FormControl(),
      cardNumber:new FormControl()
    }
  )
  get cardsFormArray(){
    return this.productForm.get('cards')as FormArray;
  }
  add(){
    this.cardsFormArray.push(
      new FormGroup(
        {
          name:new FormControl(),
          price:new FormControl(),
          expiry:new FormControl()
        }
      )
    )
  }
  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.productForm);

  }

}
