import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive ({ selector: '[myHighlight]'})

export class HighlightDirective {

    @Input() rowindex:number;

    constructor( private el: ElementRef) {
        el.nativeElement.style.color='black';
    }

    @HostListener('mouseenter') onMouseEnter() {
     
     if(this.rowindex %2 == 1)
     this.highlight("Green");
     else
     this.highlight("Red")
    }

    @HostListener('mouseleave') onMouseLeave() {
      
      this.highlight("black");
    }


    private highlight (color:string) {
    
        this.el.nativeElement.style.color=color;

    }
}