import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface User {
  id: number;
  name: string;
  status: string;
  role: string;
  activity: string;
}

interface UsersSidebarProps {
  onlineUsers: User[];
}

const UsersSidebar = ({ onlineUsers }: UsersSidebarProps) => {
  return (
    <div className="w-64 bg-card border-l border-border glass-effect">
      <div className="p-4">
        <Tabs defaultValue="online" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="online">Online</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
          <TabsContent value="online" className="space-y-3 mt-4">
            <h3 className="font-montserrat text-sm font-semibold text-neon-purple">
              Online — {onlineUsers.filter(u => u.status === 'online').length}
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
              All Members — {onlineUsers.length}
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
  );
};

export default UsersSidebar;