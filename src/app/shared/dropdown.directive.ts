import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    constructor() { }

    @HostBinding('class.open') isActive=false;

    @HostListener('click') toggleOpen() {
        this.isActive = !this.isActive;
    }
}