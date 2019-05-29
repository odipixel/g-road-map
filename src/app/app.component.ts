import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title: string = 'Google direction map';
public lat: Number = 12.9698
public lng: Number = 77.7499
 
public origin: {}
public destination: {}
ngOnInit() {
  this.getDirection()
}
getDirection() {
  this.origin = { lat: 12.9698, lng: 77.7499 }
  this.destination = { lat: 12.9592, lng: 77.6974 }
 
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
