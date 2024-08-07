import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  standalone: true,
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input() account!: {name: string, status: string};
  @Input() id!: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private accountService: AccountsService)  {
  }

  // private loggingService?: LoggingService; // <- must be added
  //
  // constructor() {
  //   this.loggingService = inject(LoggingService);
  // }


  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.updateStatus(this.id, status);
    this.accountService.statusUpdated.emit(status)
    // this.loggingService.logStatusChange(status);
  }
}
