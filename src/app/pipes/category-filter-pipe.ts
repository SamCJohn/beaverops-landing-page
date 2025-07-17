// category-filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../models/cloud-provider.model';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
  transform(services: Service[], selectedCategory: string): Service[] {
    if (!selectedCategory) return services;
    return services.filter(service => service.category === selectedCategory);
  }
}
