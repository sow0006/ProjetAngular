import { Component } from '@angular/core';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	isAuth = false;
  lastUpdate = new Promise((resolve, rejet) =>{
    const date = new Date();
    setTimeout(() =>{
      resolve(date);
    },2000
  );
  });
  appareils = [
  {
    name: 'Machine à laver',
    Status: 'éteint'
  },
  {
    name: 'Frigo',
    Status: 'allumé'
  },
  {
    name: 'Ordinateur',
    Status: 'éteint'
  }
];
	constructor(private appareilService: AppareilService) {
		setTimeout(() => {
			 this.isAuth = true;
			}, 400
	    );
	}

	onAllumer(){
		console.log('On allume tout !');
	}
}
