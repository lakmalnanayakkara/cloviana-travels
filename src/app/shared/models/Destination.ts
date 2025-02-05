export class Destination{
    id!:number;
    header!:string;
    description!:string;
    descriptionPointsSection1?: string[];
    descriptionPointsSection2?: string[];
    imageUrl!:string;
    stars:number=0;
    iframe?:string;
    blog?:{header:string; description:string;imageUrl:string;}[];

}