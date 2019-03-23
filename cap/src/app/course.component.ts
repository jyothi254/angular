import { Component,Input,Output } from "@angular/core";

 
 @Component({
    selector:'course',
    template:
    // `
    // <button class="btn btn-success" [class.active]="isActive">Submit</button>
    // <button class="btn btn-success" id="btn" (click)="clicked()">click</button>
    // `
    // `
    // <input type="text" class="form-control mt-2"  (keyup)="onKeyUp($event)"/> 
    // `
    // `
    // <input type="text" class="form-control mt-2" #email(keyup.enter)="onKeyUp(email.value)"/>  
    //
    // `
    // <input type="text" [(ngModel)]="username" class="form-control"/>
    // <h1>{{username}}</h1>
    // `
    // `
    // <ul class="list-group"><li class="list-group-item mt-2" *ngFor="let lang of language;index as i">
    // <span class="badge badge-success">{{i}}</span>{{lang}}</li></ul>
    // `
    // `
    // <button class="btn btn-primary mt-2 mb-2"(click)="addEmp()">AddEmp</button>
    // <table class="table table-bordered">
    // <tr><th>id</th>
    // <th>name</th>
    // <th>company</th>
    // <th>Remove</tr>
    // <tr *ngFor="let emp of empData">
    // <td>{{emp.id}}</td>
    // <td>{{emp.name}}</td>
    // <td>{{emp.company}}</td>
    // <td (click)="removeEmp(emp)" class="btn btn-danger mt-4 btn-sm">Remove</tr>
    // </table>    
    // `
    // `
    // <div *ngIf="language.length>0">
    // <h1>course here</h1></div>

    // <div *ngIf="language.length==0">
    // <h1>No course here</h1></div>
    // `
    // `
    // <div *ngIf=" course.length>0;then courseList else nocourse"></div>
    // <ng-template #courseList><h1>course here</h1></ng-template>
    // <ng-template #nocourse><h1>Nocousrse here</h1></ng-template>
    // `

    // `
    // <div  [ngSwitch]="color">
    // <p *ngSwitchCase="'red'">red here</p>
    // <p *ngSwitchCase="'green'">green here</p>
    // <p *ngSwitchCase="'orange'">orange here</p>
    // <p *ngSwitchDefault>no color</p>
    // </div>
    // `

    // `
    // <button class="btn" [ngClass]="{
    // 'btn-success':isActive,
    // 'btn-danger':!isActive
    // }">Submit</button>
    // `

    `
    <div jyoti>Hello</div>
    <div>hi</div>
    `

 })
 export class courseComponent
 {
     color='green';
     colspan=6;
     isActive:boolean=false;
     course=["java","angular","node","react"];
     text:string="hello";
    //  clicked($event){
    //      console.log('button was clicked',$event);
    //  }
    //  onKeyUp($event){
    //      if($event.keyCode===13)
    //      console.log("keypress",$event.target.value,$event);
    //  }


    //  onKeyUp(email){
    //      console.log(email);
    //  }
    empData=[
        {
            id:1, name:"abc",company:"wipro",
        },
        {
            id:2,name:"xyz",company:"CGI"
        },{id:3,name:"mno",company:"Infy"},

        {id:4,name:"mno",company:"cts"},
        {id:5,name:"mno",company:"cts"},
        {id:6,name:"mno",company:"Infy"},
        {id:7,name:"mno",company:"cts"},
        {id:8,name:"mno",company:"Infy"}



    ]
    addEmp(){
        this.empData.push({
            id:4,name:'anu',company:'nvd'
         })
    }
    removeEmp(emp){
        let index = this.empData.indexOf(emp);
        this.empData.splice(index,1);
    }
 }