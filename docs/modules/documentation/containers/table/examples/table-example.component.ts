import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'fd-table-example',
    templateUrl: './table-example.component.html'
})
export class TableExampleComponent implements OnInit {
    tableRows;

    ngOnInit() {
        this.tableRows = [
            {
                column1: 'Row 1',
                column2: 'Row 1',
                column3: 'Row 1',
                date: '09-07-18',
                type: 'search'
            },
            {
                column1: 'Row 2',
                column2: 'Row 2',
                column3: 'Row 2',
                date: '09-07-18',
                type: 'cart'
            },
            {
                column1: 'Row 3',
                column2: 'Row 3',
                column3: 'Row 3',
                date: '09-07-18',
                type: 'calendar'
            },
            {
                column1: 'Row 4',
                column2: 'Row 4',
                column3: 'Row 4',
                date: '09-07-18',
                type: 'search'
            },
            {
                column1: 'Row 5',
                column2: 'Row 5',
                column3: 'Row 5',
                date: '09-07-18',
                type: 'search'
            }
        ];
    }
}

@Component({
    selector: 'fd-tablenew-example',
    templateUrl: './tablenew-example.component.html'
})
export class TableNewExampleComponent implements OnInit {
    tableHeaders;
    tableRows;

    receiveClick(name){
      console.log("in the example " + name);
    }

    delete(row){
      let index = this.tableRows.indexOf(row);
      if(index > -1){
        this.tableRows.splice(index, 1);
      }
      console.log(row);
    }

    ngOnInit() {
        this.tableHeaders=[
            {
              title: 'checkbox',
              sort: function(a,b){
                  if(a.selected < b.selected){
                    return -1;
                  }
                  if(a.selected > b.selected){
                    return 1;
                  }
                  return 0;
              }
            },
            {
              title: 'image',
              sort: function(){}
            },
            {
              title: 'header1',
              sort: function(a,b){
                  if(a.column1 < b.column1){
                    return -1;
                  }
                  if(a.column1 > b.column1){
                    return 1;
                  }
                  return 0;
              }
            },
            {
              title: 'header2',
              sort: function(a,b){
                  if(a.column2 < b.column2){
                    return -1;
                  }
                  if(a.column2 > b.column2){
                    return 1;
                  }
                  return 0;
              }
            },
            {
              title: 'header3'
            },
            {
              title: 'date',
              sort: function(a,b){
                  if(a.date < b.date){
                    return -1;
                  }
                  if(a.date > b.date){
                    return 1;
                  }
                  return 0;
              }
            },
            {
              title: 'type',
              sort: function(a,b){
                  if(a.type < b.type){
                    return -1;
                  }
                  if(a.type > b.type){
                    return 1;
                  }
                  return 0;
              }
            },
            {
              title: 'contextual menu',
              sort: function(){}
            },
            {
              title: 'delete?'
            }
        ];
        this.tableRows = [
            {
                selected: true,
                image: 'http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png',
                column1: 'ARow 1',
                column2: 'GRow 1',
                column3: 'YRow 1',
                date: '09-07-18',
                type: 'search',
                contextualMenuOptions: [
                  'hi',
                  'hello',
                  'howdy'
                ]
            },
            {
                selected: false,
                image: 'https://placeimg.com/400/400/nature',
                column1: 'CRow 2',
                column2: 'FRow 2',
                column3: 'TRow 2',
                date: '09-07-18',
                type: 'cart',
                contextualMenuOptions: [
                  'hi2',
                  'hello2',
                  'howdy2'
                ]
            },
            {
                selected: true,
                image: 'http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png',
                column1: 'BRow 3',
                column2: 'RRow 3',
                column3: 'BRow 3',
                date: '09-07-18',
                type: 'calendar',
                contextualMenuOptions: [
                  'hi3',
                  'hello3',
                  'howdy3'
                ]
            },
            {
                selected: false,
                image: 'https://placeimg.com/400/400/nature',
                column1: 'GRow 4',
                column2: 'CRow 4',
                column3: 'URow 4',
                date: '09-07-18',
                type: 'search',
                contextualMenuOptions: [
                  'hi4',
                  'hello4',
                  'howdy4'
                ]
            },
            {
                selected: false,
                image: 'http://api.adorable.io/avatars/50/rodney.artichoke@hybris.com.png',
                column1: 'ERow 5',
                column2: 'ZRow 5',
                column3: 'XRow 5',
                date: '09-07-18',
                type: 'search',
                contextualMenuOptions: [
                  'hi5',
                  'hello5',
                  'howdy5'
                ]
            }
        ];
    }
}
