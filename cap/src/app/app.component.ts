import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    myInputText="hello";
    getData(value){
      console.log(value);
    }

  title = 'cap';
  posts:any[]=[];
  url:string='https://jsonplaceholder.typicode.com/posts'
  // url:string='https://api.github.com/users'  


//to create an api
  constructor(public http:HttpClient){
  http.get<any>(this.url).subscribe(res=>{
    console.log(res);
    this.posts = res;
  })    
  };

  createData(input:HTMLInputElement){
    let post={title:input.value, body:input.value}
    input.value="";
    this.http.post<any>(this.url, post).subscribe(res=>{
      this.posts['id']=res.id;
      this.posts.splice(0,0,post);
      console.log(res);
    })
  }
  // to delete an api
// this.http.delete(`${this.url}/${post.id}`)
  removeData(post){
    console.log(post);
    this.http.delete(this.url+"/"+'post.id').subscribe(res=>{
      let index=this.posts.indexOf(post);
      this.posts.splice(index,1);
      console.log(res)
    })
  }

  //pipe
  emp={
    name:'vinay',
    doj:new Date(),
    sal:2000
  }

  text='huwhdugxyqbytzyqvtqyuquinaamgytftsrsresrdftgyhujkwertyuioxcvbnm,dfghjklertyuiopxcvbnm';

 
}


// get call=http.get()
// subscribe=observable with help of =>()
//header: http status -> resides in xmlhttp request