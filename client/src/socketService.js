import io from 'socket.io-client';

const socket = io();



export const countUpdated = ()=>{
    socket.on('count-updated', (count) =>{
        console.log('The count has been updated!' , count)
    })
}

export const incrementCount = ()=>{
    console.log('Clicked')
    socket.emit('increment')
}