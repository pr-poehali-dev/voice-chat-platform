import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Server {
  id: number;
  name: string;
  avatar: string;
  color: string;
  online: number;
}

interface ServersSidebarProps {
  servers: Server[];
}

const ServersSidebar = ({ servers }: ServersSidebarProps) => {
  return (
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
  );
};

export default ServersSidebar;