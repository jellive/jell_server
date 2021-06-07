import Express from 'express'
import Board from '../database'

export const addBoard = (board: {title: string, content: string, author: string}): void => {
    if (!board.author) board.author = 'anonymous'
    Board.create({
        ...board
    })
}

export const getBoard = (hospital: string): Board => {
    return Board.findOne({
        where: {
            hospital: hospital
        }
    }).then((board: Board) => {
        return board
    })
}