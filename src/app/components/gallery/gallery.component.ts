import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public imgs: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/gallery/gallery.json').subscribe((result: any) => {
      this.imgs = result.images.map(x => 'assets/gallery/' + x );
    });
  }
}
