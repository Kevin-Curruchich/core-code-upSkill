import { MenuElement } from './MenuElement';
import { Choice, Input, SelectChoice } from './Input';

export class Menu {
    mainMenu: SelectChoice[] = [];

    soupMenu: Choice[] = [];
    chefSpecialsMenu: Choice[] = [];
    chickenMenu: Choice[] = [];
    beefMenu: Choice[] = [];
    beveragesMenu: Choice[] = [];

    soupOptions: MenuElement[] = [];
    chefSpecialsOptions: MenuElement[] = [];
    chickenOptions: MenuElement[] = [];
    beefOptions: MenuElement[] = [];
    beveragesOptions: MenuElement[] = [];

    constructor() {
        this.filMainMenu();
        this.fillOptions();
        this.fillSubMenus();
    }

    filMainMenu() {
        this.mainMenu = [
            { option: 1, message: 'Soup' },
            { option: 2, message: `Chef's Specials` },
            { option: 3, message: `Chicken` },
            { option: 4, message: `Beef` },
            { option: 5, message: `Beverages` },
        ];
    }

    fillOptions() {
        this.soupOptions = [
            new MenuElement('Wonton Soup (Chicken)', 2.25, 'ð'),
            new MenuElement('Chicken Corn Soyp', 1.95, 'ð'),
            new MenuElement('Vegetables Corn Soup', 2.25, 'ð'),
        ];

        this.chefSpecialsOptions = [
            new MenuElement('Orange beef', 8.95, 'ð'),
            new MenuElement('Kung Pao Shrimp', 8.5, 'ð'),
        ];

        this.chickenOptions = [
            new MenuElement('Lemon Chichek', 9.95, 'ð'),
            new MenuElement('Sesame CHicken', 9.95, 'ð'),
            new MenuElement('Hunan Chicken', 10.5, 'ð'),
        ];

        this.beefOptions = [
            new MenuElement('Peper Steak', 9.95, 'ð'),
            new MenuElement('Manchurian Beef', 11.95, 'ð'),
        ];

        this.beveragesOptions = [
            new MenuElement('PiÃ±a Colada', 3.0, 'ð'),
            new MenuElement('Spanish Coffee', 5.5, 'ð'),
        ];
    }

    fillSubMenus() {
        this.soupMenu = this.soupOptions.map((o: MenuElement) => ({
            name: o.name,
            message: o.printOption(),
        }));

        this.chefSpecialsMenu = this.chefSpecialsOptions.map(
            (o: MenuElement) => ({
                name: o.name,
                message: o.printOption(),
            })
        );

        this.chickenMenu = this.chickenOptions.map((o: MenuElement) => ({
            name: o.name,
            message: o.printOption(),
        }));

        this.beefMenu = this.beefOptions.map((o: MenuElement) => ({
            name: o.name,
            message: o.printOption(),
        }));

        this.beveragesMenu = this.beveragesOptions.map((o: MenuElement) => ({
            name: o.name,
            message: o.printOption(),
        }));
    }

    async showMainMenu() {
        let input = await Input.getSelect('Menu Options', this.mainMenu);
        console.log(input);
    }

    showSubMenu() {}
}
