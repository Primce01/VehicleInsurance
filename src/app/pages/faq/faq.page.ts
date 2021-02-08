import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/providers/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  posts: any[];
  constructor(private faqService: FaqService) { }

  ngOnInit() {
    
    this.faqService.getPosts().subscribe((data: any[]) => {
      console.log(data);
      this.posts = data;
    })
  }

}
