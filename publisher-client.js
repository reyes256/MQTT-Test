const mqtt = require('mqtt');

// MQTT broker URL
const brokerUrl = 'mqtt://127.0.0.1'; // Replace with your MQTT broker URL

// MQTT topic to publish to
const topic = '/test/01';

// Create an MQTT client
const client = mqtt.connect(brokerUrl);

// Handle connection event
client.on('connect', () => {
  console.log('Connected to MQTT broker');

  // Publish a message to the topic
  const message = 'Hello, MQTT!';
  client.publish(topic, message, (err) => {
    if (!err) {
      console.log(`Published message to topic ${topic}: ${message}`);
    } else {
      console.error('Publish error:', err);
    }

    // Close the MQTT connection
    client.end();
  });
});

// Handle errors
client.on('error', (error) => {
  console.error('MQTT error:', error);
});
