import { Component, Input, Output, ContentChild, TemplateRef, EventEmitter } from '@angular/core';

@Component({
    selector: 'fd-tablenew',
    styleUrls: ['./tablenew.component.scss'],
    templateUrl: './tablenew.component.html'
})
export class TableNewComponent {
  @Input() rows;
  @Output() rowsChange = new EventEmitter<any>();
  @ContentChild('rowTemplate') rowTemplate: TemplateRef<any>;

  @Input() headers;
  @Output() headersChange = new EventEmitter<any>();
  @ContentChild('headerTemplate') headerTemplate: TemplateRef<any>;

  updateRows(){
    this.rowsChange.emit(this.rows);
  }
  updateHeaders(){
    this.headersChange.emit(this.headers);
  }

  receiveClick(){
    console.log("in the component");
  }

  showData(){
    console.log(this.rows);
  }

  compareAlphabetically(a,b){
    if(a.column1 < b.column1){
      return -1;
    }
    if(a.column1 > b.column1){
      return 1;
    }
    return 0;
  }

  sortFunction(compareFunction){
    this.rows.sort(compareFunction);
    this.updateRows();
  }
}
