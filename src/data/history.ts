export interface HistoryItem {
    year: number;
    month: number;
    content: string;
}

export const historyItems: HistoryItem[] = [
    {
        year: 2019,
        month: 4,
        content:
            '初音ミクのファンメイドライブを制作するサークル、Miku\'s Origin(ミクオリ)を創設',
    },
    {
        year: 2022,
        month: 4,
        content:
            '活動内容を3D系エンタメ系全般に拡充し、サークル名をネットワークコンテンツ研究会(ネッコ研)に改名',
    },
    {
        year: 2023,
        month: 4,
        content:
            '活動内容にネットワーク・インフラ・クラウド系開発を拡充し、このチームをNetwork Infrastructure Team(NI)とする',
    },
    {
        year: 2024,
        month: 4,
        content:
            'NIの主な活動内容が、ネットワークコンテンツ研究会のプライベートクラウド開発となったため、このクラウドをNekko Cloud(NC)、開発チーム名をNekko Cloud Teamとする。',
    },
];