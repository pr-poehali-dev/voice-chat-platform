import VideoConference from './VideoConference';
import ChatView from './ChatView';

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

interface VideoParticipant {
  id: number;
  name: string;
  speaking: boolean;
  muted: boolean;
  camera: boolean;
  screen: boolean;
}

interface MainContentProps {
  isVideoCall: boolean;
  activeChannel: string;
  channels: Channel[];
  messages: Message[];
  videoParticipants: VideoParticipant[];
}

const MainContent = ({
  isVideoCall,
  activeChannel,
  channels,
  messages,
  videoParticipants,
}: MainContentProps) => {
  return (
    <div className="flex-1 flex flex-col">
      {isVideoCall ? (
        <VideoConference participants={videoParticipants} />
      ) : (
        <ChatView
          activeChannel={activeChannel}
          channels={channels}
          messages={messages}
        />
      )}
    </div>
  );
};

export default MainContent;