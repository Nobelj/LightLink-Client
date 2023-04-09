const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
  console.log('WebSocket connected');

  socket.send('Hello from the phone!');
};

socket.onmessage = (event) => {
  console.log('Received message:', event.data);
};

socket.onclose = () => {
  console.log('WebSocket closed');
};
