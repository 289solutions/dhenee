import { Component, Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClickOutsideModule } from 'ng-click-outside';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})

@Injectable({
  providedIn: 'root',
})

export class AppComponent {
  title = 'dhenee';  
  appId = 'black';
  activeTabToggle = true;
  events: string[] = [];
  opened: boolean;
  public contactPopupShow: boolean;
  public contactRef: any;

  constructor(
    public contactDialog: MatDialog,
    ) {
      this.contactPopupShow = false;
      console.log('ContactPopupShow value is : ', this.contactPopupShow)
    }

  activeTabRule(job) { 
    this.activeTabToggle = !this.activeTabToggle;
  }

  openContact(): void {
    this.contactPopupShow = true;
    console.log('ContactPopupShow value is : ', this.contactPopupShow)
    const contactRef = this.contactDialog.open(ContactComponent, {
      width: '250px',
      disableClose: false
    });
  }

  closeContact(): void {

  }
}
