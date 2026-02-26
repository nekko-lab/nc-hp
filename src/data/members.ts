export interface SNSLink {
    platform: string;
    url: string;
    username: string;
}

export interface Member {
    variant: 'white' | 'gray';
    imageUrl: string;
    person: string;
    position: string;
    role: string;
    snsLinks: SNSLink[];
    comment: string;
    other?: string;
}

const X_URL = 'https://twitter.com';
const GITHUB_URL = 'https://github.com';

export const members: Member[] = [
    {
        variant: 'white',
        imageUrl: '/member1.jpg',
        person: 'みらのん',
        position: '役職:ネットワークコンテンツ研究会部長',
        role: 'PM,フロントエンド サービス開発',
        snsLinks: [
            {
                platform: 'X',
                url: `${X_URL}/Erica_kangeki`,
                username: '@Erica_kangeki',
            },
            {
                platform: 'GitHub',
                url: `${GITHUB_URL}/miranop`,
                username: 'miranop',
            },
        ],
        comment: '毎日頑張ります',
    },
    {
        variant: 'gray',
        imageUrl: '/member2.png',
        person: 'Cyokozai',
        position: '役職:NCチームプロダクトオーナー',
        role: 'PM,インフラ,サービス開発',
        snsLinks: [
            {
                platform: 'X',
                url: `${X_URL}/cyokozai0`,
                username: '@cyokozai0',
            },
        ],
        comment: 'Infrastructure as a Smile',
    },
    {
        variant: 'white',
        imageUrl: '/member3.jpg',
        person: 'ワッキー',
        position: '役職:NCチーム開発メンバー',
        role: 'データサイエンス,盛り上げ',
        snsLinks: [
            {
                platform: 'X',
                url: `${X_URL}/wakki_0123`,
                username: '@wakki_0123',
            },
            {
                platform: 'GitHub',
                url: `${GITHUB_URL}/wakki-0123`,
                username: 'wakki-0123',
            },
        ],
        comment: '視認性がとてもよい大柄な人です 人間の身体と精神に少し詳しいです',
    },
    {
        variant: 'gray',
        imageUrl: '/member6.jpg',
        person: 'chiharu',
        position: '役職:NCチーム開発メンバー',
        role: 'サービス開発',
        snsLinks: [
            {
                platform: 'X',
                url: `${X_URL}/chiharu_meow`,
                username: '@chiharu_meow',
            },
            {
                platform: 'GitHub',
                url: `${GITHUB_URL}/Chiharu-Hagihara`,
                username: 'Chiharu-Hagihara',
            },
        ],
        comment: 'お酒を作るのと食べることが好きです',
    },
    {
        variant: 'white',
        imageUrl: '/member4.png',
        person: 'あいあい',
        position: '役職:NCチーム開発メンバー',
        role: '調査、サービス開発etc',
        snsLinks: [
            {
                platform: 'X',
                url: `${X_URL}/@14kw13`,
                username: '@14kw13',
            },
        ],
        comment: '怠惰を燃料に',
    },
    {
        variant: 'gray',
        imageUrl: '/member5.jpg',
        person: 'たかお',
        position: '役職:NCチーム開発メンバー',
        role: 'サービス開発',
        snsLinks: [
            {
                platform: 'X',
                url: `${X_URL}/@ao_u__u`,
                username: '@ao_u__u',
            },
        ],
        comment: 'Proxmoxだいすき',
    },
    {
        variant: 'white',
        imageUrl: '/member7.jpg',
        person: 'すみ',
        position: '役職:NCチーム開発メンバー',
        role: 'サービス開発',
        snsLinks: [
            {
                platform: 'X',
                url: `${X_URL}/@su3yka4a_`,
                username: '@su3yka4a_',
            },
        ],
        comment: '蟻の思いも天に届く',
        other: 'TypeScriptこそ至高。',
    },
    {
        variant: 'gray',
        imageUrl: '/member8.jpg',
        person: 'くろな',
        position: '役職:NCチーム開発メンバー',
        role: 'サービス開発',
        snsLinks: [
            {
                platform: 'X',
                url: `${X_URL}/meltmanic`,
                username: '@meltmanic',
            },
        ],
        comment: '寝ると育つよ',
    },
];