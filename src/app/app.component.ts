import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title: string = 'Google direction api';
 public lat: Number = 24.799448
public lng: Number = 120.979021
 
public origin: {}
public destination: {}
ngOnInit() {
  this.getDirection()
}
getDirection() {
  this.origin = { lat: 24.799448, lng: 120.979021 }
  this.destination = { lat: 24.799524, lng: 120.975017 }
 
  // this.origin = 'Taipei Main Station'
  // this.destination = 'Taiwan Presidential Office'
}

  public onChangeStart(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    this.origin = newVal
  
}

 public onChangeEnd(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    
  this.destination = newVal
  }
 
}
