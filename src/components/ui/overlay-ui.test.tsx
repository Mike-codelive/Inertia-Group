import { render, screen } from '@testing-library/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './sheet';

describe('overlay UI components', () => {
  it('renders open dialog content', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogDescription>Dialog description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Dialog title')).toBeInTheDocument();
  });

  it('renders open dropdown menu content', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Open menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Menu item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByText('Menu item')).toBeInTheDocument();
  });

  it('renders select trigger and open options', () => {
    render(
      <Select open value="hcp">
        <SelectTrigger aria-label="Product family">
          <SelectValue placeholder="Select family" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="hcp">HCP</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByRole('combobox', { name: 'Product family', hidden: true })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'HCP' })).toBeInTheDocument();
  });

  it('renders open sheet content', () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet title</SheetTitle>
            <SheetDescription>Sheet description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Sheet title')).toBeInTheDocument();
  });
});
