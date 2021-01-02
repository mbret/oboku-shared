export declare type LinkDocType = {
    _id: string;
    _rev: string;
    type: DataSourceType;
    resourceId: string;
    data: string | null;
    book: string | null;
    rx_model: 'link';
    contentLength?: number | null;
};
export declare enum DataSourceType {
    URI = "URI",
    DRIVE = "DRIVE",
    DROPBOX = "DROPBOX",
    FILE = "FILE"
}
export declare type GoogleDriveDataSourceData = {
    applyTags: string[];
    driveId: string;
    folderName?: string;
};
export declare type DataSourceDocType = {
    _id: string;
    _rev: string;
    type: DataSourceType;
    lastSyncedAt: number | null;
    lastSyncErrorCode?: string | null;
    credentials?: any;
    data: string;
    rx_model: 'datasource';
};
export declare enum ReadingStateState {
    Finished = "FINISHED",
    NotStarted = "NOT_STARTED",
    Reading = "READING"
}
export declare type InsertableBookDocType = Required<Omit<BookDocType, '_id' | '_rev'>>;
export declare type BookDocType = {
    _id: string;
    _rev: string;
    createdAt: number;
    creator: string | null;
    date: number | null;
    lang: string | null;
    lastMetadataUpdatedAt: number | null;
    publisher: string | null;
    readingStateCurrentBookmarkLocation: string | null;
    readingStateCurrentBookmarkProgressPercent: number;
    readingStateCurrentBookmarkProgressUpdatedAt: number | null;
    readingStateCurrentState: ReadingStateState;
    rights: string | null;
    subject: string[] | null;
    tags: string[];
    links: string[];
    collections: string[];
    title: string | null;
    rx_model: 'book';
};
export declare type TagsDocType = {
    _id: string;
    _rev: string;
    name: null | string;
    isProtected: boolean;
    books: string[];
    rx_model: 'tag';
};
export declare type CollectionDocType = {
    _id: string;
    _rev: string;
    name: string;
    books: string[];
    /**
     * Can be used as extra id for datasources in order to have
     * better accuracy when syncing. For example every drive collection
     * created will have `resourceId: drive-564asdQWjasd54` so that even
     * if user rename the folder a little bit we will not create a new collection
     */
    resourceId?: string | null;
    rx_model: 'obokucollection';
};
export declare function isTag(document: TagsDocType | unknown): document is TagsDocType;
export declare function isBook(document: BookDocType | unknown): document is BookDocType;
export declare function isLink(document: LinkDocType | unknown): document is LinkDocType;
export declare function isDataSource(document: DataSourceDocType | unknown): document is DataSourceDocType;
export declare function isCollection(document: CollectionDocType | unknown): document is CollectionDocType;
declare type DataOf<D extends DataSourceDocType> = D['type'] extends (DataSourceType.DRIVE) ? GoogleDriveDataSourceData : D['type'] extends (DataSourceType.DROPBOX) ? {} : never;
export declare const extractDataSourceData: <D extends DataSourceDocType, Data extends DataOf<D>>({ data }: D) => Data;
declare type ConditionOperator<T> = {
    $nin?: any[];
};
interface MangoQuery<RxDocType> {
    selector?: {
        [key in (keyof RxDocType)]?: RxDocType[key] | ConditionOperator<RxDocType[key]>;
    } | {
        $or: {
            [key in (keyof RxDocType)]?: RxDocType[key] | MangoQuerySelector<RxDocType[key]>;
        }[];
    };
}
export declare type MangoQuerySelector<T> = T;
export declare type SafeMangoQuery<RxDocType = any> = MangoQuery<RxDocType>;
export {};
