export interface NewsType{
    author:string|null;
    content:string|null;
    description:string|null;
    publishedAt:string;
    source:{id:string,name:string};
    title:string;
    url:string;
    urlToImage:string;
}
export interface NewsResponseType{
    config:{};
    data:{state:string;totalResult:number;articles:NewsType}
    headers:{};
    request:{
        
    };
    state:number;
    statusText:string;
}
