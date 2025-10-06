import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common-modal',
  imports: [ CommonModule ],
  templateUrl: './common-modal.component.html',
  styleUrl: './common-modal.component.css'
})
export class CommonModalComponent {
  @Input() title: string = '';
  @Input() showSave: boolean = true;
  @Input() visible: boolean = false;   // control modal open/close
  @Input() disableSave = false;
  @Output() save = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  onSave() {
    this.save.emit();
    this.visible = false;
  }

  onClose() {
    this.close.emit();
    this.visible = false;
  }

}
