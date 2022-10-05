import { Pipe, PipeTransform } from '@angular/core';

import { ICar } from 'src/app/core/entities/interfaces/car.interface';

@Pipe({
  name: 'filterBrand'
})
export class FilterBrandPipe implements PipeTransform {

  transform(carList: ICar[], textFilter: string): ICar[] {
    return textFilter.length
      ? carList.filter(car => 
          this.validateText(car.brand, textFilter)
            || this.validateText(car.model, textFilter)
        )
      : carList;
  }

  private validateText(contentText: string, comparationText: string): boolean {
    return contentText.toLowerCase().includes(comparationText.toLowerCase());
  }

}
