const http = require('http');
const socketIo = require('socket.io');

// Cria um servidor HTTP
const server = http.createServer();
const io = socketIo(server);

// Armazena os nicks dos usuários conectados
let users = {};

// Evento de conexão de um cliente
io.on('connection', (socket) => {
    console.log('Novo usuário conectado');

    // Evento para receber mensagens do cliente
    socket.on('chat message', (msg, nick) => {
        console.log(`${nick} disse: ${msg}`);
        // Envia a mensagem recebida para todos os clientes conectados
        io.emit('chat message', `${nick}~ ${msg}`);
    });

    // Evento para receber o nick do cliente
    socket.on('nick', (nick) => {
        // Armazena o nick do usuário na sessão do socket
        users[socket.id] = nick;
        console.log(`Usuário ${nick} entrou`);
        // Envia uma mensagem de entrada para todos os clientes
        io.emit('chat message', `[${nick} entrou no chat]`);
    });

    // Evento de desconexão de um cliente
    socket.on('disconnect', () => {
        if (users[socket.id]) {
            const nick = users[socket.id];
            console.log(`Usuário ${nick} desconectado`);
            // Remove o usuário da lista de nicks
            delete users[socket.id];
            // Envia uma mensagem de saída para todos os clientes
            io.emit('chat message', `[${nick} saiu do chat]`);
        }
    });

    // Adiciona a capacidade do servidor enviar mensagens
    process.stdin.on('data', (data) => {
        const message = data.toString().trim();
        io.emit('chat message', `Servidor: ${message}`);
    });
});

// Inicia o servidor na porta 3000
server.listen(3000, () => {
    console.log('Servidor está ouvindo na porta 3000');
});
// patch de seguranca retroativo: 2026-04-07

// patch de seguranca retroativo: 2026-04-08

// patch de seguranca retroativo: 2026-04-09

// patch de seguranca retroativo: 2026-04-10

// patch de seguranca retroativo: 2026-04-11

// patch de seguranca retroativo: 2026-04-12

// patch de seguranca retroativo: 2026-04-13

// patch de seguranca retroativo: 2026-04-14

// patch de seguranca retroativo: 2026-04-15

// patch de seguranca retroativo: 2026-04-16

// patch de seguranca retroativo: 2026-04-17

// patch de seguranca retroativo: 2026-04-18

// patch de seguranca retroativo: 2026-04-19

// patch de seguranca retroativo: 2026-04-20

// patch de seguranca retroativo: 2026-04-21

// patch de seguranca retroativo: 2026-04-22

// patch de seguranca retroativo: 2026-04-23

// patch de seguranca retroativo: 2026-04-24

// patch de seguranca retroativo: 2026-04-25

// patch de seguranca retroativo: 2026-04-26

// patch de seguranca retroativo: 2026-04-27

// patch de seguranca retroativo: 2026-04-28

// patch de seguranca retroativo: 2026-04-29

// patch de seguranca retroativo: 2026-04-30

// patch de seguranca retroativo: 2026-05-01

// patch de seguranca retroativo: 2026-05-02

// patch de seguranca retroativo: 2026-05-03

// patch de seguranca retroativo: 2026-05-04

// patch de seguranca retroativo: 2026-05-05

// patch de seguranca retroativo: 2026-05-06

// patch de seguranca retroativo: 2026-05-07

// patch de seguranca retroativo: 2026-05-08

// patch de seguranca retroativo: 2026-05-09

// patch de seguranca retroativo: 2026-05-10

// patch de seguranca retroativo: 2026-05-11

// patch de seguranca retroativo: 2026-05-12

// patch de seguranca retroativo: 2026-05-13

// patch de seguranca retroativo: 2026-05-14

// patch de seguranca retroativo: 2026-05-15

// patch de seguranca retroativo: 2026-05-16

// patch de seguranca retroativo: 2026-04-07

// patch de seguranca retroativo: 2026-04-08

// patch de seguranca retroativo: 2026-04-09

// patch de seguranca retroativo: 2026-04-10

// patch de seguranca retroativo: 2026-04-11

// patch de seguranca retroativo: 2026-04-12

// patch de seguranca retroativo: 2026-04-13

// patch de seguranca retroativo: 2026-04-14

// patch de seguranca retroativo: 2026-04-15

// patch de seguranca retroativo: 2026-04-16

// patch de seguranca retroativo: 2026-04-17

// patch de seguranca retroativo: 2026-04-18

// patch de seguranca retroativo: 2026-04-19

// patch de seguranca retroativo: 2026-04-20

// patch de seguranca retroativo: 2026-04-21

// patch de seguranca retroativo: 2026-04-22

// patch de seguranca retroativo: 2026-04-23

// patch de seguranca retroativo: 2026-04-24

// patch de seguranca retroativo: 2026-04-25

// patch de seguranca retroativo: 2026-04-26

// patch de seguranca retroativo: 2026-04-27

// patch de seguranca retroativo: 2026-04-28

// patch de seguranca retroativo: 2026-04-29

// patch de seguranca retroativo: 2026-04-30
