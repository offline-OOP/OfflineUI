import IImg from '../../utils/IImg';

interface AvatarProps {
    img: IImg;
    to: string;
    size?: string;
}

declare class Avatar {
    $props: AvatarProps;
}


export default Avatar
