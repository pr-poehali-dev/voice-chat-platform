import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Channel {
  id: string;
  name: string;
  type: 'text' | 'voice' | 'stream';
  users: number;
  unread?: number;
  limit?: number;
  viewers?: number;
}

interface Message {
  id: number;
  user: string;
  message: string;
  time: string;
  role: string;
  reactions?: string[];
}

interface ChatViewProps {
  activeChannel: string;
  channels: Channel[];
  messages: Message[];
}

const ChatView = ({ activeChannel, channels, messages }: ChatViewProps) => {
  return (
    <>
      {/* Channel Header */}
      <div className="h-16 bg-card border-b border-border glass-effect flex items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <Icon name="Hash" size={20} className="text-neon-cyan" />
          <h3 className="font-montserrat text-xl font-semibold">{activeChannel}</h3>
          <Badge variant="outline" className="neon-border text-neon-purple">
            {channels.find(c => c.id === activeChannel)?.users} online
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="neon-border text-neon-pink hover:bg-neon-pink hover:text-black"
          >
            <Icon name="Users" size={16} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="neon-border text-neon-cyan hover:bg-neon-cyan hover:text-black"
          >
            <Icon name="Pin" size={16} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="neon-border text-neon-yellow hover:bg-neon-yellow hover:text-black"
          >
            <Icon name="Search" size={16} />
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3 group hover:bg-muted/50 p-3 rounded-lg transition-colors">
            <Avatar className="neon-border border-neon-blue">
              <AvatarFallback className="bg-neon-blue text-white">
                {message.user[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-semibold text-neon-cyan">{message.user}</span>
                <Badge
                  variant="secondary"
                  className={`text-xs ${
                    message.role === 'admin' ? 'bg-neon-pink text-white' : 
                    message.role === 'mod' ? 'bg-neon-purple text-white' : 
                    'bg-muted'
                  }`}
                >
                  {message.role}
                </Badge>
                <span className="text-xs text-muted-foreground">{message.time}</span>
              </div>
              <p className="text-sm mb-2">{message.message}</p>
              {message.reactions && (
                <div className="flex items-center space-x-2">
                  {message.reactions.map((reaction, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="h-6 px-2 text-xs neon-border hover:bg-neon-cyan hover:text-black"
                    >
                      {reaction} 2
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-card border-t border-border glass-effect">
        <div className="flex items-center space-x-2">
          <div className="flex-1 flex items-center space-x-2 bg-muted rounded-lg px-3 py-2">
            <Icon name="Plus" size={16} className="text-neon-cyan cursor-pointer" />
            <input
              type="text"
              placeholder={`Message #${activeChannel}`}
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <div className="flex items-center space-x-1">
              <Icon name="Smile" size={16} className="text-neon-yellow cursor-pointer" />
              <Icon name="Paperclip" size={16} className="text-neon-purple cursor-pointer" />
              <Icon name="Mic" size={16} className="text-neon-green cursor-pointer" />
              <Icon name="Gift" size={16} className="text-neon-pink cursor-pointer" />
            </div>
          </div>
          <Button
            variant="default"
            size="sm"
            className="bg-neon-gradient hover:opacity-80 text-white font-semibold"
          >
            <Icon name="Send" size={16} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChatView;