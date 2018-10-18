import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  
  private repositoryName: string 
  private repoItems: any[];
  private total: any;
  private readMe: boolean;

  constructor(
    private dataSvc: DataService,  
    private router: Router, 
    private route: ActivatedRoute) { 
      this.total = 0;
     
  }

  ngOnInit() {
    let repoName = this.route.snapshot.paramMap.get('name');
    this.searchRepo(repoName);    
  }

  searchRepo(repoName: string) {
    if (repoName) {  
      this.repositoryName = repoName;
      console.log(this.readMe);
      this.dataSvc.getRepositorybyName(repoName).subscribe(
        (data: any) => {  
          this.total = data.total_count; 
               
          this.repoItems = data.items;         
        });      
    }
  }

  
}
