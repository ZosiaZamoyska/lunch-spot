export interface MenuItem {
  name: string;
  price: string;
}

export interface DailyMenu {
  date: string;
  items: MenuItem[];
}

export interface CafeteriaMenu {
  name: string;
  menus: DailyMenu[];
}

export const cafeteriaMenus: CafeteriaMenu[] = [
  {
    name: 'KAIMARU (Undergraduate Cafeteria)',
    menus: [
      {
        date: '2024-03-20',
        items: [
          { name: 'Rice', price: '1,000₩' },
          { name: 'Kimchi Stew', price: '3,500₩' },
          { name: 'Grilled Fish', price: '4,000₩' },
          { name: 'Seasoned Vegetables', price: '2,000₩' }
        ]
      }
    ]
  },
  {
    name: 'Student Cafeteria',
    menus: [
      {
        date: '2024-03-20',
        items: [
          { name: 'Rice', price: '1,000₩' },
          { name: 'Beef Soup', price: '4,000₩' },
          { name: 'Stir-fried Pork', price: '3,500₩' },
          { name: 'Seasoned Spinach', price: '2,000₩' }
        ]
      }
    ]
  },
  {
    name: 'Graduate Cafeteria',
    menus: [
      {
        date: '2024-03-20',
        items: [
          { name: 'Rice', price: '1,000₩' },
          { name: 'Chicken Curry', price: '4,500₩' },
          { name: 'Vegetable Tempura', price: '3,000₩' },
          { name: 'Seasoned Bean Sprouts', price: '2,000₩' }
        ]
      }
    ]
  },
  {
    name: 'Faculty Cafeteria',
    menus: [
      {
        date: '2024-03-20',
        items: [
          { name: 'Rice', price: '1,000₩' },
          { name: 'Bulgogi', price: '5,000₩' },
          { name: 'Seafood Pancake', price: '4,000₩' },
          { name: 'Seasoned Seaweed', price: '2,000₩' }
        ]
      }
    ]
  }
];

export const getMenuForCafeteria = (cafeteriaName: string): DailyMenu | undefined => {
  const cafeteria = cafeteriaMenus.find(c => c.name === cafeteriaName);
  if (!cafeteria) return undefined;
  
  // Get today's menu or the most recent menu
  return cafeteria.menus[0];
}; 