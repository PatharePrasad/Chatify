import Chat from "./Chat";

export default function Messages({ messages, id }) {
  return (
    <div className="container mx-auto pt-5 px-3 max-h-[90vh] overflow-scroll">
      <section className="flex gap-1 flex-col">
        {messages.map((message, index) => (
          <Chat
            key={index}
            own={message.user.id === id}
            name={message.user.name}
            type={message.type}
            content={message.content}
          />
        ))}
      </section>
    </div>
  );
}