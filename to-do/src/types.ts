export type Item = {
    id: number;
    description: string;
};

export type State = {
    todos:Item[];
};

export type AddAction = {
    type: "add";
    data: string;

};

export type EditAction = {
    type: "edit";
    data: Item;
};

export type DeleteAction = {
    type:"delete ";
    data:number;
};

export type ResetAction={type:"reset"};

export type Action = AddAction | EditAction | DeleteAction| ResetAction;