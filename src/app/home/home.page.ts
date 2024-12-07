import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public title: string = 'Portfolio';
  public profileA: string = 'Chlyde Adrian E. Benavidez';
  public profileB: string = 'Johnray P. Cabatic';
  public mukha: string = 'mukha';
  public paa: string = '© Late na Portfolio nina Onak at Eydi';

  isProfileA: boolean = true;

 
  profilePicture: string = '../../assets/eydi.jpg'; 

  constructor() {}

  
  toggleProfile(switchProfile: any) {
    this.isProfileA = switchProfile.detail.checked;
    this.profilePicture = this.isProfileA
      ? '../../assets/eydi.jpg' 
      : '../../assets/kano.jpg'; 
  }
}
