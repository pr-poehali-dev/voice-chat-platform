import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface VoiceControlPanelProps {
  isInVoice: boolean;
  isMuted: boolean;
  isDeafened: boolean;
  isVideoCall: boolean;
  isScreenShare: boolean;
  onLeaveVoice: () => void;
  onToggleMute: () => void;
  onToggleDeafen: () => void;
  onToggleVideo: () => void;
  onToggleScreenShare: () => void;
}

const VoiceControlPanel = ({
  isInVoice,
  isMuted,
  isDeafened,
  isVideoCall,
  isScreenShare,
  onLeaveVoice,
  onToggleMute,
  onToggleDeafen,
  onToggleVideo,
  onToggleScreenShare,
}: VoiceControlPanelProps) => {
  if (!isInVoice) return null;

  return (
    <div className="p-4 bg-muted border-t border-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Avatar className="w-8 h-8 neon-border border-neon-green">
            <AvatarFallback className="bg-neon-green text-white text-xs">ТЫ</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Connected to voice</p>
            <p className="text-xs text-muted-foreground">Voice Lounge</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onLeaveVoice}
          className="neon-border text-neon-red hover:bg-neon-red hover:text-black"
        >
          <Icon name="PhoneOff" size={16} />
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant={isMuted ? "destructive" : "outline"}
          size="sm"
          onClick={onToggleMute}
          className={isMuted ? "bg-neon-red" : "neon-border text-neon-cyan hover:bg-neon-cyan hover:text-black"}
        >
          <Icon name={isMuted ? "MicOff" : "Mic"} size={16} />
        </Button>
        <Button
          variant={isDeafened ? "destructive" : "outline"}
          size="sm"
          onClick={onToggleDeafen}
          className={isDeafened ? "bg-neon-red" : "neon-border text-neon-cyan hover:bg-neon-cyan hover:text-black"}
        >
          <Icon name={isDeafened ? "VolumeX" : "Volume2"} size={16} />
        </Button>
        <Button
          variant={isVideoCall ? "default" : "outline"}
          size="sm"
          onClick={onToggleVideo}
          className={isVideoCall ? "bg-neon-green text-black" : "neon-border text-neon-green hover:bg-neon-green hover:text-black"}
        >
          <Icon name={isVideoCall ? "Video" : "VideoOff"} size={16} />
        </Button>
        <Button
          variant={isScreenShare ? "default" : "outline"}
          size="sm"
          onClick={onToggleScreenShare}
          className={isScreenShare ? "bg-neon-purple text-white" : "neon-border text-neon-purple hover:bg-neon-purple hover:text-white"}
        >
          <Icon name="Monitor" size={16} />
        </Button>
      </div>
    </div>
  );
};

export default VoiceControlPanel;