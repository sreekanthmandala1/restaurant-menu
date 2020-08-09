import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurant-menu';
  serverElements=[{type:'server', name:'testserver', content:'just a test'}];
  loadedFeature = 'recipe';
  onNavigate(feature:string){
    this.loadedFeature= feature;
  }
}
