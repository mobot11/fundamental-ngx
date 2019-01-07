import { Component, Input, OnChanges, ElementRef } from '@angular/core';

@Component({
    selector: 'fd-loading-spinner',
    templateUrl: './loading-spinner.component.html',
    styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnChanges {
    @Input()
    loading: boolean = false;

    constructor(private elRef: ElementRef){}

    ngOnChanges() {
        const parentEl = this.elRef.nativeElement.parentElement;
        if (parentEl) {
            parentEl.setAttribute('aria-busy', this.loading.toString());
        }
    }
}
