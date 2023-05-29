import Head from 'next/head';

import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function SpeakingSection({ children, ...props }) {
    return (
        <Section {...props}>
            <div className='space-y-16'>{children}</div>
        </Section>
    );
}

function Appearance({ title, description, event, cta, href }) {
    return (
        <Card as='article'>
            <Card.Title as='h3' href={href}>
                {title}
            </Card.Title>
            <Card.Eyebrow decorate>{event}</Card.Eyebrow>
            <Card.Description>{description}</Card.Description>
            <Card.Cta>{cta}</Card.Cta>
        </Card>
    );
}

export default function Speaking() {
    return (
        <>
            <Head>
                <title>Become Sponsors - Irsyad A. Panjaitan</title>
                <meta
                    name='description'
                    content='I’ve learned a lot from the open source community and I want to give back by sharing my knowledge and experience.'
                />
            </Head>
            <SimpleLayout
                title='If you like my work, consider by sponsoring me.'
                intro='I love to share my knowledge and experience. I’ve writed a package, write a tutorial and video course for everyone. If you like my work, consider by sponsoring me.'>
                <div className='space-y-20'>
                    <SpeakingSection title='By Platform'>
                        <Appearance
                            href='https://saweria.co/irsyadadl'
                            title='You can support me by donating me on Saweria'
                            description='I’ve writed a package, write a tutorial and video course for everyone. If you like my work, consider by sponsoring me.'
                            event='Saweria'
                            cta='Give gifts'
                        />
                        <Appearance
                            href='https://github.com/sponsors/irsyadadl'
                            title='Package, Project Scaffolding, Vscode Theme and more'
                            description='I’ve wrote a package, write an open source project like scaffolding, theme for vscode and more.'
                            event='Github Sponsors'
                            cta='Become Sponsors'
                        />
                        <Appearance
                            href='https://www.youtube.com/channel/UCPlEbdgWOXkKEEl7dhBxs4Q/join'
                            title='I am a Youtuber, write a tutorial and video course for everyone'
                            description='Write a tutorial and video course for everyone. If you like my work, consider by sponsoring me.'
                            event='Youtube Join'
                            cta='Join now'
                        />
                    </SpeakingSection>
                    <SpeakingSection title='Parsinta'>
                        <Appearance
                            href='https://parsinta.com/ebooks/belajar-laravel-lebih-dari-sekedar-fundamental'
                            title='Ebook Laravel 9 - 627 pages'
                            description='I’ve been exploring Laravel for 8 years and I’ve written a book about it. It’s a 627 pages book that covers everything from the basics to advanced topics.'
                            event='parsinta.com'
                            cta='Buy the book'
                        />
                        <Appearance
                            href='https://parsinta.com/premium'
                            title='I make the course and write the tutorial'
                            description='If you want to learn more about my course and tutorial, you can join my premium membership.'
                            event='2015 - Present'
                            cta='Become a pro member'
                        />
                    </SpeakingSection>
                </div>
            </SimpleLayout>
        </>
    );
}
