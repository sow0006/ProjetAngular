import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  appareils: any[];

  lastUpdate = new Promise((resolve, rejet) =>{
    const date = new Date();
    setTimeout(() =>{
      resolve(date);
    },2000
  );
  });

	constructor(private appareilService: AppareilService) {
		setTimeout(() => {
			 this.isAuth = true;
			}, 400
	    );
  }
  
  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }

	onAllumer(){
		this.appareilService.switchOnAll();
  }
  
  onEteindre(){
    if(confirm('Etes vous sûr de vouloir éteindre tous vous appareils ?')){
      this.appareilService.switchOffAll();
    }else {
      return null;
    }
  }
}
