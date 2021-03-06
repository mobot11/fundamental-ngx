import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { CopyService } from '../../services/copy.service';

@Component({
    selector: 'code-example',
    templateUrl: './code-example.component.html',
    styleUrls: ['./code-example.component.scss']
})
export class CodeExampleComponent implements OnInit {
    @Input() code: string;
    @Input() language: string;

    smallScreen: boolean;

    constructor(private element: ElementRef, private copyService: CopyService) {}

    copyText(): void {
        this.copyService.copyText(this.code);
    }

    ngOnInit() {
        this.smallScreen = window.innerWidth <= 768;
    }
}
