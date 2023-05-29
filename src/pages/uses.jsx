import Head from 'next/head';

import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function ToolsSection({ children, ...props }) {
    return (
        <Section {...props}>
            <ul role='list' className='space-y-16'>
                {children}
            </ul>
        </Section>
    );
}

function Tool({ title, href, children }) {
    return (
        <Card as='li'>
            <Card.Title as='h3' href={href}>
                {title}
            </Card.Title>
            <Card.Description>{children}</Card.Description>
        </Card>
    );
}

export default function Uses() {
    return (
        <>
            <Head>
                <title>Uses - Irsyad A. Panjaitan</title>
                <meta
                    name='description'
                    content='Software I use, gadgets I love, and other things I recommend.'
                />
            </Head>
            <SimpleLayout
                title='Software I use, gadgets I love, and other things I recommend.'
                intro='I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.'>
                <div className='space-y-20'>
                    <ToolsSection title='Workstation'>
                        <Tool title='MacBook Pro M1 (2020)'>
                            For now, the Apple M1 Chip (8-Core CPU, 8-Core GPU) with 256GB storage
                            and 8GB RAM is enough for my daily work. Incidentally because I
                            subscribe to iCloud, so I don't need to buy up to 1 TB. And also it's
                            not a cheap price for now I think.
                        </Tool>
                        <Tool title='PodMic Dynamic Broadcast Microphone'>
                            In the past year, this is the mic I used when recording video tutorials
                            at Parsinta, plus the Professional Studio Arm which is also from Rode.
                            And to connect my voice so that it can be heard properly, I use
                            Single-Channel Audio Interface.
                        </Tool>
                        <Tool title='iPhone 11'>
                            You know that the iPhone 14 just came out, but I'm still comfortable
                            with this. And more importantly, all my needs were met and that was more
                            than enough. And of course I will not be stuck with the words "This is
                            the best iPhone we ever made" ⸺ J/K.
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title='Development tools'>
                        <Tool title='PHPStorm'>
                            Starting from October 1st, I will renew my license for the next 1 year
                            ($99), because it seems that I really need it. I said update again,
                            because I've previously used it for 1 year from 2019 - 2020. The theme
                            I'm currently using is Carbon.
                        </Tool>
                        <Tool title='Visual Studio Code'>
                            As of October 1st my main editor is PHPStorm, and going forward I'll
                            probably use it only occasionally. The theme I'm currently using is
                            Parsinta Request.
                        </Tool>
                        <Tool title='The font I use'>Dank Mono ($24)</Tool>
                        <Tool title='iTerm'>
                            I’m honestly not even sure what features I get with this that aren’t
                            just part of the macOS Terminal but it’s what I use.
                        </Tool>
                        <Tool title='Warp'>
                            Apart from using iTerm. I sometimes use Warp, yes it all depends on the
                            mood too.
                        </Tool>
                        <Tool title='TablePlus'>
                            This is the most robust tool I've ever used to interface with mysql. But
                            unfortunately, it's not free. So I have to buy it. When I bought it, it
                            was still around $79 and that's what I chose was basic. Because also the
                            device I'm currently using is only one.
                        </Tool>
                        <Tool title='Laravel Forge'>
                            I'm too lazy to mess around with the server, so I'm thinking of just
                            subscribing to Laravel Forge. I took the "Hobby" package for now which
                            was $12/mo, previously I used "Growth" which was $19/mo, but I think
                            it's useless for now, so I downgrade.
                        </Tool>
                        <Tool title='Amazon S3'>
                            I won't talk much about this issue, because I only use it as storage for
                            my website.
                        </Tool>
                        <Tool title='Figma'>
                            For creating thumbnail series or open graph images, Figma is the tool I
                            use and the only one. Previously I used Sketch, but you know it's not
                            free. But Figma do.
                        </Tool>
                        <Tool title='Browser'>
                            For work I use Firefox, and if I just want to browse, I choose Safari.
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title='Productivity'>
                        <Tool title='Raycast'>
                            Long time with Alfred, but since I know how amazing Raycast is, I feel
                            very stupid if I don't use this tool.
                        </Tool>
                        <Tool title='Notes'>
                            I know there are better tools than this, but you know, I'm comfortable
                            with this. so it's hard for me to move.
                        </Tool>
                        <Tool title='Typora'>
                            Apart from making video tutorials, I also write books. So I need an
                            application that supports the name Markdown. So typeora is my choice for
                            now. It's not free, when I bought it it was still around $15.
                        </Tool>
                        <Tool title='Xnapper'>
                            I know, every computer must have a built-in screenshot, but I think
                            xnapper makes my work more productive by not opening Figma every time I
                            want to post everywhere.
                        </Tool>
                        <Tool title='1Password'>
                            I know there are a lot of password managers, but I only stick with 1
                            password and it's been 3 years. Because now there are lots of websites
                            or applications that offer what is called two-factor authentication. So
                            I think using 1password is easier to not download other applications.
                        </Tool>
                        <Tool title='DaVinci Resolved'>
                            I use this tool to edit all the videos in Parsinta. Previously I did use
                            screensflow, obs, and until I realized that D/R was more powerful.
                        </Tool>
                    </ToolsSection>
                </div>
            </SimpleLayout>
        </>
    );
}
