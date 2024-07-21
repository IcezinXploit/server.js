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