import type { IconProps } from '@tabler/icons-react';

export interface NavLink {
    to: string;
    leftIcon: React.ForwardRefExoticComponent<
        IconProps & React.RefAttributes<SVGSVGElement>
    >;
    title: string;
}
