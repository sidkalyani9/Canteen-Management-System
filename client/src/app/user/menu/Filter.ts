export interface Filter{
    categoryName:string;
    itemName:string;    
}

export class FilterImpl implements Filter{
    categoryName: string;
    itemName: string;

    constructor()
    {
        this.categoryName = 'all';
        this.itemName = 'all';
    }
}