import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  archive=false;
  routerLinkMenu(){
    let dta = sessionStorage.getItem('archivedData');
    if(dta === 'true'){
      this.archive=true;
    } else {
      this.archive=false;
    }
  }

  ngAfterContentChecked() {
    // this.cdref.detectChanges();
  }
}
