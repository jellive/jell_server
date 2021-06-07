export interface Board {
    title: string
    content: string
    author: string
    version: number
    hospital: string
    create_date: string
    update_date: string
}

export const Board = (board: {title: string, content: string,
    author:string, version: number, hospital: string, create_date: string,
    update_date: string}): Board => {
    return {
        ...board
    }
}