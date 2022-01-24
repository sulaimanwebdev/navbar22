interface Opera {
    id: string,
    title: LocalizedString
    composer: string
    detail1: LocalizedString
    detail2: LocalizedString
    detail3: LocalizedString
    description: LocalizedString
    duration: number
    cast: OperaEntity[]
    entities: OperaEntity[]
    mainImg: string
}

interface OperaEntity {
    title: LocalizedString;
    name: string;
}
type LocalizedString = any;

export type {Opera, OperaEntity, LocalizedString};