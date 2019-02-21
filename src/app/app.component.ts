import { Component } from '@angular/core';

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
	constructor() {
		setTimeout(() => {
			 this.isAuth = true;
			}, 400
	    );
	}

	onAllumer(){
		console.log('On allume tout !');
	}
}
