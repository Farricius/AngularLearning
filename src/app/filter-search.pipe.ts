import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

transform (value: any, arg: any): any {
  
  if (!value) return null;
  if (!arg)return value;

  const resultAmiibo = [];
  for(const post of value){
    if(post.character.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
      resultAmiibo.push(post);
    };
    };
    return resultAmiibo;
  }
}

//   transform(value: any, arg: any): any {
//     const resultPosts = [];
//     for (const post of value) {
//       if(post.character.indexOf(arg) > -1){
//         resultPosts.push(post);
//       };
//     };
//     return resultPosts;
//   }
// }
