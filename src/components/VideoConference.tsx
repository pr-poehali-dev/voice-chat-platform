import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface VideoParticipant {
  id: number;
  name: string;
  speaking: boolean;
  muted: boolean;
  camera: boolean;
  screen: boolean;
}

interface VideoConferenceProps {
  participants: VideoParticipant[];
}

const VideoConference = ({ participants }: VideoConferenceProps) => {
  return (
    <div className="flex-1 p-6 bg-black">
      <div className="grid grid-cols-2 gap-4 h-full">
        {participants.map((participant) => (
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
                  <p className="text-sm text-gray-400">Camera off</p>
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
  );
};

export default VideoConference;