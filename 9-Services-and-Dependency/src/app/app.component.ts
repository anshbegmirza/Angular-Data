import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService],
})
export class AppComponent implements OnInit {
  constructor(private accountsService: AccountsService) {}

  accounts: { name: string; status: string }[] = [];

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }

  // Define the onAccountAdded method
  onAccountAdded(event: any) {
    console.log('Account Added:', event);
    // Handle the account added logic here
  }

  // Define the onStatusChanged method
  onStatusChanged(event: any) {
    console.log('Status Changed:', event);
    // Handle the status change logic here
  }

  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active',
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive',
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown',
  //   },
  // ];

  // onAccountAdded(newAccount: { name: string; status: string }) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: { id: number; newStatus: string }) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
