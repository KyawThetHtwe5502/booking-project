import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "../ui/navigation-menu"

const NavigationComponents = ({item,children}) => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-opacity-0 active:bg-opacity-0   hover:bg-opacity-0 dark:hover:bg-opacity-0 dark:bg-opacity-0">{item}</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-2 ">
                        {children}
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}

export default NavigationComponents