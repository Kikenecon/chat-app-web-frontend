

export default function MessageList({ messages }) {
    return (
      <div className="list-group">
  {messages?.map((message) => (
    <div key={message.id} className="message-container">
      <strong>{message.author.name}:</strong> {message.content}
    </div>
  ))}
</div>

    );
  }