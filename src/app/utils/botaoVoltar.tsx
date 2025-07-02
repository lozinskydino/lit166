'use client';
import React, { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

interface TransitionLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const BotaoVoltar = ({
    children,
    href,
    ...props
}: TransitionLinkProps) => {
    const router = useRouter();
    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();

        const body = document.querySelector('body');
        body?.classList.add('page-transition');

        await sleep(400);

        router.push(href);

        await sleep(200);

        body?.classList.remove('page-transition');

    }

    return (
        
        <Link href={href} {...props} className="z-10 NotoSans-Light "
        onClick={handleTransition}>
<div className="h-[100%] w-[100%] ">
<p className='text-right' >{children}</p>
</div>
        
    </Link>
)
        
}

export default BotaoVoltar;