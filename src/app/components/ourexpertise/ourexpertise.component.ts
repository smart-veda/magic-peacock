import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ourexpertise',
  templateUrl: './ourexpertise.component.html',
  styleUrls: ['./ourexpertise.component.scss']
})
export class OurexpertiseComponent implements OnInit {

  public events: any;
  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background', '');
  }

  ngOnInit() {
    this.events = [{
      imageUrl: '../../../assets/images/diamond_yellowbg.png',
      title: 'Event 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do'
    },
    {
      imageUrl: '../../../assets/images/diamond_yellowbg.png',
      title: 'Event 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do'
    },
    {
      imageUrl: '../../../assets/images/diamond_yellowbg.png',
      title: 'Event 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do'
    },
    {
      imageUrl: '../../../assets/images/diamond_yellowbg.png',
      title: 'Event 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do'
    },
    {
      imageUrl: '../../../assets/images/diamond_yellowbg.png',
      title: 'Event 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do'
    },
    {
      imageUrl: '../../../assets/images/diamond_yellowbg.png',
      title: 'Event 6',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do'
    }
    ];
  }

}
