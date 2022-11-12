import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {
  color = "#ff0000"
  size = 12
  fontFamily = "Arial, Helvetica, sans-serif"

  constructor() { }

  ngOnInit(): void {
  }

}
