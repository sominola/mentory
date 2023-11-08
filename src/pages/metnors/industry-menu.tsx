import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

type Props = {
  className?: string;
};
export const IndustyMenu: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild className={props.className}>
        <Button variant="outline" className="font-bold border-[1px] border-solid border-foreground w-full flex gap-3">
          <div>Industry</div>
          {open ? <ChevronUp width="20px" /> : <ChevronDown width="20px" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px]">
        <DropdownMenuLabel>Industries</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          onSelect={(event) => event.preventDefault()}
          checked={selected}
          onCheckedChange={setSelected}>
          Python Developer
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
