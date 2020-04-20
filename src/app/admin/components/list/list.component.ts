import { Component, DoCheck, OnInit } from '@angular/core';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  title = 'Report';
  numbers= new Array(10);
  faEdit = faEdit;
  faEye = faEye;
  faTrash = faTrash;
}