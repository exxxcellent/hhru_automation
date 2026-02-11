import { Button, Typography } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import type { NavLink } from '../types/link.type';

interface NavLinkProps {
    link: NavLink;
}

export default function NavLink({ link }: NavLinkProps) {
    const LeftIconComponent = link.leftIcon;

    return (
        <Link
            to={link.to}
            className="w-full">
            <Button
                className="!flex !items-center"
                radius="md"
                h="100%"
                p={'8px'}
                fullWidth
                variant="subtle"
                color="dark">
                <LeftIconComponent className="size-5 mr-2" />
                <Typography fz="lg">{link.title}</Typography>
            </Button>
        </Link>
    );
}
