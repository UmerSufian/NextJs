

// export type contactInfoType={
//     contactInfo:{
//         name:string
//         email:string
//         phone:number
//     }
// }

export type contactTypes={

        name:string
        email:string
        phone:number
        message:string
        company: string
        address: string
        city: string
        country: string
        topic: string
        postalCode: string
}

export type onChangeEventType={
    target:{value:string, name:string}
}