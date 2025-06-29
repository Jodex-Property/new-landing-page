import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import Logo from './logo'
import { Menu } from 'lucide-react'
import { NavMenu } from './navigation-bar'


const NavigationSheet = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
            </Button>
        </SheetTrigger>
        <SheetContent>
            <Logo />
           <NavMenu className="mt-12" orientation="vertical" />
        </SheetContent>
    </Sheet>
  )
}

export default NavigationSheet