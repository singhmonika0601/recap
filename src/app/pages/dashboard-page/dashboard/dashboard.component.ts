import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  ngOnInit(): void {
  }

  overlayClick() {
    // $('.filter').removeClass('show-filter')
    // $('.overlay-sty').removeClass('show-overlay')
  }
}
