import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up-message',
  templateUrl: './pop-up-message.component.html',
  styleUrls: ['./pop-up-message.component.css']
})
export class PopUpMessageComponent {

  bgColor = '';

  @Input() 
  set error(error: boolean) {
    if(error){
      this.bgColor='red'
    }else{
      this.bgColor='green'
    }
  }
}
