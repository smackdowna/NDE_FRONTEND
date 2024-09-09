import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { ICONS, IMAGES } from '@/assets';

// Props type for HamburgerDropdown
interface HamburgerDropdownProps {
    isOpen: boolean;
    onClose: () => void;
}

// Props type for DropdownLink
interface DropdownLinkProps {
    href: string;
    icon: StaticImageData;
    label: string;
}

// DropdownLink component
const DropdownLink: React.FC<DropdownLinkProps> = ({ href, icon, label }) => (
    <Link href={href}>
        <div className="flex gap-3 items-center transition-transform duration-300">
            <Image
                src={icon}
                alt={label}
                className="bg-gradient-light w-[40px] h-[40px] max-2xl:w-[50px] max-xl:w-[40px] max-2xl:h-[50px] max-xl:h-[40px] rounded-lg p-2"
            />
            <div className="flex flex-col font-roboto">
                <span className="font-400 opacity-70 text-lg max-2xl:text-lg max-xl:text-sm">{label}</span>
            </div>
        </div>
    </Link>
);

// HamburgerDropdown component
const HamburgerDropdown: React.FC<HamburgerDropdownProps> = ({ isOpen, onClose }) => {
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    const toggleProductSection = () => {
        setIsProductOpen((prev) => !prev);
    };

    const toggleResourcesSection = () => {
        setIsResourcesOpen((prev) => !prev);
    };

    const dropdownTransition = useTransition(isOpen, {
        from: { opacity: 0, transform: 'translateX(100%)' },
        enter: { opacity: 1, transform: 'translateX(0)' },
        leave: { opacity: 0, transform: 'translateX(100%)' },
        config: { duration: 300 },
    });

    const productTransition = useTransition(isProductOpen, {
        from: { maxHeight: 0, opacity: 0 },
        enter: { maxHeight: 1000, opacity: 1 },
        leave: { maxHeight: 0, opacity: 0 },
        config: { duration: 300 },
    });

    const resourcesTransition = useTransition(isResourcesOpen, {
        from: { transform: 'rotate(0deg)' },
        enter: { transform: 'rotate(45deg)' },
        leave: { transform: 'rotate(0deg)' },
        config: { duration: 300 },
    });

    return dropdownTransition((style, item) =>
        item ? (
            <animated.div
                style={style}
                className="fixed right-0 top-0 z-50 flex items-center justify-end bg-opacity-50"
            >
                <div className="relative bg-white w-[50vw] max-md:w-[100vw] p-10 overflow-y-auto h-[100vh] shadow-lg">
                    {/* Close Button */}
                    <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold text-gray-800">
                        &times;
                    </button>

                    {/* Product Section */}
                    <div
                        className="flex justify-between py-6 items-center cursor-pointer"
                        onClick={toggleProductSection}
                    >
                        <span className="font-bold font-roboto text-xl">Product</span>
                        <Image
                            src={ICONS.dropdown}
                            className={`w-5 h-4 transform ${isProductOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
                            alt="Dropdown Toggle"
                        />
                    </div>
                    {productTransition((style, item) =>
                        item ? (
                            <animated.div style={style} className="flex flex-col gap-8">
                                <div>
                                    <h2 className="font-bold font-roboto text-3xl max-2xl:text-2xl max-xl:text-xl">Build</h2>
                                    <div className="py-2 flex flex-col gap-4">
                                        <DropdownLink href="/domain" icon={ICONS.Domain} label="Domain" />
                                        <DropdownLink href="/hosting" icon={ICONS.Hosting} label="Hosting" />
                                        <DropdownLink href="/googleworkspace" icon={ICONS.workspace} label="Google Workspace" />
                                        <DropdownLink href="/googleworkspace" icon={ICONS.NDE} label="NDE Mail" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="font-bold font-roboto text-3xl max-2xl:text-2xl max-xl:text-xl">Manage</h2>
                                    <div className="py-4 flex flex-col gap-4">
                                        <DropdownLink href="/domain" icon={ICONS.Domain} label="Vision Now" />
                                        <DropdownLink href="/domain" icon={ICONS.chatNow} label="Chat Now" />
                                        <DropdownLink href="/spotnow" icon={ICONS.SpotNow} label="Spot Now" />
                                        <DropdownLink href="/domain" icon={ICONS.PeopleNow} label="Peoples Now" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="font-bold font-roboto text-3xl max-2xl:text-2xl max-xl:text-xl">Grow</h2>
                                    <div className="py-4 flex flex-col gap-4">
                                        <DropdownLink href="/domain" icon={ICONS.market} label="Marketing Planner" />
                                        <DropdownLink href="/domain" icon={ICONS.newGoogle} label="Google Ads" />
                                        <DropdownLink href="/domain" icon={ICONS.Meta} label="Social Media Ads" />
                                        <DropdownLink href="/domain" icon={ICONS.MailNow} label="Mails Now" />
                                    </div>
                                </div>
                            </animated.div>
                        ) : null
                    )}

                    {/* Resources Section */}
                    <div
                        className="flex justify-between pb-6 items-center cursor-pointer"
                    >
                        <span className="font-bold font-roboto text-xl"> Resources</span>
                        <Image
                            src={ICONS.dropdown}
                            className={`w-5 h-4 transform ${isProductOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
                            alt="Dropdown Toggle"
                        />
                    </div>
                    <div
                        className="flex justify-between pb-6 items-center cursor-pointer"
                    >
                        <span className="font-bold font-roboto text-xl"> Demo</span>
                        <Image
                            src={ICONS.dropdown}
                            className={`w-5 h-4 transform ${isProductOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
                            alt="Dropdown Toggle"
                        />
                    </div>
                    <div
                        className="flex justify-between pb-6 items-center cursor-pointer"
                    >
                        <span className="font-bold font-roboto text-xl">Contact</span>
                        <Image
                            src={ICONS.dropdown}
                            className={`w-5 h-4 transform ${isProductOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
                            alt="Dropdown Toggle"
                        />
                    </div>
                </div>
            </animated.div>
        ) : null
    );
};

export default HamburgerDropdown;
