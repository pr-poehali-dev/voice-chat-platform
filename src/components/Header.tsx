import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-card border-b border-border glass-effect sticky top-0 z-50">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/4b5ec539-bd7c-4a37-a1a3-a57a3df286aa.png" 
              alt="Anaphora Logo" 
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-2xl font-bold font-montserrat bg-neon-gradient bg-clip-text text-transparent">
              Anaphora
            </h1>
          </div>
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
  );
};

export default Header;