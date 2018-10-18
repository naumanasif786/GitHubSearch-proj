import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from '../data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  params:any;
  repositoryDetail: any = {};

  constructor(
    private route: ActivatedRoute, 
    private router: Router,  
    private data: DataService) {  
  }

  ngOnInit() {
    this.route.params.subscribe( (params) => {  
      this.params = params;    
      this.data.getRepositorybyName(params.name).subscribe(
        (data: any) => { 
          this.repositoryDetail = _.find(data.items, (d) => { return d.id == params.id; });
        });    
  });
  }
}
