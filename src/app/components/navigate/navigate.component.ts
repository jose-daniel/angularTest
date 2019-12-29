import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl : './navigate.component.html',
  styleUrls: []
})
class NavigateComponent {
  @Input()
  items: object[];
}

export default NavigateComponent;
