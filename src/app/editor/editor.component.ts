import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

import MediumEditor from 'medium-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  constructor(public auth: AuthService) {}

  async ngAfterViewInit(): Promise<void> {
    const element = document.getElementById('editorArea');
    const editor = new MediumEditor(element);
    var editable = await this.auth.loadEditorData();
    if (editable) {
      element.innerHTML = editable;
    }
    editor.subscribe('editableInput', (_event, element) => {
      this.auth.storeEditorData(element.innerHTML);
    });
  }
}