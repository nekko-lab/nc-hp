import { ImageMetadata } from 'astro';
import nekko from '/public/nekko-logo.png';

export interface Achievement {
    imageUrl: ImageMetadata;
    title: string;
    description: string;
    date?: string;
    link?: string;
}

export const achievements: Achievement[] = [
    {
        imageUrl: nekko,
        title: 'Nekko Cloud V1',
        description: 'v1 IPIP6トンネル on NGNを使用したVPN上に構築 ',
    },
    {
        imageUrl: nekko,
        title: 'Nekko Cloud v2 ',
        description: 'Wireguardトンネル on NGNを使用したVPN上に構築 ',
        link: 'https://github.com/nekko-lab/vyos/tree/main/patchs/wireguard',
    },
    {
        imageUrl: nekko,
        title: 'Nekko Cloud ',
        description: '現段階での開発情報',
        link: 'https://docs.google.com/presentation/d/1W5hpbMDYs2SNt6Cc1Piby1DEGY7uFLPvCD7U8ZMIDcY/edit?slide=id.p#slide=id.p',
    },
];