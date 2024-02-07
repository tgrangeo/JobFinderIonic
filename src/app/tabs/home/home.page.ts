import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonIcon,
  IonThumbnail,
  IonCol, IonLabel, IonText, IonRow, IonSearchbar, IonCheckbox } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { appsOutline, personCircleOutline, options } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonCheckbox, IonSearchbar, IonRow, IonText, IonLabel, 
    IonCol,
    IonIcon,
    IonButtons,
    IonButton,
    IonToolbar,
    IonContent,
    IonHeader,
    IonTitle,
    IonThumbnail,
    IonRow
  ],
})
export class HomePage implements OnInit {
  constructor() {
    addIcons({ appsOutline, personCircleOutline,options });
  }

  ngOnInit() {}
}
