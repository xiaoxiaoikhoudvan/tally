const localStorageKeyName = 'tagList';
type TagListModel = {
    data: string[]
    fetch: () => string[]
    create: (name:string) => 'success' | 'duplicated'
    save: () => void
}
const tagListModel : TagListModel = {
    // clone(data:RecordItem[] | RecordItem){
    //     return JSON.parse(JSON.stringify(data))
    // },
    data:[],
    fetch(){
       return JSON.parse(window.localStorage.getItem(localStorageKeyName) ||'[]');
    },
    save(){
        window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.data));
    },
    create(name){
        if (this.data.indexOf(name) >= 0) {
            return 'duplicated';
        }
        this.data.push(name);
        this.save();
        return 'success';
    }
};

export default tagListModel;