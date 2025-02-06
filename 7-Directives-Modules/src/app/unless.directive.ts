import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    // subsitute for the ngIf directive
    if (!condition) {
      // the createEmbeddedView makes the view, with data of the templateRef
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear(); // clear the view
    }
  }

  constructor(
    private templateRef: TemplateRef<any>, // html element to change to !
    private vcRef: ViewContainerRef // viewcontainer reference = vcRef
  ) {}
}

//  the *ngIf directive is a structural directive, which means it changes the structure of the DOM.
// it is only applied when the condition is TRUE

/************ */

// Our directive will be called [appUnless], and it will be applied when the condition is FALSE.

/************ */

// template is the what part and the viewContainer is the where part
