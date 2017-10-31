import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeMultiplication'
})
export class PipeMultiplicationPipe implements PipeTransform {

  transform(value: number[], args?: any): any {
    return value.map(number=>number*10);
    //return value*10;
  }

}
