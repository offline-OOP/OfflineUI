interface SearchProps {
    color?: string;
    modelValue: string
}

declare class Search {
    $props: SearchProps;
    $emit(eventName: 'update:modelValue', value: string): this;
}


export default Search
