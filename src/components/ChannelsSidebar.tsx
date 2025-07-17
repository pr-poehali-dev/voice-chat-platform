import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import VoiceControlPanel from './VoiceControlPanel';

interface Channel {
  id: string;
  name: string;
  type: 'text' | 'voice' | 'stream';
  users: number;
  unread?: number;
  limit?: number;
  viewers?: number;
}

interface VoiceUser {
  id: number;
  name: string;
  speaking: boolean;
  muted: boolean;
  deafened: boolean;
  streaming: boolean;
}

interface User {
  id: number;
  name: string;
  status: string;
  role: string;
  activity: string;
}

interface ChannelsSidebarProps {
  channels: Channel[];
  voiceUsers: VoiceUser[];
  onlineUsers: User[];
  activeChannel: string;
  isInVoice: boolean;
  isMuted: boolean;
  isDeafened: boolean;
  isVideoCall: boolean;
  isScreenShare: boolean;
  onChannelSelect: (channelId: string) => void;
  onVoiceToggle: () => void;
  onLeaveVoice: () => void;
  onToggleMute: () => void;
  onToggleDeafen: () => void;
  onToggleVideo: () => void;
  onToggleScreenShare: () => void;
}

const ChannelsSidebar = ({
  channels,
  voiceUsers,
  onlineUsers,
  activeChannel,
  isInVoice,
  isMuted,
  isDeafened,
  isVideoCall,
  isScreenShare,
  onChannelSelect,
  onVoiceToggle,
  onLeaveVoice,
  onToggleMute,
  onToggleDeafen,
  onToggleVideo,
  onToggleScreenShare,
}: ChannelsSidebarProps) => {
  return (
    <div className="w-80 bg-card border-r border-border glass-effect flex flex-col">
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-3 mb-4">
          <img 
            src="https://cdn.poehali.dev/files/4b5ec539-bd7c-4a37-a1a3-a57a3df286aa.png" 
            alt="Server Icon" 
            className="w-6 h-6 object-contain"
          />
          <h2 className="font-montserrat text-lg font-semibold text-neon-cyan">
            Anaphora Official
          </h2>
        </div>
        <div className="text-sm text-muted-foreground mb-4">
          {onlineUsers.filter(u => u.status === 'online').length} online • {onlineUsers.length} members
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          {/* Text Channels */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-2 flex items-center">
              <Icon name="Hash" size={12} className="mr-2" />
              Text Channels
            </h3>
            <div className="space-y-1">
              {channels.filter(c => c.type === 'text').map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => onChannelSelect(channel.id)}
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
                    {channel.unread && channel.unread > 0 && (
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
              Voice Channels
            </h3>
            <div className="space-y-1">
              {channels.filter(c => c.type === 'voice').map((channel) => (
                <div key={channel.id} className="space-y-1">
                  <button
                    onClick={onVoiceToggle}
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
              Streams
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
                      {channel.viewers} viewers
                    </Badge>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <VoiceControlPanel
        isInVoice={isInVoice}
        isMuted={isMuted}
        isDeafened={isDeafened}
        isVideoCall={isVideoCall}
        isScreenShare={isScreenShare}
        onLeaveVoice={onLeaveVoice}
        onToggleMute={onToggleMute}
        onToggleDeafen={onToggleDeafen}
        onToggleVideo={onToggleVideo}
        onToggleScreenShare={onToggleScreenShare}
      />
    </div>
  );
};

export default ChannelsSidebar;