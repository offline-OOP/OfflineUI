import {VNode} from 'vue'

interface PageProps {
    contentClass?: string;
    footerClass?: string;
    headerClass?: string;
    pageClass?: string;
}

declare class Page {
    $props: PageProps;
    $slot: {
        'header': VNode[]
        '': VNode[]
        'footer': VNode[]
    }
}


export default Page
