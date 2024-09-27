import { Kafka } from "kafkajs";

const IP_Address = process.env.NEXT_PUBLIC_KAFKA_IP_ADDRESS;
export const kafka = new Kafka({
  clientId: "unicornai-chatbot-scalability",
  brokers: [`${IP_Address}:9092`],
});
