import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeChannel, setActiveChannel] = useState('general');
  const [isInVoice, setIsInVoice] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isDeafened, setIsDeafened] = useState(false);
  const [isVideoCall, setIsVideoCall] = useState(false);
  const [isScreenShare, setIsScreenShare] = useState(false);

  const servers = [
    { id: 1, name: 'Космическая станция', avatar: '🚀', color: 'text-neon-blue', online: 42 },
    { id: 2, name: 'Игровой центр', avatar: '🎮', color: 'text-neon-purple', online: 128 },
    { id: 3, name: 'Работа', avatar: '💼', color: 'text-neon-cyan', online: 23 },
    { id: 4, name: 'Друзья', avatar: '👥', color: 'text-neon-pink', online: 8 },
  ];

  const channels = [
    { id: 'general', name: 'общий', type: 'text', users: 42, unread: 3 },
    { id: 'random', name: 'случайное', type: 'text', users: 18, unread: 0 },
    { id: 'announcements', name: 'объявления', type: 'text', users: 156, unread: 1 },
    { id: 'voice-lounge', name: 'голосовая гостиная', type: 'voice', users: 5, limit: 10 },
    { id: 'game-room', name: 'игровая комната', type: 'voice', users: 8, limit: 15 },
    { id: 'conference', name: 'конференц-зал', type: 'voice', users: 12, limit: 50 },
    { id: 'stream-room', name: 'стрим-комната', type: 'stream', users: 234, viewers: 1200 },
  ];

  const voiceUsers = [
    { id: 1, name: 'Космонавт Алекс', speaking: true, muted: false, deafened: false, streaming: false },
    { id: 2, name: 'Пилот Мария', speaking: false, muted: false, deafened: false, streaming: true },
    { id: 3, name: 'Инженер Дима', speaking: false, muted: true, deafened: false, streaming: false },
    { id: 4, name: 'Доктор Анна', speaking: false, muted: false, deafened: true, streaming: false },
    { id: 5, name: 'Капитан Иван', speaking: true, muted: false, deafened: false, streaming: false },
  ];

  const onlineUsers = [
    { id: 1, name: 'Космонавт Алекс', status: 'online', role: 'admin', activity: 'В голосовом канале' },
    { id: 2, name: 'Пилот Мария', status: 'streaming', role: 'mod', activity: 'Стримит игру' },
    { id: 3, name: 'Инженер Дима', status: 'gaming', role: 'user', activity: 'Играет в космическую игру' },
    { id: 4, name: 'Доктор Анна', status: 'online', role: 'user', activity: 'Читает документацию' },
    { id: 5, name: 'Капитан Иван', status: 'away', role: 'user', activity: 'Отошел' },
    { id: 6, name: 'Навигатор Света', status: 'dnd', role: 'user', activity: 'Не беспокоить' },
  ];

  const messages = [
    { id: 1, user: 'Космонавт Алекс', message: 'Всем привет! Начинаем планерку по проекту 🚀', time: '14:32', role: 'admin', reactions: ['👍', '🚀'] },
    { id: 2, user: 'Пилот Мария', message: 'Готова к старту! Все системы в норме ✅', time: '14:35', role: 'mod', reactions: ['✅', '👨‍🚀'] },
    { id: 3, user: 'Инженер Дима', message: 'Новая версия движка готова к тестированию. Посмотрите: https://github.com/space-engine/v2.0', time: '14:37', role: 'user', reactions: ['🔧', '⚡'] },
    { id: 4, user: 'Доктор Анна', message: 'Медицинские показатели экипажа в норме. Все готовы к длительному полету', time: '14:40', role: 'user', reactions: ['❤️', '🏥'] },
  ];

  const videoParticipants = [
    { id: 1, name: 'Космонавт Алекс', speaking: true, muted: false, camera: true, screen: false },
    { id: 2, name: 'Пилот Мария', speaking: false, muted: false, camera: true, screen: true },
    { id: 3, name: 'Инженер Дима', speaking: false, muted: true, camera: false, screen: false },
    { id: 4, name: 'Доктор Анна', speaking: false, muted: false, camera: true, screen: false },
  ];

  return (
    <div className="min-h-screen bg-dark-gradient text-white font-rubik">
      {/* Header */}
      <header className="bg-card border-b border-border glass-effect sticky top-0 z-50">
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold font-montserrat bg-neon-gradient bg-clip-text text-transparent">
              SpaceChat Pro
            </h1>
            <Badge variant="outline" className="neon-border text-neon-cyan animate-neon-pulse">
              v3.0 Beta
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="neon-border text-neon-purple">
              <Icon name="Settings" size={16} />
            </Button>
            <Button variant="outline" size="sm" className="neon-border text-neon-yellow">
              <Icon name="Bell" size={16} />
              <Badge variant="destructive" className="ml-1 text-xs">3</Badge>
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
              <div key={server.id} className="relative">
                <button
                  className={`w-12 h-12 rounded-xl bg-card border-2 border-transparent hover:border-current transition-all duration-200 flex items-center justify-center text-2xl ${server.color} hover:animate-neon-pulse relative`}
                >
                  {server.avatar}
                </button>
                <Badge 
                  variant="secondary" 
                  className="absolute -top-2 -right-2 text-xs bg-neon-green text-black"
                >
                  {server.online}
                </Badge>
              </div>
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
        <div className="w-80 bg-card border-r border-border glass-effect flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="font-montserrat text-lg font-semibold mb-4 text-neon-cyan">
              🚀 Космическая станция
            </h2>
            <div className="text-sm text-muted-foreground mb-4">
              {onlineUsers.filter(u => u.status === 'online').length} онлайн • {onlineUsers.length} участников
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-6">
              {/* Text Channels */}
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-2 flex items-center">
                  <Icon name="Hash" size={12} className="mr-2" />
                  Текстовые каналы
                </h3>
                <div className="space-y-1">
                  {channels.filter(c => c.type === 'text').map((channel) => (
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
                        <Icon name="Hash" size={16} />
                        <span className="text-sm">{channel.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {channel.unread > 0 && (
                          <Badge variant="destructive" className="text-xs">
                            {channel.unread}
                          </Badge>
                        )}
                        <Badge variant="secondary" className="text-xs">
                          {channel.users}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Voice Channels */}
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-2 flex items-center">
                  <Icon name="Volume2" size={12} className="mr-2" />
                  Голосовые каналы
                </h3>
                <div className="space-y-1">
                  {channels.filter(c => c.type === 'voice').map((channel) => (
                    <div key={channel.id} className="space-y-1">
                      <button
                        onClick={() => setIsInVoice(!isInVoice)}
                        className={`w-full flex items-center justify-between p-2 rounded-lg transition-all duration-200 ${
                          isInVoice && activeChannel === channel.id
                            ? 'bg-voice-active text-black neon-glow'
                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Icon name="Volume2" size={16} />
                          <span className="text-sm">{channel.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {channel.users}/{channel.limit}
                          </Badge>
                        </div>
                      </button>
                      {isInVoice && activeChannel === channel.id && (
                        <div className="ml-6 space-y-1">
                          {voiceUsers.slice(0, 3).map((user) => (
                            <div key={user.id} className="flex items-center space-x-2 p-1 text-sm">
                              <div className="relative">
                                <Avatar className="w-6 h-6">
                                  <AvatarFallback className="bg-neon-blue text-white text-xs">
                                    {user.name[0]}
                                  </AvatarFallback>
                                </Avatar>
                                {user.speaking && (
                                  <div className="absolute inset-0 border-2 border-voice-speaking rounded-full animate-neon-pulse" />
                                )}
                              </div>
                              <span className={user.speaking ? 'text-voice-speaking' : 'text-muted-foreground'}>
                                {user.name}
                              </span>
                              <div className="flex space-x-1">
                                {user.muted && <Icon name="MicOff" size={12} className="text-voice-muted" />}
                                {user.deafened && <Icon name="VolumeX" size={12} className="text-voice-muted" />}
                                {user.streaming && <Icon name="Video" size={12} className="text-neon-pink" />}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stream Channels */}
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-2 flex items-center">
                  <Icon name="Video" size={12} className="mr-2" />
                  Стримы
                </h3>
                <div className="space-y-1">
                  {channels.filter(c => c.type === 'stream').map((channel) => (
                    <button
                      key={channel.id}
                      className="w-full flex items-center justify-between p-2 rounded-lg transition-all duration-200 hover:bg-muted text-muted-foreground hover:text-foreground"
                    >
                      <div className="flex items-center space-x-2">
                        <Icon name="Video" size={16} />
                        <span className="text-sm">{channel.name}</span>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-neon-pulse" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs text-neon-pink">
                          {channel.viewers} зрителей
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Voice Control Panel */}
          {isInVoice && (
            <div className="p-4 bg-muted border-t border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8 neon-border border-neon-green">
                    <AvatarFallback className="bg-neon-green text-white text-xs">ТЫ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Вы в голосовом канале</p>
                    <p className="text-xs text-muted-foreground">голосовая гостиная</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsInVoice(false)}
                  className="neon-border text-neon-red hover:bg-neon-red hover:text-black"
                >
                  <Icon name="PhoneOff" size={16} />
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant={isMuted ? "destructive" : "outline"}
                  size="sm"
                  onClick={() => setIsMuted(!isMuted)}
                  className={isMuted ? "bg-neon-red" : "neon-border text-neon-cyan hover:bg-neon-cyan hover:text-black"}
                >
                  <Icon name={isMuted ? "MicOff" : "Mic"} size={16} />
                </Button>
                <Button
                  variant={isDeafened ? "destructive" : "outline"}
                  size="sm"
                  onClick={() => setIsDeafened(!isDeafened)}
                  className={isDeafened ? "bg-neon-red" : "neon-border text-neon-cyan hover:bg-neon-cyan hover:text-black"}
                >
                  <Icon name={isDeafened ? "VolumeX" : "Volume2"} size={16} />
                </Button>
                <Button
                  variant={isVideoCall ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsVideoCall(!isVideoCall)}
                  className={isVideoCall ? "bg-neon-green text-black" : "neon-border text-neon-green hover:bg-neon-green hover:text-black"}
                >
                  <Icon name={isVideoCall ? "Video" : "VideoOff"} size={16} />
                </Button>
                <Button
                  variant={isScreenShare ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsScreenShare(!isScreenShare)}
                  className={isScreenShare ? "bg-neon-purple text-white" : "neon-border text-neon-purple hover:bg-neon-purple hover:text-white"}
                >
                  <Icon name="Monitor" size={16} />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {isVideoCall ? (
            /* Video Conference View */
            <div className="flex-1 p-6 bg-black">
              <div className="grid grid-cols-2 gap-4 h-full">
                {videoParticipants.map((participant) => (
                  <Card key={participant.id} className="relative bg-gray-900 border-gray-700 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20" />
                    <div className="relative h-full flex items-center justify-center">
                      {participant.camera ? (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                          <Avatar className="w-24 h-24 neon-border border-neon-blue">
                            <AvatarFallback className="bg-neon-blue text-white text-2xl">
                              {participant.name[0]}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Avatar className="w-24 h-24 neon-border border-gray-600 mx-auto mb-4">
                            <AvatarFallback className="bg-gray-700 text-white text-2xl">
                              {participant.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <p className="text-sm text-gray-400">Камера выключена</p>
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-white bg-black/50 px-2 py-1 rounded">
                          {participant.name}
                        </span>
                        {participant.speaking && (
                          <div className="w-3 h-3 bg-voice-speaking rounded-full animate-neon-pulse" />
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        {participant.muted && <Icon name="MicOff" size={16} className="text-voice-muted" />}
                        {participant.screen && <Icon name="Monitor" size={16} className="text-neon-purple" />}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            /* Chat View */
            <>
              {/* Channel Header */}
              <div className="h-16 bg-card border-b border-border glass-effect flex items-center justify-between px-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Hash" size={20} className="text-neon-cyan" />
                  <h3 className="font-montserrat text-xl font-semibold">{activeChannel}</h3>
                  <Badge variant="outline" className="neon-border text-neon-purple">
                    {channels.find(c => c.id === activeChannel)?.users} активных
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
                      placeholder={`Отправить сообщение в #${activeChannel}`}
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
          )}
        </div>

        {/* Users Sidebar */}
        <div className="w-64 bg-card border-l border-border glass-effect">
          <div className="p-4">
            <Tabs defaultValue="online" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="online">Онлайн</TabsTrigger>
                <TabsTrigger value="all">Все</TabsTrigger>
              </TabsList>
              <TabsContent value="online" className="space-y-3 mt-4">
                <h3 className="font-montserrat text-sm font-semibold text-neon-purple">
                  Онлайн — {onlineUsers.filter(u => u.status === 'online').length}
                </h3>
                {onlineUsers.filter(u => u.status === 'online').map((user) => (
                  <div key={user.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                    <div className="relative">
                      <Avatar className="w-8 h-8 neon-border border-neon-green">
                        <AvatarFallback className="bg-neon-green text-white text-xs">
                          {user.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.activity}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="all" className="space-y-3 mt-4">
                <h3 className="font-montserrat text-sm font-semibold text-neon-purple">
                  Все участники — {onlineUsers.length}
                </h3>
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
                        user.status === 'gaming' ? 'bg-yellow-500' :
                        user.status === 'away' ? 'bg-orange-500' :
                        'bg-gray-500'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.activity}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;