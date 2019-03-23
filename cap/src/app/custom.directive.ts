import { Directive, ElementRef, HostListener, HostBinding } from "@angular/core";

 @Directive({ 
   selector:'[jyoti]'  
 })

 export class customDirective{

    @HostBinding('style.backgroundColor') backgroundColor:string;
    constructor(el:ElementRef){
        el.nativeElement.style.background="yellow";
        el.nativeElement.style.padding="50px";
        el.nativeElement.style.border="2px solid green";
    }
        // @HostListener('click') clickData(){
        //     window.alert('x is clicked');
        // }
    
    @HostListener('mouseenter') mouseEnter(){
        console.log('mouse enter');
       this.backgroundColor='green';
    }
    @HostListener('mouseleave') mouseLeave(){
        console.log('mouse leave');
        this.backgroundColor='white';
    }
 }