//Movimentação do player
window.addEventListener('keydown', (event) =>{
    switch(event.key){
        //Movendo para cima        
        case 'w':
            if (player.velocity.y === 0) player.velocity.y = -20;
            break
        //Movendo para esquerda
        case 'a':
            keys.a.pressed = true;
            break
        //Movendo para direita
        case 'd':
            keys.d.pressed = true;
            break

    }
});

window.addEventListener('keyup', (event) =>{
    switch(event.key){
        case 'a':
            keys.a.pressed = false;
            break
        case 'd':
            keys.d.pressed = false;
            break
    }
});