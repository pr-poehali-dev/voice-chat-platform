import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeChannel, setActiveChannel] = useState('general');
  const [isStreaming, setIsStreaming] = useState(false);

  const servers = [
    { id: 1, name: 'Космическая станция', avatar: '🚀', color: 'text-neon-blue' },
    { id: 2, name: 'Игровой центр', avatar: '🎮', color: 'text-neon-purple' },
    { id: 3, name: 'Работа', avatar: '💼', color: 'text-neon-cyan' },
  ];

  const channels = [
    { id: 'general', name: 'общий', type: 'text', users: 42 },
    { id: 'random', name: 'случайное', type: 'text', users: 18 },
    { id: 'voice-1', name: 'голосовой-1', type: 'voice', users: 5 },
    { id: 'voice-2', name: 'голосовой-2', type: 'voice', users: 12 },
    { id: 'stream', name: 'стрим', type: 'stream', users: 156 },
  ];

  const onlineUsers = [
    { id: 1, name: 'Космонавт Алекс', status: 'online', role: 'admin' },
    { id: 2, name: 'Пилот Мария', status: 'streaming', role: 'mod' },
    { id: 3, name: 'Инженер Дима', status: 'gaming', role: 'user' },
    { id: 4, name: 'Доктор Анна', status: 'online', role: 'user' },
  ];

  const messages = [
    { id: 1, user: 'Космонавт Алекс', message: 'Привет всем! Как дела в космосе?', time: '14:32', role: 'admin' },
    { id: 2, user: 'Пилот Мария', message: 'Готовлюсь к стриму, кто будет смотреть?', time: '14:35', role: 'mod' },
    { id: 3, user: 'Инженер Дима', message: 'Новая версия движка готова к тестированию!', time: '14:37', role: 'user' },
  ];

  return (
    <div className="min-h-screen bg-dark-gradient text-white font-rubik">
      {/* Header */}
      <header className="bg-card border-b border-border glass-effect sticky top-0 z-50">
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold font-montserrat bg-neon-gradient bg-clip-text text-transparent">
              NeonSpace
            </h1>
            <Badge variant="outline" className="neon-border text-neon-cyan animate-neon-pulse">
              v2.0
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="neon-border text-neon-purple">
              <Icon name="Settings" size={16} />
            </Button>
            <Avatar className="neon-border border-neon-blue">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-neon-blue text-white">ТЫ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Servers Sidebar */}
        <div className="w-20 bg-card border-r border-border glass-effect">
          <div className="flex flex-col items-center py-4 space-y-4">
            {servers.map((server) => (
              <button
                key={server.id}
                className={`w-12 h-12 rounded-xl bg-card border-2 border-transparent hover:border-current transition-all duration-200 flex items-center justify-center text-2xl ${server.color} hover:animate-neon-pulse`}
              >
                {server.avatar}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="w-12 h-12 rounded-xl neon-border text-neon-cyan hover:bg-neon-cyan hover:text-black"
            >
              <Icon name="Plus" size={20} />
            </Button>
          </div>
        </div>

        {/* Channels Sidebar */}
        <div className="w-64 bg-card border-r border-border glass-effect">
          <div className="p-4">
            <h2 className="font-montserrat text-lg font-semibold mb-4 text-neon-cyan">
              Космическая станция
            </h2>
            <div className="space-y-2">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannel(channel.id)}
                  className={`w-full flex items-center justify-between p-2 rounded-lg transition-all duration-200 ${
                    activeChannel === channel.id
                      ? 'bg-primary text-primary-foreground neon-glow'
                      : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon
                      name={channel.type === 'voice' ? 'Volume2' : channel.type === 'stream' ? 'Video' : 'Hash'}
                      size={16}
                    />
                    <span className="text-sm">{channel.name}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {channel.users}
                  </Badge>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Channel Header */}
          <div className="h-16 bg-card border-b border-border glass-effect flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <Icon name="Hash" size={20} className="text-neon-cyan" />
              <h3 className="font-montserrat text-xl font-semibold">{activeChannel}</h3>
              <Badge variant="outline" className="neon-border text-neon-purple">
                42 активных
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="neon-border text-neon-pink hover:bg-neon-pink hover:text-black"
                onClick={() => setIsStreaming(!isStreaming)}
              >
                <Icon name={isStreaming ? 'VideoOff' : 'Video'} size={16} />
                {isStreaming ? 'Стоп' : 'Стрим'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="neon-border text-neon-cyan hover:bg-neon-cyan hover:text-black"
              >
                <Icon name="Mic" size={16} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="neon-border text-neon-yellow hover:bg-neon-yellow hover:text-black"
              >
                <Icon name="Share" size={16} />
              </Button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex items-start space-x-3 group">
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
                  <p className="text-sm">{message.message}</p>
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
                  placeholder="Отправить сообщение в #general"
                  className="flex-1 bg-transparent outline-none text-sm"
                />
                <div className="flex items-center space-x-1">
                  <Icon name="Smile" size={16} className="text-neon-yellow cursor-pointer" />
                  <Icon name="Paperclip" size={16} className="text-neon-purple cursor-pointer" />
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
        </div>

        {/* Users Sidebar */}
        <div className="w-64 bg-card border-l border-border glass-effect">
          <div className="p-4">
            <h3 className="font-montserrat text-lg font-semibold mb-4 text-neon-purple">
              Онлайн — {onlineUsers.length}
            </h3>
            <div className="space-y-3">
              {onlineUsers.map((user) => (
                <div key={user.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                  <div className="relative">
                    <Avatar className="w-8 h-8 neon-border border-neon-green">
                      <AvatarFallback className="bg-neon-green text-white text-xs">
                        {user.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-card ${
                      user.status === 'online' ? 'bg-green-500' :
                      user.status === 'streaming' ? 'bg-red-500' :
                      'bg-yellow-500'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{user.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;