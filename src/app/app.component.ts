import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NewAccountComponent} from "./new-account/new-account.component";
import {AccountComponent} from "./account/account.component";
import {NgForOf} from "@angular/common";

import {AccountsService} from "./accounts.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewAccountComponent, AccountComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[AccountsService]
})
export class AppComponent implements OnInit{
  accounts: {name:string, status:string}[] = [];
  constructor(private accountsService:AccountsService)  {
  }

  ngOnInit() {
    this.accounts = this.accountsService.accounts
  }

  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];
  //
  // onAccountAdded(event: {name: string, status: string}) {
  //   this.accounts.push(event);
  // }
  //
  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
