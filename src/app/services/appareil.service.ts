export class AppareilService {
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

      switchOnAll(){
        for(let appareil of this.appareils){
            appareil.Status = 'allumé';
        }
      }

      switchOffAll(){
          for(let appareil of this.appareils){
              appareil.Status = 'éteint';
          }
      }
}