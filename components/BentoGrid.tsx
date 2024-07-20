import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

export function BentoGridDemo() {
    return (
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                    link={item.link}
                />
            ))}
        </BentoGrid>
    );
}
const RestaurantImage = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl relative  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
        <Image
            src='/assets/images/restaurant.png'
            alt='restaurant'
            width={1895}
            height={824}
            className="w-full relative"
        />
    </div>
);

const MinsweeperImages = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl relative  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
        <Image
            src='/assets/images/minsweeper.png'
            alt='restaurant'
            width={520}
            height={824}
            className="w-full relative"
        />
    </div>
);

const BluemanAdventureImage = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl relative  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
        <Image
            src='/assets/images/blueman-adventure.png'
            alt='restaurant'
            width={3240}
            height={3240}
            className="w-full relative"
        />
    </div>
);

const ReactImage = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl relative  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
        <Image
            src='/assets/images/react-cv.png'
            alt='restaurant'
            width={1440}
            height={822}
            className="w-full relative"
        />
    </div>
);

// Icons of restaurant managenment project
const Resicons = () => (
    <div className="flex flex-row gap-3 w-4 h-4 ">
        <Image
            src='/assets/icons/tailwindcss.png'
            alt='tailwind'
            width={20}
            height={20}
            className="dark:border-1 dark:border-dm rounded dark:bg-dm"
        />
        <Image
            src='/assets/icons/mysql.png'
            alt='mysql'
            width={20}
            height={20}
            className="dark:border-1 dark:border-dm rounded dark:bg-dm"
        />
        <Image
            src='/assets/icons/react.png'
            alt='react'
            width={20}
            height={20}
            className="dark:border-1 dark:border-dm rounded dark:bg-dm"
        />
        <Image
            src='/assets/icons/javascript.png'
            alt='react'
            width={20}
            height={20}
            className="dark:border-1 dark:border-dm rounded dark:bg-dm"
        />
    </div>
);

// Icons of Minsweeper project
const MinesIcons = () => (
    <div className="flex flex-row gap-3 w-4 h-4">
        <Image
            src='/assets/icons/vscode.png'
            alt='react'
            width={20}
            height={20}
            className="dark:border-1 dark:border-dm rounded dark:bg-dm"
        />
        <Image
            src='/assets/icons/java.png'
            alt='react'
            width={20}
            height={20}
            className="dark:border-1 dark:border-dm rounded dark:bg-dm"
        />
        <Image
            src='/assets/icons/github.png'
            alt='react'
            width={20}
            height={20}
            className="dark:border-1 dark:border-dm rounded dark:bg-dm"
        />
    </div>
);

// Icons of blueman adventure project
const BluemanIcons = () => (
    <div className="flex flex-row gap-3 w-4 h-4">
        <Image
            src='/assets/icons/vscode.png'
            alt='react'
            width={20}
            height={20}
            className="dark:border-1 dark:border-dm rounded dark:bg-dm"
        />
        <Image
            src='/assets/icons/java.png'
            alt='react'
            width={20}
            height={20}
            className="dark:border-1 dark:border-dm rounded dark:bg-dm"
        />
        <Image
            src='/assets/icons/github.png'
            alt='react'
            width={20}
            height={20}
            className="dark:border-1 dark:border-dm rounded dark:bg-dm"
        />
    </div>
);

// Icons of react-cv project
const ReactIcons = () => (
    <div className="flex flex-row gap-3 w-4 h-4">
        <Image
            src='/assets/icons/react.png'
            alt='react'
            width={20}
            height={20}
            className="dark:border-1 dark:border-dm rounded dark:bg-dm"
        />
        <Image
            src='/assets/icons/mongodb.png'
            alt='react'
            width={20}
            height={20}
            className="dark:border-1 dark:border-dm rounded dark:bg-dm"
        />
        <Image
            src='/assets/icons/github.png'
            alt='react'
            width={20}
            height={20}
            className="dark:border-1 dark:border-dm rounded dark:bg-dm"
        />
    </div>
);

const items = [
    {
        title: "Restaurant System Management",
        description: "A web application making from React and Tailwind.",
        header: <RestaurantImage />,
        className: "md:col-span-2",
        link: 'https://github.com/kevinphuc/restaurant-management-system',
        icon: <Resicons />,
    },
    {
        title: "Minsweeper",
        description: "The minsweeper using java and its libraries.",
        header: <MinsweeperImages />,
        className: "md:col-span-1",
        link: 'https://github.com/drdan2022010/IU-DSA-project',
        icon: <MinesIcons />,
    },
    {
        title: "Blueman Adventure",
        description: "Inspired from The Legend of Zelda, this java's game provide a 2D world with multiple game mode.",
        header: <BluemanAdventureImage />,
        className: "md:col-span-1",
        link: 'https://github.com/vinhbaophuc1611/BluemanAdventure',
        icon: <BluemanIcons />,
    },
    {
        title: "React CV",
        description: "Web application for building personal résumè.",
        header: <ReactImage />,
        className: "md:col-span-2",
        link: 'https://github.com/vinhbaophuc1611/react-cv',
        icon: <ReactIcons />,
    },
];
