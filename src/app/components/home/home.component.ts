import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background', 'url(../../../assets/images/mainBGPeacock.png) no-repeat');
    this.renderer.setStyle(document.body, 'background-size', '100%');
   }

  ngOnInit() {
  }

}
