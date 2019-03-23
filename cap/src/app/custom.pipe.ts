import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'summary'
})
export class CustomPipe implements PipeTransform{
    transform(value:string,args?:any){
        if(!value){
            return null;
        }else{
            return value.substr(0,15)+'...'
        }
    }
}