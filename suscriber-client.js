const mqtt = require('mqtt');

// MQTT broker URL
const brokerUrl = 'mqtt://127.0.0.1'; // Replace with your MQTT broker URL

// MQTT topic to subscribe to
const topic = '/test/01';

// Create an MQTT client
const client = mqtt.connect(brokerUrl);

// Handle connection event
client.on('connect', () => {
  console.log('Connected to MQTT broker');
  
  // Subscribe to the topic
  client.subscribe(topic, (err) => {
    if (!err) {
      console.log(`Subscribed to topic: ${topic}`);
    } else {
      console.error('Subscription error:', err);
    }
  });
});

// Handle incoming messages
client.on('message', (receivedTopic, message) => {
  // Process the incoming message here
  console.log(`Received message on topic ${receivedTopic}: ${message.toString()}`);
});

// Handle errors
client.on('error', (error) => {
  console.error('MQTT error:', error);
});
