import { useState } from 'react';
import Header from '@/components/Header';
import ServersSidebar from '@/components/ServersSidebar';
import ChannelsSidebar from '@/components/ChannelsSidebar';
import MainContent from '@/components/MainContent';
import UsersSidebar from '@/components/UsersSidebar';

const Index = () => {
  const [activeChannel, setActiveChannel] = useState('general');
  const [isInVoice, setIsInVoice] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isDeafened, setIsDeafened] = useState(false);
  const [isVideoCall, setIsVideoCall] = useState(false);
  const [isScreenShare, setIsScreenShare] = useState(false);

  const servers = [
    { id: 1, name: 'Anaphora Official', avatar: '🏠', color: 'text-neon-blue', online: 256 },
    { id: 2, name: 'Gaming Hub', avatar: '🎮', color: 'text-neon-purple', online: 1024 },
    { id: 3, name: 'Dev Community', avatar: '💻', color: 'text-neon-cyan', online: 89 },
    { id: 4, name: 'Music & Chill', avatar: '🎵', color: 'text-neon-pink', online: 67 },
  ];

  const channels = [
    { id: 'general', name: 'general', type: 'text' as const, users: 42, unread: 3 },
    { id: 'random', name: 'random', type: 'text' as const, users: 18, unread: 0 },
    { id: 'announcements', name: 'announcements', type: 'text' as const, users: 156, unread: 1 },
    { id: 'voice-lounge', name: 'Voice Lounge', type: 'voice' as const, users: 5, limit: 10 },
    { id: 'game-room', name: 'Game Room', type: 'voice' as const, users: 8, limit: 15 },
    { id: 'conference', name: 'Conference Hall', type: 'voice' as const, users: 12, limit: 50 },
    { id: 'stream-room', name: 'Stream Room', type: 'stream' as const, users: 234, viewers: 1200 },
  ];

  const voiceUsers = [
    { id: 1, name: 'Alex', speaking: true, muted: false, deafened: false, streaming: false },
    { id: 2, name: 'Maria', speaking: false, muted: false, deafened: false, streaming: true },
    { id: 3, name: 'Dima', speaking: false, muted: true, deafened: false, streaming: false },
    { id: 4, name: 'Anna', speaking: false, muted: false, deafened: true, streaming: false },
    { id: 5, name: 'Ivan', speaking: true, muted: false, deafened: false, streaming: false },
  ];

  const onlineUsers = [
    { id: 1, name: 'Alex', status: 'online', role: 'admin', activity: 'In voice channel' },
    { id: 2, name: 'Maria', status: 'streaming', role: 'mod', activity: 'Streaming game' },
    { id: 3, name: 'Dima', status: 'gaming', role: 'user', activity: 'Playing CS2' },
    { id: 4, name: 'Anna', status: 'online', role: 'user', activity: 'Reading docs' },
    { id: 5, name: 'Ivan', status: 'away', role: 'user', activity: 'Away' },
    { id: 6, name: 'Sveta', status: 'dnd', role: 'user', activity: 'Do not disturb' },
  ];

  const messages = [
    { id: 1, user: 'Alex', message: 'Hey everyone! Welcome to Anaphora 🎉', time: '14:32', role: 'admin', reactions: ['👍', '🔥'] },
    { id: 2, user: 'Maria', message: 'Starting stream in 5 minutes! Join voice if you want to chat ✅', time: '14:35', role: 'mod', reactions: ['✅', '🎮'] },
    { id: 3, user: 'Dima', message: 'New update is ready for testing. Check it out: https://github.com/anaphora/v3.0', time: '14:37', role: 'user', reactions: ['🔧', '⚡'] },
    { id: 4, user: 'Anna', message: 'Great work on the new features! The UI looks amazing 🎨', time: '14:40', role: 'user', reactions: ['❤️', '🎨'] },
  ];

  const videoParticipants = [
    { id: 1, name: 'Alex', speaking: true, muted: false, camera: true, screen: false },
    { id: 2, name: 'Maria', speaking: false, muted: false, camera: true, screen: true },
    { id: 3, name: 'Dima', speaking: false, muted: true, camera: false, screen: false },
    { id: 4, name: 'Anna', speaking: false, muted: false, camera: true, screen: false },
  ];

  const handleChannelSelect = (channelId: string) => {
    setActiveChannel(channelId);
  };

  const handleVoiceToggle = () => {
    setIsInVoice(!isInVoice);
  };

  const handleLeaveVoice = () => {
    setIsInVoice(false);
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleToggleDeafen = () => {
    setIsDeafened(!isDeafened);
  };

  const handleToggleVideo = () => {
    setIsVideoCall(!isVideoCall);
  };

  const handleToggleScreenShare = () => {
    setIsScreenShare(!isScreenShare);
  };

  return (
    <div className="min-h-screen bg-dark-gradient text-white font-rubik">
      <Header />

      <div className="flex h-[calc(100vh-4rem)]">
        <ServersSidebar servers={servers} />

        <ChannelsSidebar
          channels={channels}
          voiceUsers={voiceUsers}
          onlineUsers={onlineUsers}
          activeChannel={activeChannel}
          isInVoice={isInVoice}
          isMuted={isMuted}
          isDeafened={isDeafened}
          isVideoCall={isVideoCall}
          isScreenShare={isScreenShare}
          onChannelSelect={handleChannelSelect}
          onVoiceToggle={handleVoiceToggle}
          onLeaveVoice={handleLeaveVoice}
          onToggleMute={handleToggleMute}
          onToggleDeafen={handleToggleDeafen}
          onToggleVideo={handleToggleVideo}
          onToggleScreenShare={handleToggleScreenShare}
        />

        <MainContent
          isVideoCall={isVideoCall}
          activeChannel={activeChannel}
          channels={channels}
          messages={messages}
          videoParticipants={videoParticipants}
        />

        <UsersSidebar onlineUsers={onlineUsers} />
      </div>
    </div>
  );
};

export default Index;