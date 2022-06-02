import { Component, OnInit } from '@angular/core';
import { NpxStorageService } from 'npx-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private storageService: NpxStorageService) {}

  ngOnInit(): void {
    console.log(this.storageService.getAllStorage());

    this.storageService.setStorage('demo', 'null');

    setTimeout(() => {
      console.log(this.storageService.getStorage('demo'));
    }, 2000);

    // 其他属性
    // console.log(this.storageService.getStorage('rootPath'));
  }
}
