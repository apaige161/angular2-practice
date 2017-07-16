

import { InMemoryDbService } from 'angular-in-memory-web-api';

declare var file: any;

export class InMemoryItemService implements InMemoryDbService {
    createDb() {
        let items = [
            {
                id: 6,
                model: '200t',
                serialNumber: 3452653,
                comments: [
                    { 
                        id: 7,
                        name:"Jacob", 
                        comment: "A comment1" 
                    },
                    { 
                        id: 8,
                        name:"Alexander", 
                        comment: "Another comment2" 
                    },
                    { 
                        id: 9,
                        name:"Jonanthan", 
                        comment: "O look,a comment3" 
                    }
                ]
            },
            {

                id: 7,
                model: '2001t',
                serialNumber: 67876,
                comments: [
                    { 
                        id: 10,
                        name:"Jack", 
                        comment: "fixed carb" 
                    }
                ]
            },
            {

                id: 8,
                model: '260t',
                serialNumber: 98887,
                comments: [
                    { 
                        id: 11,
                        name:"Jack", 
                        comment: "broke carb" 
                    }
                ]
            }
        ];
        return { items };

    }
}

