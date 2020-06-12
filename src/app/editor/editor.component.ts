import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';

import MediumEditor from 'medium-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  editable: any;
  constructor(public auth: AuthService) {}

  async ngAfterViewInit(): Promise<void> {

    const element = document.getElementById('editorArea');
    const editor = new MediumEditor(element);
    this.editable = await this.auth.loadEditorData();
    if (this.editable) {
      element.innerHTML = this.editable;
    }
    editor.subscribe('editableInput', (_event, element) => {
      this.auth.storeEditorData(element.innerHTML);
      this.editable = element.innerHTML;
    });
  }
}