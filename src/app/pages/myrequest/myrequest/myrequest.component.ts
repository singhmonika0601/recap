import { Component, OnInit, TemplateRef } from '@angular/core';
import { DashboardService } from '../../servcies/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myrequest',
  templateUrl: './myrequest.component.html',
  styleUrls: ['./myrequest.component.css']
})

export class MyrequestComponent implements OnInit {

  constructor(public requestPanel: DashboardService, private route: Router) {
  }
  response: any;

  ngOnInit(): void {
    let dataVal = {
        text : "DNS Entry Request Form (DNS-FORM202405070006) is available on the Government of India's eForms portal. The application form must be signed by the applicant and his/her Reporting/Nodal/Forwarding Officer. Entries marked asterisk(*) are mandatory."
      // text: sessionStorage.getItem('text')
    }
    this.requestPanel.getSummarizedText(dataVal).subscribe(res => {
      console.log(res);
      this.response = res[0].summary_text;
      console.log(this.response);
    })
  }

  goToGenrateMCQs() {
    this.route.navigateByUrl('/mcq-question');
  }

  openFile() {
    window.open("assets/" + "sample.pdf");
  }
}
