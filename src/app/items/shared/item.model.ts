export class Item {
    
    model: string = '200t';
    serialNumber: number = 3452653;
    log: string = '';
    logs: any[] = [
        { name:"Jacob", log: "A comment1" },
        { name:"Alexander", log: "Another comment2" },
        { name:"Jonanthan", log: "O look,a comment3" },
    ]

    title: string;
    photo: string;
    description: string;
    comments: any[];
}