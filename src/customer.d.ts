type RootState = {
    recordList: RecordItem[],
    createRecordError: Error | null,
    tagList: Tag[],
    currentTag? : Tag
}

type RecordItem = {
    tags:Tag[]
    notes:string
    type:string
    amount:number
    createdAt?:string
}
type Tag = {
    id:string;
    name:string;
}

type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name:string) => 'success' | 'duplicated'
    update:(id:string,name:string) => 'success' | 'not found' | 'duplicated'
    save: () => void
    remove: (id:string)=> boolean
}

interface Window{
    // store:{
    //     tagList:Tag[];
    //     createTag:(name:string) => void;
    //     findTag:(id:string) => Tag | undefined; 
    //     removeTag:(id:string) => boolean;
    //     updateTag:TagListModel['update'];
    //     recordList:RecordItem[];
    //     createRecord:(record:RecordItem)=> void 
    // };
    
}