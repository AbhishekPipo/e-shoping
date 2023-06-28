import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div [hidden]="displayNotification" class="alert alert-success">
  <span class="message">This website uses cookies for the better user experience</span>
  <div class="close">
    <button class="btn" (click)="closeNotification()">X</button>
  </div>
</div>

<style>
  .close {
    display: inline-block;
    vertical-align: middle;
  }
  
  .message {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px; /* Add spacing between the message and the button as needed */
  }
</style>
`,
  styles: ["div{margin:10px 0px;padding:10px 20px;background-color:pink;text-align:center;}"]
})
export class NotificationComponent {
  displayNotification:boolean = false;
  closeNotification(){
    this.displayNotification=true;
  }
}
